import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote('You reap what you sow','Emerance','Josias'),
    new Quote('I chose to be happy','Emelyne','Josiane'),
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  quoteRemove(isComplete, index){
    if (isComplete){
      let toRemove= confirm(`Are you sure you want to Delete ${this.quotes[index].quoteName} ? `)
      if(toRemove){
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
