import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SingUpService } from '../services/sing-up.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private singUpService: SingUpService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.singUpService.loggedInUser()) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}
