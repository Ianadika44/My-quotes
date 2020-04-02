import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
    @Input() quote: Quote;
    @Output() isComplete = new EventEmitter<boolean>();
    like: any;
    dislike: any;
  
    quoteComplete(complete:boolean){
      this.isComplete.emit(complete);
    }
    quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
    likes : number=0
    dislikes : number=0
       likebuttonclick(){
       this.likes++;
  }
    dislikebuttonclick(){
    this.dislikes++;
  }
    constructor() { }
    ngOnInit(): void {
    }
  
  }
  