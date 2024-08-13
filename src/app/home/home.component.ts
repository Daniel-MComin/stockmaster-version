import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../shared/services/auth.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: AuthService,){
    this.service.getAll().subscribe(result => {
      this.userList = result
      console.log(this.userList)
      this.user = new MatTableDataSource(this.userList);
  })
  
  }
  user: any;
  userList: any;
  showFiller = false;
  arrow = false;

  toggleArrow() {
   return this.arrow = true;
  }

}
