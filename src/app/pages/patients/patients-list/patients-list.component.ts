import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { CommonService } from 'app/shared/services/common.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddUpdatePatientComponent } from './modals/add-update-patient/add-update-patient.component';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientsListComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  patients = [];
  completed = new Subject<any>();

  constructor(
    private dialogService: NbDialogService,
    private common: CommonService
  ) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      searching: true,
      ordering: true,
    };

    this.getPatients();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    if (this.completed) {
      this.completed.next();
      this.completed.complete();
    }
  }

  getPatients() {
    this.patients = this.common.getSession('patients');
  }

  trackByFn(index, item) {
    return index;
  }

  addNewPatient() {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'add' } }).onClose.subscribe(res => {
      if(res) {
        this.patients = this.common.getSession('patients');
      }
    });
  }

  view(index) {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'view', index: index } });
  }

  editPatient(index) {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'update', index: index } }).onClose.subscribe(res => {
      if(res) {
        this.patients = this.common.getSession('patients');
      }
    });
  }

  deletePatient(index) {
    let conf = confirm('Are you sure you want to delete this patient record ?');
    if(conf) {
      this.patients.splice(0, index);
      this.common.setSession('patients', this.patients);
    }
  }
}