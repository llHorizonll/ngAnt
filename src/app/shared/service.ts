import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    constructor(private http: HttpClient) { }
    isCollapsed = false;
    register(value) {
        const obj = {
            ViewBus: [{
                BuId: localStorage.getItem('tk'),
                IsAdminBu: true
            }],
            ViewUserRoles: [],
            Password: value.password,
            Firstname: value.firstname,
            Lastname: value.lastname,
            Email: value.email
        };
        console.log(obj);
        return this.http.post('http://localhost/Genex.WCF/SYS/Authen.svc/Json/C/User', obj);
    }

    GET(servicename, param = '') {
        return this.http.get(servicename + param);
    }
}
