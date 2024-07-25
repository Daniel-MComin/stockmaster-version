import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  API = 'http://localhost:3000/user'
  APIrole ='http://localhost:3000/role'
  
  getAll(){
   return this.http.get(this.API).pipe(delay(2000));
  }

  getAllRole(){
    return this.http.get(this.APIrole);
   }

  getByCode(id:any){
    console.log(id)
    return this.http.get(this.API+'/'+ id)
   }

   makeRegister(data:any){
    return this.http.post(this.API, data);
   }

   updateUser(id:any, data: any){
    return this.http.put(this.API+'/'+id, data);
   }

   isLogged(){
    return sessionStorage.getItem('username')!=null;
    //indica se o usuário está logado ou não, atribuindo o valor true se o username for diferente de nulo.
   }

   getUserRole(){
   return this.http.get('http://localhost:3000/role')
   }

   GetRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
   }
}
