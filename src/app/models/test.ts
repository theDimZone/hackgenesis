export class Answer {
  public text: string;
  // adds some impact
}

export class Question {
  public text: string;
  public answers: Answer[];
}

export class Test {
    public name: string;
    public questions: Question[];

  /*
    constructor(public title: string,
                public price: number,
                public company: string)
    { }
    */
}
