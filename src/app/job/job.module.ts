import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';

const material = [
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [ListComponent, ViewComponent, DashboardComponent, EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        children: [
          {
            path: ':jobId',
            component: ViewComponent
          }
        ]
      }, {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: ':jobId',
            component: EditComponent
          }
        ]
      }
    ]),
    ...material
  ]
})
export class JobModule { }
