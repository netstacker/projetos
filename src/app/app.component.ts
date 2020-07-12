import { Component, VERSION } from '@angular/core';
import { OfertaService } from './oferta.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  name = 'Angular ' + VERSION.major;
  constructor(private ofertaservice:OfertaService){

  }
  ngOnInit(){
    console.log(this.ofertaservice.getOfertas());
  }
}
