import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  public username: any = [];
  public name: string = '';
  
  constructor(){}

  impresion(): void{
    this.username = [{
      name: 'alexis'
    }]
  }

}
