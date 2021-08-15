import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'ngx-add-update-patient',
  templateUrl: './add-update-patient.component.html',
  styleUrls: ['./add-update-patient.component.scss']
})
export class AddUpdatePatientComponent implements OnInit {

  form: FormGroup;
  formSubmitted: boolean = false;
  genders = [
    {
      name: 'Male',
      value: 'male'
    },
    {
      name: 'Female',
      value: 'female'
    }
  ];
  type: string;
  index: number;
  patientData: any;

  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private dialogRef: NbDialogRef<AddUpdatePatientComponent>,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required]],
      gender: ['male', [Validators.required]]
    });

    if(this.type === 'view' || this.type === 'update') {
      let patient = this.common.getSession('patients');
  
      this.patientData = patient[this.index];
      this.formControl('firstName').setValue(this.patientData.firstName);
      this.formControl('lastName').setValue(this.patientData.lastName);
      this.formControl('email').setValue(this.patientData.email);
      this.formControl('age').setValue(this.patientData.age);
      this.formControl('gender').setValue(this.patientData.gender);
    }

    if(this.type === 'view') {
      this.form.disable();
    }
  }

  formControl(controlName) {
    return this.form.get(controlName);
  }

  save(isValid) {
    this.formSubmitted = true;
    console.log('form', this.form);

    if (isValid) {
      let patient = this.common.getSession('patients');
      if (this.type === 'add') {
        if (patient && patient.length > 0) {
          patient.push(this.form.value);
          this.common.setSession('patients', patient);
        } else {
          let patients = [];
          patients.push(this.form.value);
          this.common.setSession('patients', patients);
        }
        this.dialogRef.close(true);
      } else {

        patient[this.index].firstName = this.form.value.firstName;
        patient[this.index].lastName = this.form.value.lastName;
        patient[this.index].email = this.form.value.email;
        patient[this.index].age = this.form.value.age;
        patient[this.index].gender = this.form.value.gender;

        this.common.setSession('patients', patient);
        this.dialogRef.close(true);
      }
    }
  }

  reset() {
    this.form.reset();
    this.formControl('gender').setValue('male');
  }

  close() {
    this.dialogRef.close();
  }
}
