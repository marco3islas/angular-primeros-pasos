import { Component, EventEmitter, Output } from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Goku',
    power: 0
  }

  emitCharacter(){
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit( this.character );

    this.character = {name: '', power: 0};


  }

}
