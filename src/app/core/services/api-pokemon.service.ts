import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://api.pokemontcg.io/v1/cards';

  constructor(private http: HttpClient) { 
    console.log('HttpClient', http);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<{ cards: Pokemon[] }>(this.apiUrl).pipe(
      map(response => response.cards)
    );
  }
  
  getKnownTypes(): Observable<string[]> {
    return this.http.get<{ cards: Pokemon[] }>(this.apiUrl).pipe(
      map(response => response.cards.map(pokemon => pokemon.types).reduce((a, b) => a.concat(b), []).filter((value, index, self) => self.indexOf(value) === index))
    );
  }
  
}