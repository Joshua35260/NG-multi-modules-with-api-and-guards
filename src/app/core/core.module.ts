import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ApiPokemonInterceptor } from './services/api-pokemon.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/api-pokemon.service';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreRoutingModule } from './core-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
  declarations: [
    NavbarComponent,
    AdminPageComponent,
    DashboardComponent,
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
