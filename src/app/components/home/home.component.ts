import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases:any[] = [];
  loading:boolean;

  constructor(private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases().subscribe( (response:any) => {
      this.newReleases = response;
      this.loading = false;
      console.log(this.newReleases);
    }, (error:any) => {
      console.log(error.error.error)
    });
   }

  ngOnInit() {
  }

}
