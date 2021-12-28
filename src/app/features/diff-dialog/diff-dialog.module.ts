import { ShareModule } from './../../share/share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffDialogHomeComponent } from './diff-dialog-home/diff-dialog-home.component';
import { DiffDialogRoutingModule } from './diff-dialog-routing.module';
import { DiffDialogMatComponent } from './diff-dialog-mat/diff-dialog-mat.component';



@NgModule({
  declarations: [DiffDialogHomeComponent, DiffDialogMatComponent],
  imports: [
    CommonModule,
    ShareModule,
    DiffDialogRoutingModule
  ]
})
export class DiffDialogModule { }
