import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formSubmitted: boolean = false;
  userData: any;

  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.userData = this.common.getSession('user');
  }

  formControl(controlName) {
    return this.form.get(controlName);
  }

  save(isValid) {
    this.formSubmitted = true;
    if (isValid) {
      if (this.userData.userName) {
        if (this.userData.type === 'doctor') {
          this.router.navigate(['/pages/dashboard']);
        }
      } else {
        // toastr not valid user
      }
    }
  }

}
