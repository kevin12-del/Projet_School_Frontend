import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auths/login/login.component";
import {RegisterComponent} from "./features/auths/register/register.component";
import {VerifEmailComponent} from "./features/auths/verif-email/verif-email.component";
import {EleveDashComponent} from "./features/eleves/eleve-dash/eleve-dash.component";
import {EleveProfilComponent} from "./features/eleves/eleve-profil/eleve-profil.component";
import {ForgetPasswordComponent} from "./features/auths/forget-password/forget-password.component";
import {EleveNoteComponent} from "./features/eleves/eleve-note/eleve-note.component";
import {DashbordComponent} from "./features/eleves/dashbord/dashbord.component";
import {ScheduleComponent} from "./features/eleves/schedule/schedule.component";
import {CourseComponent} from "./features/eleves/course/course.component";
import {ClassComponent} from "./features/eleves/class/class.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "verif-email", component: VerifEmailComponent},
  {path: "eleve", component: EleveDashComponent, children: [
      {path:  "profil", component: EleveProfilComponent},
      {path: "grades", component: EleveNoteComponent},
      {path: "dashbord", component: DashbordComponent},
      {path: "schedule", component: ScheduleComponent},
      {path: "courses", component: CourseComponent},
      {path: "class", component: ClassComponent},
      {path: "", redirectTo: "dashbord", pathMatch: "full"}
    ]},

  {path: "forget-password", component: ForgetPasswordComponent},

];
