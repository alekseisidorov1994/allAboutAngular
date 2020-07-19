import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor( private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  logout(event: Event): void {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin', 'login']);

  }
}