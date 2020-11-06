import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private  dialogRef:  MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
  }
  public  closeMe() {
    this.dialogRef.close();
}

  ngOnInit(): void {
  }

}
