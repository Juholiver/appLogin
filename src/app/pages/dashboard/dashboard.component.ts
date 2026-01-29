import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router
import { AuthService } from '../../auth/service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private auth: AuthService) {}

  logout() {
      this.auth.logout();
    }
}
