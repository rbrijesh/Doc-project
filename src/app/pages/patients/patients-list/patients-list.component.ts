import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CommonService } from 'app/shared/services/common.service';
import { LocalDataSource } from 'ng2-smart-table';
import { AddUpdatePatientComponent } from './modals/add-update-patient/add-update-patient.component';

@Component({
  selector: 'ngx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientsListComponent implements OnInit {

  patients = [];

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      view: false,
      // Custom Buttons
      custom: [
        { name: 'view', title: '<i class="nb-person"></i>' },
        { name: 'update', title: '&nbsp;&nbsp;<i class="nb-edit"></i>' },
        { name: 'delete', title: '&nbsp;&nbsp;<i class="nb-trash"></i>' }
      ],
      position: 'right',
    },
    columns: {
      firstName: {
        title: 'First Name'
      },
      lastName: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      gender: {
        title: 'Gender'
      },
      age: {
        title: 'Age'
      }
    },
    pager:
    {
      perPage: 1
    }
  };

  source: LocalDataSource;

  constructor(
    private dialogService: NbDialogService,
    private common: CommonService
  ) {
  }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patients = this.common.getSession('patients');
    this.source = new LocalDataSource(this.patients);
  }

  trackByFn(index, item) {
    return index;
  }

  onSearch(value: string) {
    if(value) {
      this.source.setFilter([
        // fields we want to include in the search
        {
          field: 'firstName',
          search: value
        },
        {
          field: 'lastName',
          search: value
        },
        {
          field: 'email',
          search: value
        },
        {
          field: 'age',
          search: value
        },
        {
          field: 'gender',
          search: value
        }
      ], false);
    } else {
      this.patients = this.common.getSession('patients');
      this.source = new LocalDataSource(this.patients);
    }
  }

  onCustomAction(event) {
    console.log('event', event);
    let index;
    event.source.data.forEach((element, i) => {
      if (element.firstName === event.data.firstName) {
        index = i;
      }
    });

    switch (event.action) {
      case 'view':
        this.view(index);
        break;
      case 'update':
        this.editPatient(index);
        break;
      default:
        this.deletePatient(index);
        break;
    }
  }

  addNewPatient() {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'add' } }).onClose.subscribe(res => {
      if (res) {
        this.patients = this.common.getSession('patients');
        this.source = new LocalDataSource(this.patients);
      }
    });
  }

  view(index) {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'view', index: index } });
  }

  editPatient(index) {
    this.dialogService.open(AddUpdatePatientComponent, { closeOnBackdropClick: false, context: { type: 'update', index: index } }).onClose.subscribe(res => {
      if (res) {
        this.patients = this.common.getSession('patients');
        this.source = new LocalDataSource(this.patients);
      }
    });
  }

  deletePatient(index) {
    let conf = confirm('Are you sure you want to delete this patient record ?');
    if (conf) {
      this.patients = this.patients.splice(0, index);
      this.common.setSession('patients', this.patients);
      this.source = new LocalDataSource(this.patients);
    }
  }
}