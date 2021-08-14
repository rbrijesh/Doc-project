import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getSession(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  setSession(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeSession(key) {
    localStorage.removeItem(key);
  }

  removeAllSession() {
    localStorage.clear();
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordConfirmationInput.value) {
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({ notEquivalent: true });
        } else {
          return passwordConfirmationInput.setErrors(null);
        }
      }
    };
  }
}
