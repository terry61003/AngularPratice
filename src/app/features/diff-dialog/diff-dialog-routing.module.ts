import { DiffDialogHomeComponent } from './diff-dialog-home/diff-dialog-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DiffDialogHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiffDialogRoutingModule { }
