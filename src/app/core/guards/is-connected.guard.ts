import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class isConnectedGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // méthode par booléen //
    // const isConnected = false; // logiqe de vérification de l'admin ici //
    //   if (isConnected) { 
    //     return true;
    //   } else {
    //     // Rediriger l'utilisateur vers l'URL de base
    //     this.router.navigateByUrl('/');
    //     return false;
    //   }
    
    //  méthode par userService.getrôle 
    const role = this.userService.getRole()
    if (role === 'ADMIN' || role === 'USER') {
      return true;
    } else {
      // Rediriger l'utilisateur vers la page d'accueil
      return this.router.parseUrl('/');
    }

    // méthode par userService.login//
    // return this.userService.login()
  }
}