import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes: Quote[] = [
    new Quote(1, 'No man born of a woman can defeat me', 'Adolf Hitler',new Date(1990,3,14)),
    new Quote(2,'Every moment has a fresh beginning','prof Wangari Maathai',new Date(2002,3,14)),
    new Quote(3,'Change the world by being yourself','Barrack Obama',new Date(2017,3,14)),
    new Quote(4,'Die with memories not dreams','Mahatma Gadhi',new Date(2019,3,14)),
  ]
  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quote){
    let QuoteLength = this.quotes.length;
    quote.id = QuoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
