import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hereo-targeta',
  templateUrl: './hereo-targeta.component.html',
  styleUrls: ['./hereo-targeta.component.css']
})
export class HereoTargetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
