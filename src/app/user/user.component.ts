import { Component, EventEmitter, Input, Output } from '@angular/core';
import {type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//import { DUMMY_USERS } from '../dummy-users';

//const randomnum=Math.floor(Math.random()* DUMMY_USERS.length);

/*type user ={
  id : string;
  avatar : string;
  name : string;
}*/



@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) selected !: boolean;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();
  //select=output<string>();
  // state mechanism , selectedUser= DUMMY_USERS[randomnum];

  //selectedUser= signal(DUMMY_USERS[randomnum]);

  //imagePath=computed(()=> 'assets/users/' + this.selectedUser().avatar)
  /* state mechanism get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }*/
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    //console.log("Clicked!")
    //const randomnum=Math.floor(Math.random()* DUMMY_USERS.length);
    // state mechanism, this.selectedUser=DUMMY_USERS[randomnum];
    //this.selectedUser.set(DUMMY_USERS[randomnum]);
  }
}
