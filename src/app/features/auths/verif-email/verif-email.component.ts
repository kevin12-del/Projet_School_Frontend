import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-verif-email',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './verif-email.component.html',
  styleUrl: './verif-email.component.css'
})
export class VerifEmailComponent implements OnInit{

  user: User = new User();
  err = '';
  token: string = '';
  newUser = new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    this.user = this.authService.regitredUser;
  }

  onSubmit() {
    // Here you would typically validate the token with your backend
    console.log('Validating token:', this.token);

    this.authService.validateEmail(this.token).subscribe({
      next: (res) => {
        //alert('Login successful');
        this.newUser.username = this.user.email;
        this.newUser.password = this.user.password;
        this.newUser.email = this.user.email;
        this.toastr.success('Account validate', 'Success');
        this.authService.login(this.newUser).subscribe({
          next: (data) => {
            let jwToken = data.headers.get('Authorization')!;
            this.authService.saveToken(jwToken);
            this.toastr.success('Login successful', 'Success');
            this.router.navigate(['/eleve']);
          },
          error: (err: any) => {
            console.log(err);
            this.err = err.error.message;
            this.toastr.error(this.err, 'Error');
          },
        });
      },
      error: (err: any) => {
        if (err.error.errorCode=="INVALID_TOKEN")
          this.err="Code invalide!";
        if (err.error.errorCode=="EXPIRED_TOKEN")
          this.err="Code a expiré!";
        this.authService.deleteAccount(this.user).subscribe(
          (res)=>{
            this.toastr.error('Code invalide!', 'Error');
          },
          (err)=>{
            console.log(err);
          }
        )

      },
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
