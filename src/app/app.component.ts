import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/state/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'job-hunting';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.sync().subscribe();
  }
}
