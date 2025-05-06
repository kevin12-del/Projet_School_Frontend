import {Component, OnInit} from '@angular/core';
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
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    // This method is required by the OnInit interface but can remain empty if no initialization logic is needed.
    this.isDropdownOpen = false;
    this.userData.userName = this.authService.getUser().username;
    this.userData.userRole = this.authService.getUser().role;
  }

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
