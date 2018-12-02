import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from "@angular/common";

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	@Input() hero: Hero;

	constructor(
		private _route: ActivatedRoute,
		private _heroService: HeroService,
		private _location: Location,
	) { }

	ngOnInit() {
		this.getHero();
	}

	getHero(): void {
		const id = +this._route.snapshot.paramMap.get("id"); 	// grab the id from the url 
		this._heroService.getHero(id)
			.subscribe(hero => this.hero = hero);
	}
}
