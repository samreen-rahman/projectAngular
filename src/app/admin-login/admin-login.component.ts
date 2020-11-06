import { Component, OnInit } from '@angular/core';

import {AdminserviceService} from '../adminservice.service' 
import { MatDialog, MatDialogConfig, MatDialogRef } from  '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';
import { DeleteComponent } from '../delete/delete.component';
import { AcceptComponent } from '../accept/accept.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  employees:any[];
  //emp = {empName:"",empUserName:"",empPassword :"",empemail:"",empMobileNo:""}

  
  public  email:  string  =  "example@580";
  public  password:  string  =  "password";

  onAccept(){
    this.dialog.open(AcceptComponent,{width:'40%'})
  }
  edit(){
      this.dialog.open(MessageComponent,{width:'40%',data:{
      }});

}

   onDelete(){
  this.dialog.open(DeleteComponent);
}
  constructor(private empService:AdminserviceService,private  dialog:  MatDialog,private router:Router) { }
  go(){
		this.router.navigate(['/', 'homeLink']);
	}
  ngOnInit(): void {
    this.employees = this.empService.getEmplyees();


  }


}
