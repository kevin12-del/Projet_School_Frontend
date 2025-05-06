import { Injectable } from '@angular/core';
import {User} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment.development";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  token!:string;
  private helper = new JwtHelperService();
  public regitredUser : User = new User();
  private roles: string[] | undefined;

  constructor(private router: Router,
              private http : HttpClient) { }

  login(user : User)
  {
    return this.http.post<User>(environment.apiUserURL+'/login', user , {observe:'response'});
  }

  registerUser(user :User){
    return this.http.post<User>(environment.apiUserURL+'/register', user, {observe:'response'});
  }

  validateEmail(code : string){
    return this.http.get<User>(environment.apiUserURL+'/verifyEmail/'+code);
  }

  forgotPassword(email : string){
    return this.http.get<User>(environment.apiUserURL+'/forgetPassword/'+email);
  }

  resetPassword(code : string, user : User){
    return this.http.post<User>(environment.apiUserURL+'/resetPassword/'+code,user, {observe:'response'});
  }

  deleteAccount(user : User){
    return this.http.delete(environment.apiUserURL+'/delete'+'/'+user.email);
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }

  decodeJWT()
  { if (this.token == undefined)
    return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
  }
  getToken():string {
    return this.token;
  }

  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined!;
    this.token = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('jwt')
    this.router.navigate(['/login']);
  }

  /*isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') >=0);
  }*/

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    //this.getUserRoles(login);
  }
  isTokenExpired(): Boolean
  {
    return this.helper.isTokenExpired(this.token); }

  /*private getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if( curUser.username == username ) {
        this.roles = curUser.roles;
      }
    });
  }*/


  setRegistredUser(user : User){
    this.regitredUser=user;
  }
  getRegistredUser(){
    return this.regitredUser;
  }

}
