import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators'; // pour transformer un observable en une valeur, ici of(true) en un UrlTree
@Injectable({
  providedIn: 'root'
})
export class isAdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // méthode par booléen //
    // const isAdmin = false; // logiqe de vérification de l'admin ici //
    //   if (isAdmin) { 
    //     return true;
    //   } else {
    //     // Rediriger l'utilisateur vers l'URL de base
    //     this.router.navigateByUrl('/');
    //     return false;
    //   }
    
     // par userService.getrôle //
    // const role = this.userService.getRole()
    // if (role === 'ADMIN') {
    //   return true;
    // } else {
    //   // Rediriger l'utilisateur vers la page d'accueil
    //   return this.router.parseUrl('/');
    // }

    // méthode par userService.login//
    return this.userService.login() // définie à false et donc avec un retour sur '/' //
  }
}
  



