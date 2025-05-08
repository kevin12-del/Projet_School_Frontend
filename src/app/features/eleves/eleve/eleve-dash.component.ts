
import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../services/auth.service";
import {HeaderComponent} from "../../../shared/header/header.component";


@Component({
  selector: 'app-eleve-dash',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent],
  templateUrl: './eleve-dash.component.html',
  styleUrl: './eleve-dash.component.css'
})
export class EleveDashComponent {


  constructor(private router: Router, private authService: AuthService) {}





  isSidebarCollapsed = false;


  // Liste des items du sidebar
  sidebarItems = [
    { id: 'profile', name: 'Profil', icon: 'bi-person', path: '/eleve/profil' },
    { id: 'schedule', name: 'schedule', icon: 'bi-calendar3', path: '/eleve/schedule' },
    { id: 'courses', name: 'Courses', icon: 'bi-book', path: '/eleve/courses' },
    { id: 'presence', name: 'presence', icon: 'bi-clipboard', path: '/eleve/class-presence' },
    { id: 'homework', name: 'Homework', icon: 'bi-pencil-square', path: '/eleve/homework' },
    { id: 'grades', name: 'grades', icon: 'bi-clipboard-data', path: '/eleve/grades' }
  ];



  // Fonction pour basculer entre la sidebar étendue et réduite
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log(this.authService.getRole());
  }

  // Fonction pour ouvrir/fermer le menu déroulant de l'utilisateur

}
