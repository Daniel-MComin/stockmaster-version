import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:3000/user'
  
  getAll(){
   return this.http.get(this.API);
  }

  getCode(codigo:any){
    return this.http.get(this.API + '/' + codigo);
   }

   makeRegister(data:any){
    return this.http.post(this.API, data);
   }

   updateRegister(codigo:any, data: any){
    return this.http.put(this.API + '/' + codigo, data);
   }
}
