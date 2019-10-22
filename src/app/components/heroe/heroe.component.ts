import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  logoCasa: string;

  constructor(private activatedRouted: ActivatedRoute,
              private _heroeService: HeroesService ) {
    this.activatedRouted.params.subscribe( params => {
      this.heroe = this._heroeService.getheroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
