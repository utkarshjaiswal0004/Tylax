import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

export const Gallery: any = [
  {
    id: 'item_1',
    title: 'Contractors Meet',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_2',
    title: 'Awards & Recognition',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_3',
    title: 'Projects Done',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_4',
    title: 'Exhibitions',
    message: 'Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
];


@Component({
  selector: 'app-media-gallery-and-download',
  templateUrl: './media-gallery-and-download.component.html',
  styleUrls: ['./media-gallery-and-download.component.scss']
})
export class MediaGalleryAndDownloadComponent implements OnInit {


  selectedItem: any;
  selectedString?: string;
  galleryList: any = Gallery;

  constructor() {
    this.galleryList = Gallery;
    this.getSelecteditem('item_1');
  }

  ngOnInit(): void {
  }

  getSelecteditem(item: any): void {
    this.selectedItem = Gallery.find((Item: any) => Item.id === item);
    this.selectedString = JSON.stringify(this.selectedItem);
    console.log(this.selectedItem);
    console.log(this.selectedString);
  }

  setActiveClass(selectedItemId?: Event, selectedImageId?: Event): void{}

  onItemChange(item: any): any {
    this.getSelecteditem(item);
  }

  hoverSelectActiveImg(selectedImageId: any): any{
    const id: string = '#' + selectedImageId;
    console.log(id);
    document.querySelector('.cards .cards-item img.active')?.classList.remove('active');
    document.getElementById(id)?.classList.add('active');
    // event.path[0]?.classList.add('active');
  }


  a(e: Event): any{
    console.log(e);
  }
}
