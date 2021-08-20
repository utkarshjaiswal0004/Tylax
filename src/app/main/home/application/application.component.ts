import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, AfterViewInit {
  // @ViewChild('child1') firstChild!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    // console.log(this.firstChild.nativeElement);
  }
  openCloseApplication(event: any): void {
    document.querySelectorAll('.application').forEach(res => {
      const ref = res?.getElementsByTagName('img');
      ref[0].attributes[1].value = '../../../../assets/icons/plus.svg';
      res?.classList.remove('active');
    });
    event.path[2]?.classList.add('active');
    const refActive: any = document.querySelector('.application.active')?.getElementsByTagName('img');
    refActive[0].attributes[1].value = '../../../../assets/icons/minus.svg';
  }
}
