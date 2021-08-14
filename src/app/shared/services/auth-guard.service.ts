import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  authenticated: boolean;

  constructor(
    private common: CommonService,
    private router: Router
  ) { }

  canActivate() {

    const authenticated = this.common.getSession('user');

    if (authenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

