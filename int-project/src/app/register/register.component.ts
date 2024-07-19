import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string='';
  password: string='';
  username: string='';
  mobile: string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(){
      
    if(this.email == ''){
      alert('please enter email');
      return;

     }
  
     if(this.password == '') {
      alert('please enter password');
      return;
     }
     if(this.username ==''){
      alert('please enter username');
      return;

     }
  
     this.auth.register(this.email,this.password);
     this.email='';
     this.password = '';
     this.username= '';
  }
}
