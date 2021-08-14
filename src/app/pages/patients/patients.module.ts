import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { AddUpdatePatientComponent } from './patients-list/modals/add-update-patient/add-update-patient.component';
import { NbCardModule } from '@nebular/theme';
import { PatientsListComponent } from './patients-list/patients-list.component';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientsListComponent,
    AddUpdatePatientComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
