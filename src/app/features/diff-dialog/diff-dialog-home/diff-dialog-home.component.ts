import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiffDialogMatComponent } from '../diff-dialog-mat/diff-dialog-mat.component';

@Component({
  selector: 'app-diff-dialog-home',
  templateUrl: './diff-dialog-home.component.html',
  styleUrls: ['./diff-dialog-home.component.scss']
})
export class DiffDialogHomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DiffDialogMatComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
