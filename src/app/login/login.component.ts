import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, Service, AuthenticationService } from '../shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService, private service: Service) { }

  validateForm: FormGroup;

  submitForm($event, value) {
    $event.preventDefault();
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    this.authenticationService.login(value).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

}
