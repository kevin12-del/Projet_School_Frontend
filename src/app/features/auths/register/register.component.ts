import { Component } from '@angular/core';
import {User} from "../../../models/user.model";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public user = new User();
  confirmPassword?:string;
  myForm!: FormGroup;
  err: any;
  loading= false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      role : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required]]
    } );
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    // Valider le formulaire
    if (!this.user.prenom || !this.user.nom || !this.user.email || !this.user.password || !this.confirmPassword) {
      this.toastr.error('Please fill in all fields', 'Error');
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      this.toastr.error('Passwords don\'t match', 'Error');
      return;
    }

    if (this.user.password.length < 8) {
      this.toastr.info('Password must contain at least 8 characters', 'error');
      return;
    }

    // Ici vous pourriez faire une requête d'enregistrement à votre backend
    console.log('Registration submission', {
      firstName: this.user.prenom,
      lastName: this.user.nom,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role
    });

    this.loading= true;
    this.user.username = this.user.email;
    this.authService.registerUser(this.user).subscribe({
      next:(res)=>{
        this. authService.setRegistredUser(this.user);
        //alert("veillez confirmer votre email");
        this.loading= false;
        this.toastr.success('please confirm your email', 'confirm');
        this.router.navigate(["/verif-email"]);

// this.router.navigate(["/verifEmail",this.user.email]);
      },
      error:(err:any)=>{
        this.loading= false;
        if(err.status=400){
          this.err= err.error.message;
        }
      }
    } )

  }



}
