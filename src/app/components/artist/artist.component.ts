import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any = {};
  top_tracks:any[] = [];
  loading:boolean;

  constructor(private activateRouter:ActivatedRoute,
              private spotify:SpotifyService) {
    this.activateRouter.params.subscribe( (param:any) => {
      this.getArtist(param['id']);
      this.getTopTracks(param['id']);
    })
   }

  getArtist(id_artista:string){
    this.loading = true;

    this.spotify.getArtist(id_artista).subscribe( (response:any) => {
      this.artist = response;
      this.loading = false; 
    })
  }

  getTopTracks(id_artista:string){
    this.loading = true

    this.spotify.getTopTracks(id_artista).subscribe((response:any) => {
      console.log(response);
      this.top_tracks = response;
    })
  }

  ngOnInit() {
  }

}
