import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, Service } from '../shared';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(private fb: FormBuilder, private router: Router, private alertService: AlertService, private service: Service) { }

  validateForm: FormGroup;

  submitForm = ($event, value) => {
    $event.preventDefault();
    // tslint:disable-next-line:forin
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    this.service.register(value)
      .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        console.log(error);
      });
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      firstname: [null],
      lastname: [null],
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

}
