import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES) // MAPEAMENTO DE ROTAS GLOBAIS 
    // RouterModule.forChild(ROUTES) // MAPEAMENTO DE ROTAS INTERNAS EM COMPONNTE 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
