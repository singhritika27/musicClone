import { Component } from '@angular/core';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data=[
    {title:'Recently played', albums:recentlyPlayed},
    {title:'Heavy rotation', albums:heavyRotation},
    {title:'Jump back in', albums:jumpBackIn}
  ]
  opts={
    slidesPerView:2.4,
    slidesOffsetBefore:20,
    spaceBetween:20,
    freeMode:true
  }
  constructor(private router:Router) {}
  
  openAlbum(data:any){
    const titleEscaped = encodeURIComponent(data.title);
    console.log(titleEscaped)
    localStorage.setItem("title",titleEscaped)
    // this.router.navigateByUrl('albums');
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`)
  }

  dasherize(string:any){
    return string.replace(/[A-Z]/g, function(char:any, index:any){
      return (index !== 0 ? '-' :'') + char.toLowerCase();
    })
  }

  setting(){
    this.router.navigateByUrl(`setting`)
  }

}
