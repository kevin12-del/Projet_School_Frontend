import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  email: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  currentStep: number = 1;
  suivis: boolean = true;
  user = new User();
  err = '';

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) {}

  onSubmit() {
    if (this.currentStep === 1) {
      if (!this.email) {
        this.toastr.error('Please enter your email address.','danger');
        return;

      }
      this.authService.forgotPassword(this.email).subscribe(
        (res) => {
          this.user = res;
        },
        (err) => {
          this.err = err.error.message;
          this.suivis = false;
        }
      )
      this.toastr.success('A code has been sent to your email.','success');
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      if (!this.code) {
        this.toastr.error('Please enter the verification code.','danger');
        return;
      }
      this.toastr.info('Please enter a new password.','info');
      this.currentStep = 3;
    } else if (this.currentStep === 3) {
      if (this.newPassword !== this.confirmPassword) {
        this.toastr.error('Passwords do not match.','danger');
        return;
      }
      if (!this.newPassword) {
        this.toastr.error('Please enter a new password.','danger');
        return;
      }
      this.user.password = this.newPassword;
      this.authService.resetPassword(this.code, this.user).subscribe(
        (res) => {
          this.toastr.success('Password has been reset successfully. Please login with your new password.','success');
          this.router.navigate(['/login']);
        },
        (err) => {
          this.err = err.error.message;
          this.suivis = false;
        }
      )
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
