import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgClass, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isRegistering: boolean = false; // Initial state set to false (show login by default)
  isForgotPassword: boolean = false; // State for forgot password toggle
 

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
}
