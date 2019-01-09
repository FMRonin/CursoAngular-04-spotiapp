import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) {
   }

  Search(termino:string){
    this.loading = true;
    this.spotify.getArtists(termino).subscribe((response:any) => {
      console.log(response);
      this.artists = response
    })
     this.loading = false; 
  }

  ngOnInit() {
  }

}
