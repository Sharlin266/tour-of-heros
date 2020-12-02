import { Injectable } from '@angular/core';
import {Hero} from './hero';
import{HEROES} from'./mock-heroes';
import { from, Observable,of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id:number): Observable<Hero> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES.find(x => x.id == id));
  } 

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  } 

  getHeroes(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
 

  constructor(private messageService: MessageService) { }

  
}
