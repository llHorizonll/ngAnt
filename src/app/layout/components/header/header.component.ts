import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: string;
  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.user = localStorage.getItem('user');
  }

  onLoggedout() {
    this.authenticationService.logout();
  }

}
