import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title') as any;
    console.log(title)
    let decodedTitle = decodeURIComponent(title);
    console.log("title",decodedTitle)
    this.data = albums['Born To Die'];
    // this.data = albums[decodedTitle]
    console.log(this.data);

    // const title = JSON.parse(localStorage.getItem("title") as any);
    // console.log(title)
    // const decodedTitle = decodeURIComponent(title);
    // console.log("title",decodedTitle)
  }

  dasherize(string:any){
    return string.replace(/[A-Z]/g, function(char:any, index:any){
      return (index !== 0 ? '-' :'') + char.toLowerCase();
    })
  }
}
