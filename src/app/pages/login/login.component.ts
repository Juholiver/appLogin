import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router
import { AuthService } from '../../auth/service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Certifique-se de que não há conflitos aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  erro: string = '';

  // 2. Injete o Router no construtor
  constructor(private router: Router, private authService: AuthService) {}

login() {
  this.erro = '';

  if (this.authService.login(this.email, this.password)) {
    this.router.navigate(['/dashboard']);
  } else {
    this.erro = 'Email ou senha incorretos.';
  }
}
  // 3. Crie o método de navegação
  goToRegister() {
    this.router.navigate(['/register']);
  }


}
