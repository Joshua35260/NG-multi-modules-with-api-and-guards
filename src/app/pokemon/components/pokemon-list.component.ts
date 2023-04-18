import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/api-pokemon.service';
import { Pokemon } from '../../core/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  knownTypes: string[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data;
    });
    
  }
  
 
}
