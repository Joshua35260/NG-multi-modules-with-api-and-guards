import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UrlTree, Router } from '@angular/router';
import { map } from 'rxjs/operators'; // pour transformer un observable en une valeur, ici of(true) en un UrlTree
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private role: string = 'ANONYMOUS'; // initialisation du rôle à ANONYMOUS
  // private role: string = 'ADMIN'; 
  private role: string = 'USER';

  constructor(private router: Router) {}

  login(): Observable<boolean | UrlTree> {
    return of(false).pipe(
      delay(3000),
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          return this.router.parseUrl('/');
        }
      })
    );
  } // methode login qui simule une connexion //
  
  setRole(role: string): void {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }
} // méthode direct par rôle //
