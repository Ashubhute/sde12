import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
fgot:FormGroup

email:any
  constructor( private ashu:UserService) { }
  got(){
    
    this.ashu.forgot(this.email.value)
    .subscribe((res:any)=>{
      console.log(res)},
      err=>{
      console.log(err)
    })

    

  }

  


  ngOnInit(): void {
    this.fgot=new FormGroup({
      'email':new FormControl()
    })
  }

}
