import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ViewComponent } from './view/view.component';

const material = [
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [ListComponent, ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
        children: [
          {
            path: ':jobId',
            component: ViewComponent
          }
        ]
      },
    ]),
    ...material
  ]
})
export class JobModule { }
