import { Component, OnInit } from '@angular/core';
import { JobQuery } from '../+state/job.query';
import { JobService } from '../+state/job.service';
import { AuthService } from '../../auth/state/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Job } from '../+state/job.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  joblist: Observable<Job[]>;
  subscription: Subscription;

  constructor(private jobQuery: JobQuery, private jobService: JobService, private authService: AuthService) { }

  ngOnInit() {
    this.joblist = this.jobQuery.selectAll();
  }
}
