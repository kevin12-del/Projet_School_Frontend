import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-teacher',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

}
