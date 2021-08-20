import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/service/window/window.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  addedClass = true;

  constructor(private win: WindowService) {
    this.win.windowRef.addEventListener('scroll', this.scroll, true);
  }

  ngOnInit(): void {
  }
  scroll(event: any): any {
    if (event.path[1].scrollY < 150) {
      document.querySelector('nav')?.classList.remove('bgColor');
      document.querySelector('nav')?.classList.remove('shadow');
    }
    if (event.path[1].scrollY > 150) {
      document.querySelector('nav')?.classList.add('bgColor');
      document.querySelector('nav')?.classList.add('shadow');

    }
  }


  addRemoveCustomClass(): void {
this.addedClass ? (document.querySelector('nav')?.classList.add('addBgColor')):document.querySelector('nav')?.classList.remove('addBgColor');
this.addedClass = !this.addedClass;
  }
}
