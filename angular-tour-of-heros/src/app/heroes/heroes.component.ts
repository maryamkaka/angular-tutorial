import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	heros = HEROS;
	protected selectedHero;

	constructor() { }

	ngOnInit() { }

	protected onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
