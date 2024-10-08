import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Login } from '../models/login';
import { AuthenticationToken } from '../models/authenticationToken';
import { Register } from '../models/register';
import { Forgot } from '../models/forgot';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgClass, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  err : Object = {};
  errorPresent: boolean = false;
  isVisible: boolean = false;
  isRegistering: boolean = false; // Initial state set to false (show login by default)
  isForgotPassword: boolean = false; // State for forgot password toggle
  statusCode: number = 0;
  confirmPassword: String = ''
  
  constructor(private authService: AuthService, private loginService: LoginService, private router: Router){}

  loginUser: Login = new Login();
  registerUser: Register = new Register();
  forgotUser: Forgot = new Forgot();
  authToken: AuthenticationToken = new AuthenticationToken();

  // Method to switch to the registration form
  toggleRegister() {
    this.isRegistering = true;
    this.isForgotPassword = false; // Reset forgot password state
  }

  // Method to switch to the login form
  toggleLogin() {
    this.isRegistering = false;
    this.isForgotPassword = false; // Reset forgot password state
  }

  // Method to toggle forgot password
  toggleForgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
    this.isRegistering =false; // Reset registration state
    // this.isforgot=true;
  
  }

  // Placeholder method for resetting password
  resetPassword() {
    // Implement your password reset logic here
    console.log('Password reset requested');
  }

  onSubmitLogin(){
    this.isVisible = true;
    this.loginService.loginUser(this.loginUser).subscribe({
      next: (value) => {
        this.authToken = value;
        console.log("After submit: ", this.authToken);
        this.authService.saveToken(this.authToken);

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: (err) => {
        console.log(this.authToken);
        this.statusCode = err.status;
        if(this.statusCode === 400){
            this.errorPresent = true;
            this.err = err.error;
        } else{
          console.error("Error", err);

          this.err = err.error.text;
        }
          console.error(err);
      }
    });
  }

  
  onSubmitRegister(){
    this.isVisible = true;
    console.log("Register -", this.registerUser);
    this.loginService.registerUser(this.registerUser).subscribe({
      next: (value) => {
        console.log("Value is", value);
      },
      error: (err) => {
        this.statusCode = err.status;
        if(this.statusCode === 400){
            this.errorPresent = true;
            this.err = err.error;
        } else{
          this.err = err.error.text;
        }
          console.error(err);
      }
    });
  }

  onSubmitForgot(){
    console.log(this.forgotUser);
    console.log(this.confirmPassword);
    if(this.confirmPassword === this.forgotUser.password){
      this.isVisible = true;
      this.loginService.changePassword(this.forgotUser).subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          this.statusCode = err.status;
        if(this.statusCode === 400){
            this.errorPresent = true;
            this.err = err.error;
        } else{
          console.error("Error", err);

          this.err = err.error.text;
        }
          console.error(err);
        }
      });
    }
  }

}
  
