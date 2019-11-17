import { Component, OnInit } from '@angular/core';
import { JobService } from '../+state/job.service';
import { JobQuery } from '../+state/job.query';
import { Job } from '../+state/job.model';
import { Observable } from 'rxjs';
import { createJob } from '../+state/job.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public job$: Observable<Job>;

  constructor(private service: JobService, private jobQuery: JobQuery) { }

  ngOnInit() {
    this.job$ = this.jobQuery.selectActive();
  }

  save(title: string) {
    this.service.add({title} as any);
  }
}
