import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class Dashboard implements OnInit {
  @ViewChild('dashboardContentHolder') div;

  public showContentText: boolean;
  public showAboutText: boolean;
  public scrollCount: boolean;

  constructor(private renderer: Renderer) {
    this.showContentText = false
    this.div = {}
  }

  ngOnInit() {
    setTimeout(() => {
      this.showContentText = true;
    }, 500)
    console.log(this.div.nativeElement)
    this.scrollCount = this.div.nativeElement.offsetHeight
    console.log(this.scrollCount)
  }

  ngAfterViewInit() {
    this.renderer.listenGlobal('window', 'scroll', (evt) => {
      console.log(this.div.nativeElement.offsetTop)
    });
  }

}
