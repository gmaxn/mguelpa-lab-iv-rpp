import { I18nPluralPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actors-grid',
  templateUrl: './actors-grid.component.html',
  styleUrls: ['./actors-grid.component.css']
})
export class ActorsGridComponent implements OnInit {

  @Input()
  public list: Actor[];

  @Output()
  public selection: EventEmitter<Actor> = new EventEmitter<Actor>();

  constructor(
    private actorService: ActorService
  ) { }

  ngOnInit(): void {

  }

  onSelection(e: Event) {

    const element: HTMLElement = (<HTMLElement>e.currentTarget);

    const actor: Actor = {
      id:element.getAttribute('actor.id'),
      firstname:element.getAttribute('actor.firstname'),
      lastname:element.getAttribute('actor.lastname'),
      email:element.getAttribute('actor.email'),
      gender:element.getAttribute('actor.gender'),
      birthdate:element.getAttribute('actor.birthdate'),
      imageUrl:element.getAttribute('actor.imageUrl')
    }

    this.selection.emit(actor);
  }

}
