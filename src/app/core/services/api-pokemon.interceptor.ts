import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';



@Injectable()
export class ApiPokemonInterceptor implements HttpInterceptor {
  private apiKey: string = 'a19b9d3a-7cfe-41a5-9b09-35f9a746b1f0';

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Ajouter l'en-tête X-Api-Key à toutes les requêtes sortantes
    const apiReq = req.clone({ setHeaders: { 'X-Api-Key': this.apiKey ? this.apiKey : '' } });
    return next.handle(apiReq);
  }
}
