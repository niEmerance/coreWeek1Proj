import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes App';

  quotes:Quote[] =[
    {quoteName: 'You reap what you sow',quoteAuthor: 'Emerance',quotePublisher:'Josias'},
    {quoteName: 'I chose to be happy',quoteAuthor: 'Emelyne',quotePublisher:'Josiane'},
  ];
}
