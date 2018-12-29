import { AuthService } from './auth.service';
import { Injectable } from '../../../node_modules/@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService : AuthService) {}
   
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}