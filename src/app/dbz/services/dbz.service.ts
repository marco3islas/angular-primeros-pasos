import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor(
  ) { 
  }
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 2000
    },
    {
      id: uuid(),
      name: 'Freeza',
      power: 10000
    }
  ]

  addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //     this.characters.splice(index, 1);
  deletCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
