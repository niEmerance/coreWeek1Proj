export class Quote {
    showDetails: boolean;
    constructor(public quoteName:string,public quoteAuthor:string,public quotePublisher:string,public publishDate: Date){
        this.showDetails=false;
    }
}
