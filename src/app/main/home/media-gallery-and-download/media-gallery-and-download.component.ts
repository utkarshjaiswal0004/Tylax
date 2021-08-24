import { AfterViewInit, Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

export const Gallery: any = [
  {
    id: 'item_1',
    title: 'Contractors Meet',
    message: '1 Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_1_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_1_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_1_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_2',
    title: 'Awards & Recognition',
    message: '2 Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_2_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_2_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_3',
    title: 'Projects Done',
    message: '3 Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_3_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_3_3',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      }]
  },
  {
    id: 'item_4',
    title: 'Exhibitions',
    message: '4 Construction Chemicals plays a important role, it helps in increasing the productivity but also contribute in green building solutions, which are safe for environment. Construction chemical industry is a emerging enterprises in India. By maintaining the global standard and keep latest innovations in technology to challenge traditional methods in construction',
    images: [
      {
        id: 'image_4_1',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_4_2',
        img_url: '../../../../assets/sample/mediaGallery1.jpg',
        img_discription: 'Tylax Image Gallery'
      },
      {
        id: 'image_4_3',
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
export class MediaGalleryAndDownloadComponent implements OnInit, AfterViewInit {
  selectedItem: any;
  galleryList: any = Gallery;

  constructor() {
    this.galleryList = Gallery;
    this.getSelecteditem('item_1');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clickSelectActiveItem('item_id_', 'item_1');
  }

  getSelecteditem(item: string): void {
    this.selectedItem = Gallery.find((Item: any) => Item.id === item);
    let imageId: string = this.selectedItem?.images[0]?.id;
    imageId = 'image_id_' + imageId;
    setTimeout(() => {
      this.hoverSelectActiveImg(imageId);
    }, 200);
  }

  hoverSelectActiveImg(selectedImageId: string): void{
    document.querySelector('.cards .cards-item img.active')?.classList.remove('active');
    document.getElementById(selectedImageId)?.classList.add('active');
  }

  clickSelectActiveItem(selectedItem: string, selectedItemId: string): void {
    const itemSelected: string = selectedItem + selectedItemId;
    document.querySelector('.data-target .item-list .item.active')?.classList.remove('active');
    document.getElementById(itemSelected)?.classList.add('active');
    this.getSelecteditem(selectedItemId);
  }
}
