import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root'
})

export class HeroService {

	constructor(
		private messageService: MessageService
	) { }

	getHeros(): Observable<Hero[]> {
		this.messageService.add("HeroService: fetched hero");
		return of(HEROS);
	}

	getHero(id: number): Observable<Hero> {
		this.messageService.add(`HeroService: fetched hero id:${id}`);
		return of(HEROS.find(hero => hero.id === id));
	}
}