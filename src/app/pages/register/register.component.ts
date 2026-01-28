import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
   // 2. Injete o Router no construtor
    constructor(private router: Router) {}
  
    // 3. Crie o método de navegação
    goToLogin() {
      this.router.navigate(['/login']);
    }
}
