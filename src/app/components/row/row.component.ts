import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }
  @ViewChild(AdDirective, { static: true }) public adHost!: AdDirective;

  ngOnInit(): void {
  }

}
