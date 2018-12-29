import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSingin(form:NgForm) {
  const email = form.value.email;
  const password = form.value.password;
  this.authService.signinuser(email, password);
  }

}
