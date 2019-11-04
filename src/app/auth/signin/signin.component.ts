import { Component, OnInit } from '@angular/core';
import { AuthService } from '../state/auth.service';
import { Observable } from 'rxjs';
import { Profile } from '../state/auth.store';
import { AuthQuery } from '../state/auth.query';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  profile$: Observable<Profile>;
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private service: AuthService, private query: AuthQuery) { }

  ngOnInit() {
    this.service.sync().subscribe();
    this.profile$ = this.query.select('profile');
  }

  signin() {
    this.service.signin('google');
  }

  signout() {
    this.service.signOut();
  }

  signup() {
    const { email, password } = this.form.value;
    this.service.signup(email, password);
  }

}
