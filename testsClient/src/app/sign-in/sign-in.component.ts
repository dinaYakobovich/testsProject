import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signIn(user_name: string, user_password: string) {//
    this.userService.getUser(user_name, user_password).subscribe(
      (res) => {
        if (res['status'] == 1)
          this.router.navigate(['/teachersettings', res['user_id']]);
          else this.router.navigate(['/studentsettings',res['user_id']]);
      },
      (error) => console.log(error));
  }

}
