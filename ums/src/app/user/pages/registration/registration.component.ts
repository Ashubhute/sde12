import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration:FormGroup

  msg:any

  constructor(private reg:UserService,private rout:Router) { }
  


 register(){
  console.log(this.registration.value)
   this.reg.register(this.registration.value)
   .subscribe(res=>{console.log(res)
    alert(res)
    this.rout.navigate(['login'])
   },
    err=>{console.log(err)
    
  })
   }
   checkemail(email){
    this.reg.checkemail(email)
    .subscribe(res=>{console.log(res)},
    err=>{console.log(err)
    })
   }
  ngOnInit(): void {  
    this.getAllCountries();
    this.registration=new FormGroup({
     'cityId':new FormControl(),
     'countryId':new FormControl(),
     'dob':new FormControl(),
     'email':new FormControl(),
     'fname':new FormControl(),
     'gender':new FormControl(),
     'lname':new FormControl(),
     'phno':new FormControl(),
     'stateId':new FormControl(),

    })
  }
  countries:any
  states:any
  cities:any
getAllCountries(){
  this.reg.getCountries()
  .subscribe (
  (Response:any)=>{
    this.countries=Response
  },
  err=>{
    console.log(err)
  }
  )
}
getStatesByCountryId(countryId:any){
this.reg.getStatesByCountryId(countryId)
.subscribe((response)=>{
  this.states=response
},
err=>{
  console.log(err)
})
}
getCityByStateId(stateId){
this.reg.getCityByStateId(stateId)
.subscribe((response)=>{
  this.cities=response
},
err=>{
  console.log(err)
}
)
}
}
