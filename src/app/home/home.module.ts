import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../core/components/navbar.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule


  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
