import { CommonModule } from '@angular/common';
import { ShoopingEditComponent } from './shooping-edit/shooping-edit.component';
import { ShoopingListComponent } from './shooping-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
declarations: [
  ShoopingListComponent,
  ShoopingEditComponent
],
imports: [
  CommonModule,
  FormsModule
]
})
export class ShoopingListModule {}
