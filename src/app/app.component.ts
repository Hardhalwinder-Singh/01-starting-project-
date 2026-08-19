import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId?: string;

  onSelectUser(id: string) {
    console.log('Selected user ID:', id);
    return this.selectUserId = id;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.selectUserId);
  }
  

}
