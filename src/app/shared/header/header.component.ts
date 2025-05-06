import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
      CommonModule,
      FormsModule
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Données simulées de l'utilisateur
  userData = {
    userName: 'Jean Dupont',
    userRole: 'Student'
  };

  isDropdownOpen = false;

  constructor(
    private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
