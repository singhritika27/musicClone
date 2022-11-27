import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  selectedTheme: any;
  theme:any;
  findTheme:any;
  constructor(private rendered:Renderer2) { }

  ngOnInit() {
    this.theme = localStorage.getItem("themeDetection");
    if(this.theme == 'true'){
      console.log("Dark")
      this.findTheme = 'darkTheme';
    }else{
      console.log("Light")
      this.findTheme = 'lightTheme';
    }
  }
  findColor(event:any){
    // console.log("event",event.detail.value)
    if(event.detail.value == 'darkTheme'){
      this.rendered.setAttribute(document.body,'color-scheme','dark')
    }else{
      this.rendered.setAttribute(document.body,'color-scheme','light')
    }
  }
}
