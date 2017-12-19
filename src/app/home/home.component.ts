import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _dataSet = [];
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _loading = true;
  _sortValue = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this._loading = true;
    this.http.get('/assets/data/data2.json').subscribe((data: any) => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      this._loading = false;
      this._total = 200;
      this._dataSet = data;
    });
  }

}
