import { Component, computed, signal, Input, input, Output, EventEmitter,  output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type UserComponentInterface } from './user.model';

//math floor rounds to nearest whole number and() Math.random() * DUMMY_USERS.length)makes random number between 0 and
//  the length of the array. This is used to select a random user from the DUMMY_USERS array.
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);




@Component({
  selector: 'app-user',
  standalone: false,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//where inputs are registered, we can use the @Input decorator to define the inputs for the component. 
// The @Input decorator is used to define a property that can be set from outside the component. 



export class UserComponent {
// using ! we are saying to the compiler that we are sure that the value will be assigned before it is used. 
// This is called definite assignment assertion.
// Input using Zone.js library
  // @Input({required: true}) id!: string ;
  // @Input({required: true}) avatar!: string ;
  // @Input({required: true}) name!: string ;

// OR can create OBJECT as input directly
@Input() user!: UserComponentInterface;
@Input({required: true}) selected!: boolean ;


  @Output() anyName = new EventEmitter<string>();
//  OR below using signal() : typescript generic functions
  // select  = output<string>();

  // //Input using signal() : typescript generic functions
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

 get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

 
 onSelectUser() {
  this.anyName.emit(this.user.id);
}
}


























// export class UserComponent {
// //  selectedUser = DUMMY_USERS[randomIndex]; // using ZONE.js library 

// selectedUser = signal(DUMMY_USERS[randomIndex]); //using signal() 
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // only run compute when there is change not everytime the component is rendered
 

// //  get imagePath() {
// //     return 'assets/users/' + this.selectedUser().avatar;
// //   }

//  onSelectUser() {
//     // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser.set(DUMMY_USERS[randomIndex]); // using set() method to update the value of the selectedUser signal
//     // // this.selectedUser = DUMMY_USERS[randomIndex]; // using ZONE.js
//   }

// }
