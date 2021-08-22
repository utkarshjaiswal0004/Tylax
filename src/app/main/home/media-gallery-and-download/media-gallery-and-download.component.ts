import { Component, OnInit } from '@angular/core';

export const ITEMS: any = [
  {
    title: 'Our Mission',
    value: 'item_1',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    img_url: '../../../../assets/sample/1.png',
    img_discription: 'Tylax Our Mission Image'
  },
  {
    title: 'Title 2',
    value: 'item_2',
    message: 'Title 2 message',
    img_url: '../../../../assets/sample/1.png'
  },
  {
    title: 'Title 3',
    value: 'item_3',
    message: 'Title 3 message',
    img_url: '../../../../assets/sample/1.png'
  },
  {
    title: 'Title 4',
    value: 'item_4',
    message: 'Title 4 message',
    img_url: '../../../../assets/sample/1.png'
  },
];


@Component({
  selector: 'app-media-gallery-and-download',
  templateUrl: './media-gallery-and-download.component.html',
  styleUrls: ['./media-gallery-and-download.component.scss']
})
export class MediaGalleryAndDownloadComponent implements OnInit {


  radioSel: any;
  radioSelected?: string;
  radioSelectedString?: string;
  itemsList: any = ITEMS;

  constructor() {
    this.itemsList = ITEMS;
    this.radioSelected = 'item_1';
    this.getSelecteditem();
  }

  ngOnInit(): void {
  }

  getSelecteditem(): any {
    this.radioSel = ITEMS.find((Item: any) => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item: any): any {
    this.getSelecteditem();
  }

  hoverImg(event: any): any{
    document.querySelector('.cards .cards-item img.active')?.classList.remove('active');
    event.path[0]?.classList.add('active');
  }

}
