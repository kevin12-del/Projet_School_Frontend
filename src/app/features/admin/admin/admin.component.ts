import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  role: string = '';
  ngOnInit(): void {
    // Initialization logic can be added here if needed.
    this.role = this.authService.getUser().role;
  }


  constructor(private router: Router, private authService: AuthService) {}





  isSidebarCollapsed = false;


  // Liste des items du sidebar
  sidebarItems = [
    { id: 'profile', name: 'Profil', icon: 'bi-person', path: '/admin/profil' },
    { id: 'user', name: 'User', icon: 'bi-people', path: '/admin/users' },
    { id: 'class', name: 'ClassRoom', icon: 'bi-folder', path: '/admin/class' },
    { id: 'schedule', name: 'schedule', icon: 'bi-calendar3', path: '/admin/schedule' },
    { id: 'courses', name: 'Courses', icon: 'bi-book', path: '/admin/courses' },
    /*{ id: 'presence', name: 'presence', icon: 'bi-clipboard', path: '/admin/profil' },
    { id: 'homework', name: 'Homework', icon: 'bi-pencil-square', path: '/admin/profil' },
    { id: 'grades', name: 'grades', icon: 'bi-clipboard-data', path: '/admin/profil' }*/
  ];



  // Fonction pour basculer entre la sidebar étendue et réduite
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log(this.authService.getRole());
  }

  // Fonction pour ouvrir/fermer le menu déroulant de l'utilisateur

}

