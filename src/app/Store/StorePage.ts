import { StoreService } from './store.service';
import { Component } from '@angular/core';
import { mobiscroll, MbscListviewOptions } from '@mobiscroll/angular';
import { Storelistmodel } from './Store.model';

@Component({
  selector: 'app-root',
  templateUrl: './Store.page.html',
  styleUrls: ['./Store.page.scss'],
})
export class StorePage {
  stores: Storelistmodel[];
  // Place the code below into your own component or use the full template
  formSettings = {
    lang: 'ar',
    theme: 'ios',
    themeVariant: 'light',
  };
  listviewSettings: MbscListviewOptions = {
    themeVariant: 'light',
    lang: 'ar',
    stages: [
      {
        percent: -25,
        color: 'red',
        text: 'حذف ',
        confirm: true,
        action: (event, inst) => {
          // this.storelist.splice(event.index, 1);
        },
      },
      {
        themeVariant: 'light',
        lang: 'ar',
        percent: 25,
        color: 'green',
        text: 'تعديل ',
        confirm: true,
        action: (event, inst) => {
          mobiscroll.prompt({
            title: 'تعديل الفرع',
            message: 'ادخال التعديلات ',
            placeholder: 'What to do next...',
            callback: (value: string) => {
              this.storelist[event.index].text = value;
              mobiscroll.toast({
                message: 'Update item added',
                color: 'success',
              });
            },
          });
        },
      },
    ],
  };
  constructor(public storeService: StoreService) {
    this.storelist();
  }
  storelist() {
    this.storeService.getStores().subscribe((result) => {
      if (result.succeeded) {
        console.log(result);

        this.stores = result.data;
      } else {
        console.log(result);
      }
    });
  }

  add() {
    mobiscroll.prompt({
      title: 'اضافة فرع جديد',
      placeholder: '... اضافة اسم الفرع',
      callback: (value) => {
        if (value !== null) {
          this.storeService.addStores(value).subscribe((res) => {
            if (res.succeeded) {
              this.storelist();
              mobiscroll.toast({
                message: 'تم اضاقة العنصر بنجاح',
                color: 'success',
              });
            } else {
              mobiscroll.toast({
                message: 'حدث خطأ ما ',
                color: 'danger',
              });
            }
          });
        }
      },
    });
  }
}
