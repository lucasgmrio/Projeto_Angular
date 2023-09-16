import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, interval } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent {

  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService : OfertasService ) {

  }


ngOnInit(){

  this.ofertasService.getOfertasPorId( this.route.snapshot.params['id'])
  .then((oferta:Oferta)=> {
  this.oferta = oferta 
  })


  // this.route.params.subscribe({
  //   next: (v) => console.log(v),
  //   error: (e) => console.log(e),
  //   complete: () => console.log('Processamento foi calssificado como concluído')
  // })



  // let tempo = interval(2000)

  // tempo.subscribe(valor => {
  //   console.log(`Valor emitido: ${valor}`);
  // });


  //observable(osbservavel)
  const meuObservableTeste = new Observable<number>(observer => {
    // Coloque o código que emite valores no observer aqui
    observer.next(1); // Exemplo: Emitir o valor 1
    observer.next(2); // Exemplo: Emitir o valor 2
    observer.complete(); // Indicar que a emissão de valores foi concluída
  });


  //Observable(observador)


}


}
