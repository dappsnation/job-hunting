import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { JobListGuard, JobDashboardGuard, JobActivedGuard } from './job.guard';
import { AngularFireAuthModule } from '@angular/fire/auth';


const material = [
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [ListComponent, ViewComponent, DashboardComponent, EditComponent],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [JobListGuard],
        canDeactivate: [JobListGuard],
        children: [
          {
            path: ':jobId',
            canActivate: [JobActivedGuard],
            component: ViewComponent
          }
        ]
      }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [JobDashboardGuard],
        canDeactivate: [JobDashboardGuard],
        children: [
          {
            path: ':jobId',
            canActivate: [JobActivedGuard],
            component: EditComponent
          }
        ]
      }
    ]),
    ...material
  ]
})
export class JobModule { }
