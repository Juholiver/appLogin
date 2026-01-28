import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToLogin() {
      this.router.navigate(['/login']);
    }
}
