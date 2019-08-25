import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  upvotes=0;
  downvotes=0;

  upVote(){
    this.upvotes++;
  }
  downVote(){
    this.downvotes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
