import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component_and_databinding';
  oddNumbers:number[]=[];
  evenNumbers:number[] =[];
  onIntervalFired(numberFired:number){
 if(numberFired%2===0){
   this.evenNumbers.push(numberFired);

 }
 else{
   this.oddNumbers.push(numberFired);
 }

  }
}
