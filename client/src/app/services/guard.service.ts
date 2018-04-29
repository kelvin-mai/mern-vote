import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return state.url.startsWith('/profile')
        ? true
        : this.router.navigate(['/']);
    } else {
      return state.url.startsWith('/profile')
        ? this.router.navigate(['/'])
        : true;
    }
  }
}
