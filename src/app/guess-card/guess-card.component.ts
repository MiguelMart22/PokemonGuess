import { Component, OnInit } from '@angular/core';
import { PokemonToGuess } from './guess-card';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-guess-card',
  templateUrl: './guess-card.component.html',
  styleUrls: ['./guess-card.component.css']
})
export class GuessCardComponent {

  pokemonName!: string;
  pokemonGuessed: boolean = false;

  guessPokemon() {

    if ( this.pokemonName.toLowerCase() === this.guessCard.name) {
      const imgElement: HTMLElement = document.getElementById("pokemonImg")!;
      imgElement.style.filter = "brightness(1)";
      this.pokemonGuessed = true;
    }

    return false;

  }

  guessCard : PokemonToGuess = {
    name: '',
    imgUrl: '',
    types: [],
    typesUrl: [],
    originalGeneration: '',
    ability: '',
    forms: []


    }

    changePokemon() {
      // reiniciamos los tipos porque se puede quedar guardado el segundo tipo si es un pokemon monotipo
      this.guessCard.typesUrl[0] = '';
      this.guessCard.typesUrl[1] = '';
      this.guessCard.types[0] = '';
      this.guessCard.types[1] = '';
      // tambien volvemos a poner el sprite en negro
      const imgElement: HTMLElement = document.getElementById("pokemonImg")!;
      imgElement.style.filter = "brightness(0)";
      
      this.getRandomPokemon();

    }

    constructor(private services: ServicesService) {}

    calculateTypes(data:any) {
      for (let i = 0; i < data.types.length; i++) {
        this.guessCard.types[i] = data.types[i].type.name; 
      }
    
        for (let i = 0; i <= 1; i++) {
          switch (this.guessCard.types[i]) {
            case "normal":
              this.guessCard.typesUrl[i] = "assets/types/normal.png";
              break;
            case "fighting":
              this.guessCard.typesUrl[i] = "assets/types/fight.png";
              break;
            case "flying":
              this.guessCard.typesUrl[i] = "assets/types/fly.png";
              break;
            case "ground":
              this.guessCard.typesUrl[i] = "assets/types/ground.png";
              break;
            case "poison":
              this.guessCard.typesUrl[i] = "assets/types/poison.png";
              break;
            case "rock":
              this.guessCard.typesUrl[i] = "assets/types/rock.png";
              break;
            case "bug":
              this.guessCard.typesUrl[i] = "assets/types/bug.png";
              break;
            case "ghost":
              this.guessCard.typesUrl[i] = "assets/types/ghost.png";
              break;
            case "steel":
              this.guessCard.typesUrl[i] = "assets/types/steel.png";
              break;
            case "fire":
              this.guessCard.typesUrl[i] = "assets/types/fire.png";
              break;
            case "water":
              this.guessCard.typesUrl[i] = "assets/types/water.png";
              break;
            case "grass":
              this.guessCard.typesUrl[i] = "assets/types/grass.png";
              break;
            case "electric":
              this.guessCard.typesUrl[i] = "assets/types/electric.png";
              break;
            case "psychic":
              this.guessCard.typesUrl[i] = "assets/types/psychic.png";
              break;
            case "ice":
              this.guessCard.typesUrl[i] = "assets/types/ice.png";
              break;
            case "dragon":
              this.guessCard.typesUrl[i] = "assets/types/draco.png";
              break;
            case "fairy":
              this.guessCard.typesUrl[i] = "assets/types/fairy.png";
              break;
            case "shadow":
              this.guessCard.typesUrl[i] = "assets/types/shadow.png";
              break;
            case "dark":
              this.guessCard.typesUrl[i] = "assets/types/shadow.png";
              break;
          } 
        }
      
    }

    calculateRegion(data:any) {
        if ( data.id >= 1 && data.id <= 151) {
          this.guessCard.originalGeneration = "Kanto";
        }else if ( data.id >= 152 && data.id <= 251) {
          this.guessCard.originalGeneration = "Johto";
        }else if ( data.id >= 252 && data.id <= 386) {
          this.guessCard.originalGeneration = "Hoenn";
        }else if ( data.id >= 387 && data.id <= 494) {
          this.guessCard.originalGeneration = "Sinnoh";
        }else if ( data.id >= 495 && data.id <= 649) {
          this.guessCard.originalGeneration = "Teselia";
        }else if ( data.id >= 650 && data.id <= 721) {
          this.guessCard.originalGeneration = "Kalos";
        }else if ( data.id >= 722 && data.id <= 809) {
          this.guessCard.originalGeneration = "Alola";
        }else if ( data.id >= 810 && data.id <= 905) {
          this.guessCard.originalGeneration = "Galar";
        }else if ( data.id >= 906 && data.id <= 1010) {
          this.guessCard.originalGeneration = "Paldea";
        }else {
          this.guessCard.originalGeneration = "NOT_IMPLEMENTED";
        }

      }

    
    getRandomPokemon() {
      this.services.getRandomPokemon(Math.floor(Math.random() * 1010)).subscribe((data) => {
        this.guessCard.name = data.name;
        this.calculateTypes(data);
        this.guessCard.imgUrl = data.sprites.front_default;
        this.calculateRegion(data);
        this.guessCard.ability = data.abilities[0].ability.name;

      });

    }

    ngOnInit() {
      this.getRandomPokemon();
    }
  
}
