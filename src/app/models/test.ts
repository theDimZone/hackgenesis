export class Answer {
  public text: string;
  // adds some impact
  public impact_factor: string;
  public impact: number; //from 0 to infinity, relatievity calculates after test
}

export class Question {
  public text: string;
  public answers: Answer[] = [];
  public value: Answer; // for default value and test calculation
}

export class Test {
    public name: string;
    public questions: Question[] = [];

  /*
    constructor(public title: string,
                public price: number,
                public company: string)
    { }
    */
}
