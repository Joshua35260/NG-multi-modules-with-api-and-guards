import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    PokemonRoutingModule,
    CoreModule,

  ],
  declarations: [
    PokemonListComponent,

  ],
})
export class PokemonModule { }
