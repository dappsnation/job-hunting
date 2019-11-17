import { Injectable } from '@angular/core';
import { JobStore, JobState } from './job.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Job } from './job.model';
import { AuthService } from 'src/app/auth/state/auth.service';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'jobs' })
export class JobService extends CollectionService<JobState> {

  constructor(store: JobStore, private authService: AuthService) {
    super(store);
  }

  formatToFirestore(job: Job): any {
    if (job.createdBy) {
      return job;
    } else {
      const { uid } = this.authService.user;
      if (!uid) {
        throw new Error('you need to be connected to create a job offer')
      }
      return {
        createdBy: uid,
        ...job
      }
    }
  }
}
