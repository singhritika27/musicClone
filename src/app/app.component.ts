import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  theme: any;

  constructor() {
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    localStorage.setItem('themeDetection',this.theme)
  }
}
