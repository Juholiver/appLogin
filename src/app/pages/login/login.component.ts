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

    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({
      next: (res:any) => {

        console.log('Login OK', res);

        // salva sessão simples (depois vamos usar JWT)
        localStorage.setItem('loggedIn', 'true');

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Email ou senha incorretos.';
      }
    });

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
