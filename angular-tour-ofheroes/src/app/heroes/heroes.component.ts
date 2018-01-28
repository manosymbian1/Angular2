import { Component, OnInit } from '@angular/core';
import  {herotmp} from  '../hero';
import  {addHeroes} from '../mock-heroes';


@Component({	
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  tmpObj : herotmp = {
  	id : 1,
  	name : "Mano"
  }
  hello = addHeroes;
  constructor() { }

  ngOnInit() {
  }

}
