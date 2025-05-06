import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auths/login/login.component";
import {RegisterComponent} from "./features/auths/register/register.component";
import {VerifEmailComponent} from "./features/auths/verif-email/verif-email.component";
import {EleveDashComponent} from "./features/eleves/eleve-dash/eleve-dash.component";
import {EleveProfilComponent} from "./features/eleves/eleve-profil/eleve-profil.component";
import {ForgetPasswordComponent} from "./features/auths/forget-password/forget-password.component";
import {EleveNoteComponent} from "./features/eleves/eleve-note/eleve-note.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "verif-email", component: VerifEmailComponent},
  {path: "eleve", component: EleveDashComponent},
  {path:  "eleve-profil", component: EleveProfilComponent},
  {path: "forget-password", component: ForgetPasswordComponent},
  {path: "eleve-note", component: EleveNoteComponent}
];
