import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-gallery-and-download',
  templateUrl: './media-gallery-and-download.component.html',
  styleUrls: ['./media-gallery-and-download.component.scss']
})
export class MediaGalleryAndDownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hoverImg(event: any): any{
    document.querySelector('.cards .cards-item img.active')?.classList.remove('active');
    event.path[0]?.classList.add('active');
  }

}
