import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
  }

  isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
  }

}
