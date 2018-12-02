import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heros.component.html',
	styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

	heros: Hero[];

	constructor(
		private readonly heroService: HeroService
	) { }

	ngOnInit() {
		this.getHeros();
	}

	protected getHeros() {
		this.heroService.getHeros()
			.subscribe(heros => this.heros = heros);
	}
}
