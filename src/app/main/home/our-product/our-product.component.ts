import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.scss']
})
export class OurProductComponent implements OnInit {

  clickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectPrevious(event: any): any {
    console.log(event);
    if (this.clickCount > 0) {
      document.querySelector('div.cards-item.active')?.classList.remove('active');
      this.clickCount--;
      document.querySelector('div.cards')?.children.item(this.clickCount)?.classList.add('active');
      document.querySelector('div.cards-item.active')?.scrollIntoView();
      this.targetInActiveClass();
    }
  }
  selectNext(event: any): any {
    console.log(event);
    if (this.clickCount < 5) {
      document.querySelector('div.cards-item.active')?.classList.remove('active');
      this.clickCount++;
      document.querySelector('div.cards')?.children.item(this.clickCount)?.classList.add('active');
      document.querySelector('div.cards-item.active')?.scrollIntoView();
      this.targetInActiveClass();
    }
  }

  targetInActiveClass(): void {
    if (this.clickCount === 0) {
      document.querySelector('img.left')?.classList.add('inActive');
    } else {
      document.querySelector('img.left')?.classList.remove('inActive');
    }
    if (this.clickCount === 5) {
      document.querySelector('img.right')?.classList.add('inActive');
    } else {
      document.querySelector('img.right')?.classList.remove('inActive');
    }
  }


  onWheel(event: WheelEvent): void {
    const mouseWheel = document.querySelector('#scrollable');
    event.preventDefault();
    if (mouseWheel) {
    if (event.deltaY > 0) {
      mouseWheel.scrollLeft += 200;
    } else {
      mouseWheel.scrollLeft -= 200;
    }
  }
  }
}


