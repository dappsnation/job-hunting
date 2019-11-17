import { Component, OnInit } from '@angular/core';
import { JobService } from '../+state/job.service';
import { FirestoreService } from 'akita-ng-fire';
import { createJob } from '../+state/job.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private service: JobService
    ) { }

  ngOnInit() {
  }

  save(title: string) {
    this.service.add({title} as any);
  }
}
