import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    {quoteName: 'You reap what you sow',quoteAuthor: 'Emerance',quotePublisher:'Josias'},
    {quoteName: 'I chose to be happy',quoteAuthor: 'Emelyne',quotePublisher:'Josiane'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
