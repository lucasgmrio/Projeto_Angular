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
  


  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return lastValueFrom(this.httpClient.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`));
  }
  

//   public getOfertasPorCategoria(categoria:string):Promise<any>{
//     return lastValueFrom(this.httpClient.get(`http://localhost:3000/ofertas?categoria=${categoria}`));   

//   }

}