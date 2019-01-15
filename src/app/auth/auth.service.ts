import * as firebase from 'firebase'
import { Response } from '../../../node_modules/@angular/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Injectable()
export class AuthService {
    token:string
    constructor(private router:Router) {

    }
    signupuser(email:string,password:string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      if(confirm("Sign Up Successfully Login to continue")) {
        this.router.navigate(['/signin'])
      }
    })
    }

    signinuser(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email ,password)
        .then(
          response => {
              this.router.navigate(['/'])
              firebase.auth().currentUser.getIdToken()
              .then(
                  (token:string) => this.token = token
              )
          }
          )
        .catch(
            error => console.log(error)

        );
    }
     logout() {
         firebase.auth().signOut();
         this.token = null;
     }
    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string) => this.token = token
        );
        return this.token;
    }
    isAuthenticated() {
        return this.token!=null;
    }
}
