import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
    ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }

}
