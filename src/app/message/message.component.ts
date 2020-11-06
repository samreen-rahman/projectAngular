import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  emp = {empName:"",empUserName:"",empPassword :"",empemail:"",empMobileNo:""}
  constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
this.emp.empName = data.a;
this.emp.empUserName = data.b;
this.emp.empPassword = data.c;
this.emp.empemail = data.d;
this.emp.empMobileNo = data.e;

  }

  public  closeMe() {
      this.dialogRef.close();
  }

  login1(){
console.log(this.emp.empName)
  }
  ngOnInit(): void {
  }

}
