import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  ROOT_URI:String="http://javaangularfullstack.us-east-1.elasticbeanstalk.com";
  constructor(private http:HttpClient) { }


  public doRegistration(user){
    return this.http.post(this.ROOT_URI+"/register",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.ROOT_URI+"/getAllUsers");
  }

  public getUserByEmail(email){
    return this.http.get(this.ROOT_URI+"/findUser/"+email);
  }

  public deleteUser(id){
    return this.http.delete(this.ROOT_URI+"/cancel/"+id);
  }
}
