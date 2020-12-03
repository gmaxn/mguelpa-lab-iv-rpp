import { Component, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actors-manage',
  templateUrl: './actors-manage.component.html',
  styleUrls: ['./actors-manage.component.css']
})
export class ActorsManageComponent implements OnInit {


  public actorsList: Actor[];
  public selectedActor: Actor;

  constructor(
    private actors:ActorService
  ) { }

  ngOnInit(): void {
    this.actors.get().subscribe(

    (result) => {
      this.actorsList = result;
      console.log(result);
    },
    (error) => {
      console.log(error);
    });
  }

  onSelection(actor:Actor) { 

    this.selectedActor = actor

  }

}
