import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eleve-profil',
  standalone: true,
  imports: [],
  templateUrl: './eleve-profil.component.html',
  styleUrl: './eleve-profil.component.css'
})
export class EleveProfilComponent {


  constructor(private router: Router) {}


}
