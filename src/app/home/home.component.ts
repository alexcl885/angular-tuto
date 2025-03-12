import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * asi se pueden crear funciones para 
   * pasarselas al html...
   */
  keyUpHandler(){
    console.log("tecleando en el input");   
  }
}
