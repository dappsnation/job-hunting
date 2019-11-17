import { Component, OnInit } from '@angular/core';
import { JobQuery } from '../+state/job.query';
import { Observable, Subscription } from 'rxjs';
import { Job } from '../+state/job.model';

@Component({
  selector: 'job-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  joblist: Observable<Job[]>;
  subscription: Subscription;

  constructor(private jobQuery: JobQuery) { }

  ngOnInit() {
    this.joblist = this.jobQuery.selectAll();
  }
}
