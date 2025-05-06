
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-eleve-dash',
  standalone: true,
  imports: [],
  templateUrl: './eleve-dash.component.html',
  styleUrl: './eleve-dash.component.css'
})
export class EleveDashComponent {


  constructor(private router: Router, private authService: AuthService) {}


  logout() {
    this.authService.logout();
  }
}
