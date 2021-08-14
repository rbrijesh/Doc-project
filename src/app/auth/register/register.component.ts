import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  formSubmitted: boolean = false;
  types = [
    {
      name: 'Doctor',
      value: 'doctor'
    },
    {
      name: 'User',
      value: 'user'
    },
  ];

  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      type: ['doctor', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      mobileNumber: [null, [Validators.required]]
    }, { validator: this.common.checkIfMatchingPasswords('password', 'confirmPassword') });

  }

  formControl(controlName) {
    return this.form.get(controlName);
  }

  save(isValid) {
    this.formSubmitted = true;
    if (isValid) {
      this.common.setSession('user', this.form.value);
      this.router.navigate(['/login']);
    }
  }
}
