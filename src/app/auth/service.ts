import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://apploginnodejs.onrender.com';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }
  login(data:any){
    return this.http.post(`${this.apiUrl}/login`, data);
}

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

}
