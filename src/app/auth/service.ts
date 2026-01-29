import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedInKey = 'loggedIn';
  private registeredUserKey = 'registeredUser';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem(this.registeredUserKey);
    if (!storedUser) return false;

    try {
      const user = JSON.parse(storedUser);
      if (email === user.email && password === user.password) {
        localStorage.setItem(this.loggedInKey, 'true');
        return true;
      }
    } catch {
      localStorage.removeItem(this.registeredUserKey);
    }

    return false;
  }

  register(name: string, email: string, password: string): boolean {
    if (!name || !email || !password) return false;

    const newUser = { name, email, password };
    localStorage.setItem(this.registeredUserKey, JSON.stringify(newUser));
    return true;
  }

  logout() {
    localStorage.removeItem(this.loggedInKey);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }
}
