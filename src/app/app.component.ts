import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showWindow = false;
  userData = {};
  users = [{id: 1, first_name : 'Johan', last_name: 'Peter', dob: '12/2/1990', email:'johan@gmail.com', country: 'UK', password: '12345'},
    { id: 2, first_name: 'Mahamed', last_name: 'Tariq', dob: '12/2/1990', email: 'tariq@gmail.com', country: 'UAE', password: '12345' }
];
  query: any = null;

  registration() {
    this.userData = {};
    this.showWindow = true;
  }

  cancel() {
    this.showWindow = false;
  }

  edit(id) {
    this.showWindow = true;
    this.users.forEach(element => {
      if(id == element.id){
        this.userData = element;
        // console.log(this.userData);
      }
    });
  }

  delete(id) {
    this.users.forEach(element => {
      if (id == element.id) {
        let index = this.users.indexOf(element)
        this.users.splice(index);

      }
    });
  }

  submit(user) {
    if(user.id != null && typeof user.id != 'undefined') {
      console.log('in if');
      this.users.forEach(element => {
        if (user.id == element.id) {
          let index = this.users.indexOf(element)
          this.users.splice(index);
          this.users.push(user);
        }
      });

      this.showWindow = false;
    } else {
      console.log('In else');
      let userIds: any = [];
      this.users.forEach(element => {
      userIds.push(element.id);
      });
      let largestId = Math.max.apply(null, userIds);
      user.id = largestId +1;
      this.users.push(user);
      console.log(largestId);
    }
    this.showWindow = false;
  }
  
}
