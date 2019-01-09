import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[] = [];

  constructor(private router:Router) { }

  getArtist(item:any[]){
    console.log(item);
    if(item['type'] == "artist"){
    this.router.navigate(['/artist', item['id']])
    }
  }

  ngOnInit() {
  }

}
