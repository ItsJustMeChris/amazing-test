import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  user: FormGroup = this.fb.group({
    username: '',
    password: ''
  });

  get formValue() {
    return this.user.value as Auth;
  }

  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.authService.login(this.formValue)) {
      this.message = 'Invalid Username or Password';
    } else {
      this.message = null;
      this.router.navigate(['/home']);
    }
  }

}
