import { Oferta } from "./shared/oferta.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { firstValueFrom, lastValueFrom } from "rxjs"


@Injectable()
export class OfertasService {

constructor(private httpClient:HttpClient){}

   
public getOfertas(): Promise<any> {
    return lastValueFrom(this.httpClient.get('http://localhost:3000/ofertas?destaque=true'));
  }
  

    // public getOfertas2(): Promise<Oferta[]> {
    //     return new Promise((resolve, reject) => {
    //         console.log('passei por aqui')

    //         let deu_certo = true;

    //         if (deu_certo) {

    //             //retorna a função resolve(this.ofertas) após 3 segundos
    //            setTimeout(()=>resolve(this.ofertas),3000)
               
    //         } else {
    //             reject({ codigo_ero: 404, mensagem_erro: 'Servidor não encontrado_cath' })

    //         }


    //     })



    // }
}