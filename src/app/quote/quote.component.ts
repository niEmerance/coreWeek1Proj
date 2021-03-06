import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote('You reap what you sow','Emerance','Josias',new Date(2018,3,20)),
    new Quote('I chose to be happy','Emelyne','Josiane',new Date(2017,5,23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  quoteRemove(isComplete, index){
    if (isComplete){
      let toRemove= confirm(`Are you sure you want to Delete this quote ? `)
      if(toRemove){
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.publishDate= new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
