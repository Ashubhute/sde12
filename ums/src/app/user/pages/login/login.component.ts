import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
// import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
loginform:FormGroup
// demo:boolean=environment.production;

  constructor(private UserService:UserService) { }

  msg:any


  userlogin(){
    
    this.UserService.login(this.loginform.value)
    .subscribe((Response:any)=>{
      if(Response==='SUCCESS'){
        alert('login successfull')
        console.log('success')
      }
      else{
        this.msg='Invalid Credentials';
        alert('Invalid Credentials')
        console.log('Invalid Credentials')
      }},
     error=>{
      console.log(error);

})
  }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'pwd':new FormControl('',[Validators.required])
    });
    
  }

}
