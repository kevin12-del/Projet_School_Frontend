import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-eleve-note',
  standalone: true,
  imports: [],
  templateUrl: './eleve-note.component.html',
  styleUrl: './eleve-note.component.css'
})
export class EleveNoteComponent {

  constructor(private router: Router) {}


}
