import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  Yes() {
    this.dialogRef.close();
}
public No(){
  this.dialogRef.close();
}


  ngOnInit(): void {
  }

}

