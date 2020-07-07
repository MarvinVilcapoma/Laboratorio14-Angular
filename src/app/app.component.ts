import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Ejemplo Laboratorio (Comentario)
  title = 'Heroes que pueden volar';
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  constructor() { this.reset(); }
  
  addHero(name: string){
    name = name.trim();
    if(!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes = this.heroes.concat(hero);
  }

  reset() {this.heroes = [];}

}