import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClientModule, HttpClient,HttpParams } from '@angular/common/http';  
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClientModule, private httpService:HttpClient) { }
  ngOnInit(){
    
  }
  getUser(name:string,password:string){
    return this.httpService.get(environment.api+'/User/signIn?name='+name+'&password='+password);
  }
}