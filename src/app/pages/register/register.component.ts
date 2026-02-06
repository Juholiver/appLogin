import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 1. Importe o Router
import { AuthService } from '../../auth/service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  erro: string = '';
   // 2. Injete o Router no construtor
    constructor(private router: Router, private authService: AuthService) {}

  register() {

    if (this.password !== this.confirmPassword) {
      this.erro = 'As senhas não coincidem.';
      return;
    }

    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(user).subscribe({
      next: (res) => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        this.erro = 'Erro ao registrar usuário.';
      }
    });

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}