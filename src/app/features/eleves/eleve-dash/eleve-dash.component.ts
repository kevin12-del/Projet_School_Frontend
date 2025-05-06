
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-eleve-dash',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './eleve-dash.component.html',
  styleUrl: './eleve-dash.component.css'
})
export class EleveDashComponent {


  constructor(private router: Router, private authService: AuthService) {}


  logout() {
    this.authService.logout();
  }

  // Données simulées de l'utilisateur
  userData = {
    userName: 'Jean Dupont',
    userRole: 'Student'
  };
  isSidebarCollapsed = false;


  // Liste des items du sidebar
  sidebarItems = [
    { id: 'dashbord', name: 'Dashbord', icon: 'bi-speedometer2', path: '/eleve/dashbord' },
    { id: 'profile', name: 'Profil', icon: 'bi-person', path: '/eleve/profil' },
    { id: 'class', name: 'class', icon: 'bi-people', path: '/eleve/class' },
    { id: 'schedule', name: 'schedule', icon: 'bi-calendar3', path: '/eleve/schedule' },
    { id: 'courses', name: 'Courses', icon: 'bi-book', path: '/eleve/courses' },
    { id: 'grades', name: 'grades', icon: 'bi-star', path: '/eleve/grades' }
  ];

  isDropdownOpen = false;

  // Fonction pour basculer entre la sidebar étendue et réduite
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // Fonction pour ouvrir/fermer le menu déroulant de l'utilisateur
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
