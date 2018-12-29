import { AuthService } from './../auth/auth.service';

import { DataStorageService } from './../shared/data.storage.service';
import { Component } from '@angular/core';
import { Response } from '../../../node_modules/@angular/http';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
   constructor(private dataStorageService:DataStorageService,
               private authService:AuthService) {}
    OnSaveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
        (response: Response) => {
         console.log(response);
        });
    }
    onLogOut(){
        this.authService.logout()
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }
}