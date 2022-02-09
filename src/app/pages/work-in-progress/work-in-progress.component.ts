import { Component, OnInit } from '@angular/core';
import { logEvent } from 'firebase/analytics';
import { analytics } from 'src/app/app.configuration';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss'],
})
export class WorkInProgressComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (environment.analytics) {
      logEvent(analytics, 'wip');
    }
  }
}
