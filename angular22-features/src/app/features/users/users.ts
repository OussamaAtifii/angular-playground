import { Component, computed, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-users',
  imports: [FormField],
  templateUrl: './users.html',
})
export class Users {
  loginModel = signal<LoginData>({ email: '', password: '' });

  loginForm = form(this.loginModel, (form) => {
    required(form.email, { message: 'Email is required' });
    email(form.email, { message: 'Email not valid' });
    required(form.password, { message: 'Password is required' });
    minLength(form.password,6, {message: 'Password must be at least 6 characters'});
  });

  userEmail = computed(() => this.loginModel().email);

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.loginModel());
  }
}
