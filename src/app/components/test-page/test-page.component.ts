import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Test, Question, Answer } from "../../models/test";
import { ActivatedRoute} from '@angular/router';

import tests from "../../tests/";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  public test: Test;
  public current_question: Question;
  public current_step: number = 0;
  public current_step_percent: number = 0;

  public is_finished: boolean = false;

  constructor(private titleService: Title, private activateRoute: ActivatedRoute) {
    let name = activateRoute.snapshot.params['name'];
    this.test = tests[name] as Test;

    this.titleService.setTitle(this.test.name);

    this.current_question = this.test.questions[0];
  }

  ngOnInit(): void {
  }

  choose(i: number): void {
    this.current_question.value = this.current_question.answers[i];
  }

  prev_question(): void {

    this.current_step--;

    this.current_question = this.test.questions[this.current_step];
    this.current_step_percent = this.current_step / this.test.questions.length * 100;
  }

  next_question(): void {
    if(!this.current_question.value.text) return;

    this.current_step++;
    this.current_step_percent = this.current_step / this.test.questions.length * 100;
    if(this.current_step == this.test.questions.length) {
      this.finish();
      return;
    }

    this.current_question = this.test.questions[this.current_step];
  }

  finish(): void {
    this.is_finished = true;

    for(let question of this.test.questions) {
      console.log(question.value);
    }
  }
}
