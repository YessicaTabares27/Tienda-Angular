import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SingUpService } from '../services/sing-up.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private singUpService: SingUpService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.singUpService.loggedInAdmin()) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }
  
}
