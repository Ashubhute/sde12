import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {
  unlk:FormGroup
  constructor(private lock:UserService,private rout:Router) { }
  msg:any

  unlock(){
    this.lock.userUnlock(this.unlk.value)
    .subscribe((Response:any)=>{
      if(Response==='Account unlocked successfully'){
        alert('Account unlocked successfully')
        console.log('Account unlocked successfully')
        this.rout.navigate(['login'])
      }
      else{
        this.msg='Invalid';
        alert('Invalid')
        console.log('Invalid')
      }},
     error=>{
      console.log(error);

})
  }


  

  ngOnInit(): void {
   this.unlk=new FormGroup({
    'email':new FormControl(),
    'tempPwd':new FormControl(),
    'newPwd':new FormControl(),
    'confirmPwd':new FormControl()
   });
  }

}
