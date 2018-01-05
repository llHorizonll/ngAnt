import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Service } from '../../../shared';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(private http: HttpClient, private service: Service) { }
  menulist = [];

  ngOnInit() {
    this.service.GET('http://localhost/genex.wcf/MENU/Menu.svc/Json/G/MENULIST').subscribe((data: any) => {
      let r = JSON.parse(data);
      this.menulist = r.Data;
      console.log(this.menulist);
    });
  }
}
