import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { JobStore, JobState } from './job.store';

@Injectable({ providedIn: 'root' })
export class JobQuery extends QueryEntity<JobState> {

  constructor(protected store: JobStore) {
    super(store);
  }

}
