import { Component, OnInit, AfterViewInit } from '@angular/core';

// // import Swiper core and required modules
// import SwiperCore from 'swiper';
export const ITEMS: any = [
  {
    title: 'Our Mission',
    value: '1',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    img_url: '../../../../assets/sample/1.png',
    img_discription: 'Tylax Our Mission Image'
  },
  {
    title: 'Title 2',
    value: '2',
    message: 'Title 2 message',
    img_url: '../../../../assets/sample/1.png'
  },
  {
    title: 'Title 3',
    value: '3',
    message: 'Title 3 message',
    img_url: '../../../../assets/sample/1.png'
  },
  {
    title: 'Title 4',
    value: '4',
    message: 'Title 4 message',
    img_url: '../../../../assets/sample/1.png'
  },
];


@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit, AfterViewInit {

  radioSel: any;
  radioSelected?: any;
  radioSelectedString?: string;
  itemsList: any = ITEMS;
  // prev = 'swiper-slide-prev';
  // active = 'swiper-slide-active';
  // next = 'swiper-slide-next';

  constructor(
    // private swiper: SwiperCore
  ) {
    this.itemsList = ITEMS;
    this.radioSelected = '1';
    this.getSelecteditem();
  }

  ngOnInit(): void {
  }
ngAfterViewInit(): void{
  // swiper();
  // setTimeout((el: any) => {
  //   this.swiperChangeActive();
  // }, 100);
}


  // onSwiper(swiper: any): any {
  //   console.log(swiper);
  // }
  // onSlideChange(): any {
  //   console.log('slide change');
  // }


  getSelecteditem(): any {
    this.radioSel = ITEMS.find((Item: any) => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(): any {
    this.getSelecteditem();
    // this.swiperChangeActive();
  }

  // swiperChangeActive(): any {
  //   const prev = document.querySelector('.' + this.prev);
  //   const active = document.querySelector('.' + this.active);
  //   const next = document.querySelector('.' + this.next);
  //   const position = document.getElementById(this.radioSel.value)?.ariaLabel?.charAt(0);
  //   const length = document.getElementById(this.radioSel.value)?.ariaLabel?.length;
  //   const actualLength = length ? length - 1 : 0;

  //   prev?.classList.remove(this.prev);
  //   active?.classList.remove('swiper-slide-visible');
  //   active?.classList.remove(this.active);
  //   next?.classList.remove(this.next);

  //   document.getElementById(this.radioSel.value)?.classList.add(this.active);
  //   document.getElementById(this.radioSel.value)?.classList.add('swiper-slide-visible');

  //   swiper();
  // }
}
