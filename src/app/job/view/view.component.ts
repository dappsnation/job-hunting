import { Component, OnInit } from '@angular/core';
import { JobQuery } from '../+state/job.query';
import { Observable } from 'rxjs';
import { Job } from '../+state/job.model';
@Component({
  selector: 'job-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public job$: Observable<Job>;

  constructor(private jobQuery: JobQuery) { }

  ngOnInit() {
    this.job$ = this.jobQuery.selectActive();
  }

}
