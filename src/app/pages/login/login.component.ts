import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], // Certifique-se de que não há conflitos aqui
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // 2. Injete o Router no construtor
  constructor(private router: Router) {}

  // 3. Crie o método de navegação
  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
