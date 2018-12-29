import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   ngOnInit() {
   firebase.initializeApp({
    apiKey: "AIzaSyC_UydNCM5UDS-ATUOm9xMB8WsLct3Y0t8",
    authDomain: "my-recipe-book-33742.firebaseapp.com"
   });
   }
   loadedFeature = 'recipe';
  onNavigate(feature:string){
   this.loadedFeature = feature;
  }
}
