import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {

  user = new User();
  err= 0;
  message : string = "wrong login or password...";


  constructor( private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    // Ici vous pourriez faire une requête d'authentification à votre backend
    console.log('Login submission', { email: this.user.email, password: this.user.password });

    // Pour l'instant, on simule une connexion réussie
    if (this.user.email && this.user.password) {
      this.user.username = this.user.email;
      this.authService.login(this.user).subscribe({
        next: (data) => {
          let jwToken = data.headers.get('Authorization')!;
          this.authService.saveToken(jwToken);
          this.router.navigate(['/eleve']);
        },
        error: (err: any) => {
          this.err = 1;
          if (err.error.errorCause=='disabled')
            this.message="User disabled, please contact your Administrator";
        }
      });
    } else {
      this.toastr.error('Please fill in all fields', 'Error');
    }
  }

  navigateToForgetPassword() {
    this.router.navigate(['/forget-password']);
  }

}
