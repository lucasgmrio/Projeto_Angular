import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertaService: OfertasService) {
  }

  ngOnInit() {

    //  this.ofertas = this.ofertaService.getOfertas()
    this.ofertaService.getOfertas2()
      .then((ofertas: Oferta[]) => { 

        console.log('A função resolve foi resolvida em 3 segundos')
        this.ofertas = ofertas
       })

      .catch((params: any) => {
        console.log(params)
      })
  }
}
