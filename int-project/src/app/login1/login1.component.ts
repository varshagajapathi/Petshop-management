import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  email: string = '';
  password: string = '';
  username: string='';
  loggedin: boolean= false;

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  login1() {
    if(this.email == ''){
    alert('please enter email');
    return;
   }

   if(this.password == '') {
    alert('please enter password');
    return;
   }

   this.auth.login1(this.email,this.password,);
   this.email='';
   this.password = '';
   this.username='';
}
}

