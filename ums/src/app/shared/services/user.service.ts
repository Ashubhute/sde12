import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
//  BASE_URL=environment.baseurl;
  constructor(private http:HttpClient) { }
getCountries(){
  return this.http.get(`http://localhost:9090/countries`);
}

getStatesByCountryId(countryId:any){
  return this.http.get(`http://localhost:9090/states/${countryId}`);
}

getCityByStateId(stateId:any){
  return this.http.get(`http://localhost:9090/cities/${stateId}`);
}


  login(userdata:any){
    return this.http.post('http://localhost:9090/login',userdata,{responseType:'text'});

  }
  register(regdata:any){
  
    console.log(regdata)
   return this.http.post('http://localhost:9090/saveUser',regdata,{responseType:'text'});
   
  }
  userUnlock(ulock:any){
    return this.http.post('http://localhost:9090/unlock',ulock,{responseType:'text'});
  }
  forgot(email:any){
   return this.http.get(`http://localhost:9090/forgotPwd/${email}`,{responseType:'text'});
  }
  generateToken(sum:any){
    return this.http.post('http://localhost:9090/athorization/generate',sum)
  }
  // setToken(token){
  //   localStorage.setItem('token',token)
  // }
  // getToken(){
  //   return localStorage.getItem('token')
  // }
  // Islogin(){

  // }
  checkemail(email:any){
   return this.http.get(`http://localhost:9090/emailcheck/${email}`,{responseType:'text'});
  }
}
