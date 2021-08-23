import { Component, OnInit } from '@angular/core';

export const Gallery: any = [
  {
    title: 'Contractors Meet',
    value: 'item_1',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
      img_url: '../../../../assets/sample/1.png',
      img_discription: 'Tylax Image Gallery'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      }]
  },
  {
    title: 'Awards & Recognition',
    value: 'item_2',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Image Gallery'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      }]
  },
  {
    title: 'Projects Done',
    value: 'item_3',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Image Gallery'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      }]
  },
  {
    title: 'Exhibitions',
    value: 'item_4',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Image Gallery'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      },
      {
        img_url: '../../../../assets/sample/1.png',
        img_discription: 'Tylax Our Mission Image'
      }]
  },
];


@Component({
  selector: 'app-media-gallery-and-download',
  templateUrl: './media-gallery-and-download.component.html',
  styleUrls: ['./media-gallery-and-download.component.scss']
})
export class MediaGalleryAndDownloadComponent implements OnInit {


  selectItem: any;
  selected?: string;
  selectedString?: string;
  galleryList: any = Gallery;

  constructor() {
    this.galleryList = Gallery;
    this.selected = 'item_1';
    this.getSelecteditem();
  }

  ngOnInit(): void {
  }

  getSelecteditem(): any {
    this.selectItem = Gallery.find((Item: any) => Item.value === this.selected);
    this.selectedString = JSON.stringify(this.selectItem);
    console.log(this.selectItem);
    console.log(this.selectedString);

  }

  onItemChange(item: any): any {
    this.getSelecteditem();
  }

  hoverImg(event: any): any{
    document.querySelector('.cards .cards-item img.active')?.classList.remove('active');
    event.path[0]?.classList.add('active');
  }

}
