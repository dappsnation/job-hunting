import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionGuard } from 'akita-ng-fire';
import { JobService } from './+state/job.service';
import { JobState, JobStore } from './+state/job.store';
import { AuthService } from '../auth/state/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JobListGuard  extends CollectionGuard<JobState> implements CanActivate {
  constructor(service: JobService) {
    super(service);
  }

  // Sync and set active
  sync(next: ActivatedRouteSnapshot) {
    return this.service.syncCollection();
  }

}

@Injectable({
  providedIn: 'root'
})
export class JobDashboardGuard  extends CollectionGuard<JobState> implements CanActivate {
  constructor(service: JobService, private authService: AuthService) {
    super(service);
  }

  // Sync and set active
  sync(next: ActivatedRouteSnapshot) {
  // return this.service.syncCollection((ref) => ref.where('createdBy', '==', this.authService.user.uid));
    return this.service.syncCollection();
  }

}

@Injectable({
  providedIn: 'root'
})
export class JobActivedGuard implements CanActivate {
  constructor(private store: JobStore) {
  }
  canActivate(next: ActivatedRouteSnapshot) {
   this.store.setActive(next.params.jobId);
   return true;
  }

}
