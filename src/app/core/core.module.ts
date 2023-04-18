import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { RouterModule } from '@angular/router';
import { ApiPokemonInterceptor } from './services/api-pokemon.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/api-pokemon.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiPokemonInterceptor, multi: true },
    PokemonService,
  ]

})
export class CoreModule { }
