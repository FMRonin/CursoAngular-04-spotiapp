import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map( response => response['albums'].items));
  } 

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino} &type=artist&limit=15`)
    .pipe(map( response => response['artists'].items));
  }

  getArtist(idArtist:string){
    return this.getQuery(`artists/${idArtist}`)
    //.pipe(map( response => response['artists'])); 
  }

  getTopTracks(idArtist:string){
    return this.getQuery(`artists/${idArtist}/top-tracks?country=SE`)
    .pipe(map( response => response['tracks'])); 
  }

}
