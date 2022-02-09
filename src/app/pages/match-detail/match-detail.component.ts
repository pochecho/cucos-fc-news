import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { logEvent } from 'firebase/analytics';
import { analytics } from 'src/app/app.configuration';
import { AdDirective } from 'src/app/components/ad.directive';
import { COMPONENTS_MAPPER } from 'src/app/components/components.mapper';
import { MatchesInformationService } from 'src/app/services/matches-information.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss'],
})
export class MatchDetailComponent implements OnInit, AfterViewInit {
  date: string;
  data: any;
  body: any;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor(
    private route: ActivatedRoute,
    private datesInformationService: MatchesInformationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.date = params['date'];
      this.data = this.datesInformationService.getPublicationByMatch(this.date);
      this.body = this.data.body;
      if (environment.analytics) {
        logEvent(analytics, 'magazine.detail', { date: params['date'] });
      }
    });
    this.render(this.body, this.adHost);
  }

  render(body, parent): void {
    let newParent = parent;
    if (body.component) {
      const component = COMPONENTS_MAPPER[body.component];

      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(component);
      // this.viewContainerRef.clear();
      const componentRef =
        parent.viewContainerRef.createComponent(componentFactory);
      newParent = componentRef.instance.adHost;
      (<any>componentRef.instance).data = body.data;
    }
    if (body.children) {
      for (const child of body.children) {
        this.render(child, newParent);
      }
    }
  }
}
