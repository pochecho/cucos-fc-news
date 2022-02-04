import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdDirective } from 'src/app/components/ad.directive';
import { COMPONENTS_MAPPER } from 'src/app/components/components.mapper';
import { DatesInformationService } from 'src/app/services/dates-information.service';

@Component({
  selector: 'app-detail-date',
  templateUrl: './detail-date.component.html',
  styleUrls: ['./detail-date.component.scss'],
})
export class DateDetailComponent implements OnInit, AfterViewInit {
  date: string;
  data: any;
  body: any;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor(
    private route: ActivatedRoute,
    private datesInformationService: DatesInformationService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.date = params['date'];
      this.data = this.datesInformationService.getDetailByDate(this.date);
      this.body = this.data.body;
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
