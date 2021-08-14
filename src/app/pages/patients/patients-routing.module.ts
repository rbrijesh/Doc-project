import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

const routes: Routes = [{
  path: '',
  component: PatientsComponent,
  children: [
    {
      path: 'list',
      component: PatientsListComponent
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PatientsRoutingModule { }
