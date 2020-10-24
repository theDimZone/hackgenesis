import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Test, Question, Answer } from "../../models/test";
import { ActivatedRoute} from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

import tests from "../../tests/";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css'],
  providers: [LocalStorageService]
})
export class TestPageComponent implements OnInit {
  public test: Test;
  public current_question: Question;
  public current_step: number = 0;
  public current_step_percent: number = 0;
  public is_finished_prev: boolean = false;
  public is_finished: boolean = false;

  constructor(private titleService: Title, private activateRoute: ActivatedRoute, private localStorageService: LocalStorageService) {
    let name = activateRoute.snapshot.params['name'];
    this.test = tests[name] as Test;
    this.titleService.setTitle(this.test.name);

    console.log("User: ", this.localStorageService.getUser());

    let passed_tests = this.localStorageService.getUserParameter("passed_tests");
    if(passed_tests.includes(name)) this.is_finished_prev = true;

    this.current_question = this.test.questions[0];
  }

  ngOnInit(): void {
  }

  choose(i: number): void {
    this.current_question.value = this.current_question.answers[i];
  }

  prev_question(): void {
    if(this.current_step == 0) return;
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
    let factors = { risky: 0, diversification: 0, duration: 0, boomer: 0, skill: 0, number: 0, optimism: 0 };

    let maximums = { risky: 0, diversification: 0, duration: 0, boomer: 0, skill: 0, number: 0, optimism: 0 };
    let values = { risky: 0, diversification: 0, duration: 0, boomer: 0, skill: 0, number: 0, optimism: 0 };
    let relative_values = { risky: 0, diversification: 0, duration: 0, boomer: 0, skill: 0, number: 0, optimism: 0 };
    //console.log(this.localStorageService.getUser());

    for(let question of this.test.questions) {
      let maximum_of_question = 0;
      let factor_of_maximum = "";
      for(let answer of question.answers) {
        if(answer.impact > maximum_of_question) {
          maximum_of_question = answer.impact;
          factor_of_maximum = answer.impact_factor;
        }
      }
      maximums[factor_of_maximum] += maximum_of_question;

      values[question.value.impact_factor] += question.value.impact;
    }

    console.log("Max: ", maximums);
    console.log("Val: ", values);

    for(let factor in values) {
      let relative_value = values[factor] < 0 ? 0 : values[factor] / maximums[factor] * 100;
      this.localStorageService.setUserParameter("factor_" + factor, relative_value);
    }

    if(!this.is_finished_prev) {
      let passed_tests = this.localStorageService.getUserParameter("passed_tests");
      passed_tests.push(this.activateRoute.snapshot.params['name']);
      this.localStorageService.setUserParameter("passed_tests", passed_tests);
    }

    // redirect to helper
  }

}
