import { Oferta } from "./shared/oferta.model"
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { firstValueFrom, lastValueFrom } from "rxjs"
import { URL_API } from "./app.api";


@Injectable()
export class OfertasService {



constructor(private httpClient:HttpClient){}

   
public getOfertas(): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${URL_API}/ofertas?destaque=true`));
  }
  


  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return lastValueFrom(this.httpClient.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`));
  }
  

  public async getOfertasPorId(id :number):Promise<any>{
    
    const response = await lastValueFrom(this.httpClient.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`));

    if (Array.isArray(response) && response.length > 0) {
      return response[0];
    } else {
      return null;
    }
  }

  public async getComoUsarPorId(id :number) :Promise<any>{

    const response = await lastValueFrom(this.httpClient.get<any[]>(`${URL_API}/como-usar?id=${id}`));
    
    if (Array.isArray(response) && response.length > 0) {      
     return response[0].descricao;
    } else {
      return null;
    }
  }
  public async getOndeFicaPorId(id :number) :Promise<any>{

    const response = await lastValueFrom(this.httpClient.get<any[]>(`${URL_API}/onde-fica?id=${id}`));
    
    if (Array.isArray(response) && response.length > 0) {  
      
      console.log(response[0].descricao)
     return response[0].descricao;
    } else {
      return null;
    }
  }
}