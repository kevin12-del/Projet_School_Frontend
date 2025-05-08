import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auths/login/login.component";
import {RegisterComponent} from "./features/auths/register/register.component";
import {VerifEmailComponent} from "./features/auths/verif-email/verif-email.component";
import {EleveDashComponent} from "./features/eleves/eleve/eleve-dash.component";
import {EleveProfilComponent} from "./features/eleves/profile/eleve-profil.component";
import {ForgetPasswordComponent} from "./features/auths/forget-password/forget-password.component";
import {EleveNoteComponent} from "./features/eleves/grade/eleve-note.component";
import {HomeworkComponent} from "./features/eleves/homework/homework.component";
import {ScheduleComponent} from "./features/eleves/schedule/schedule.component";
import {CourseComponent} from "./features/eleves/course/course.component";
import {ClassComponent} from "./features/eleves/class-presence/class.component";
import {ParentComponent} from "./features/parent/parent/parent.component";
import {AdminComponent} from "./features/admin/admin/admin.component";
import {TeacherComponent} from "./features/teacher/teacher/teacher.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "verif-email", component: VerifEmailComponent},
  {path: "eleve", component: EleveDashComponent, children: [
      {path:  "profil", component: EleveProfilComponent},
      {path: "grades", component: EleveNoteComponent},
      {path: "homework", component: HomeworkComponent},
      {path: "schedule", component: ScheduleComponent},
      {path: "courses", component: CourseComponent},
      {path: "class-presence", component: ClassComponent},
      {path: "", redirectTo: "profil", pathMatch: "full"}
    ]},
  {path: "parent", component: ParentComponent, children: []},
  {path: "admin", component: AdminComponent, children: []},
  {path: "teacher", component: TeacherComponent, children: []},

  {path: "forget-password", component: ForgetPasswordComponent},

];
