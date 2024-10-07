import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {
  deleteUser(userName: string) {
    console.log(`Deleting user ${userName}...`);
    // Logic for deleting the user can be implemented here
  }
}
