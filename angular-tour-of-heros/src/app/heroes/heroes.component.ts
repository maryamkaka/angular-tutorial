import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	heros: Hero[];

	protected _selectedHero;

	constructor(
		private readonly _heroService: HeroService
	) { }

	ngOnInit() {
		this.getHeros();
	}

	protected onSelect(hero: Hero): void {
		this._selectedHero = hero;
	}

	protected getHeros() {
		this._heroService.getHeros()
			.subscribe(heros => this.heros = heros);
	}
}
