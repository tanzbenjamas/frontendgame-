import { Component, OnInit } from '@angular/core';
import { MariamService } from '../service/mariam.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mariamgame1',
  templateUrl: './mariamgame1.component.html',
  styleUrls: ['./mariamgame1.component.css']
})
export class Mariamgame1Component implements OnInit {
  [x: string]: any;
  chioce: Array<any> 
  currentQuestion: any = 0
  currentAnswer : any = ""
  showNext: any = false
  disabled = true;

  select = '';
  decrition = '';
  views:any = {
    chioce:null, 
  }

//  questions: Array<any> = [
//   {
//     id: '1',
//     answer: '2',
//     question: 'Why 1 ?',
//     choice_one: 'A',
//     choice_two: 'B',
//     choice_three: 'C',
// },
//   {
//     id: '2',
//     answer: '2',
//     question: 'Why 2?',
//     choice_one: 'A',
//     choice_two: 'B',
//     choice_three: 'C',
// },
//  {
//     id: '3',
//     answer: '1',
//     question: 'Why 3?',
//     choice_one: 'A',
//     choice_two: 'B',
//     choice_three: 'C',
// }
// ,
// {
//   id: '4',
//   answer: '2',
//   question: 'Why 4?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '5',
//   answer: '2',
//   question: 'Why 5?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '6',
//   answer: '2',
//   question: 'Why 6?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '7',
//   answer: '2',
//   question: 'Why 7?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '8',
//   answer: '2',
//   question: 'Why 8?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '9',
//   answer: '2',
//   question: 'Why 9?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ,
// {
//   id: '10',
//   answer: '2',
//   question: 'Why 10?',
//   choice_one: 'A',
//   choice_two: 'B',
//   choice_three: 'C',
// }
// ];
  
  constructor(private route: ActivatedRoute, private mariamService: MariamService, private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.mariamService.getQuestion().subscribe(data => {
      this.questions = data;
    });

    this.route.params.subscribe(params => {
      let quest_id = params['quest_id'];
      if(quest_id){
        this.currentQuestion = quest_id;
      }
    });
  }

answer(correct, answer){
  // console.log("correct",correct);
  // console.log("answer",answer);
  
  if(correct === answer){
    this.router.navigate(["/correct", this.currentQuestion]);
  }else {
    this.router.navigate(["/wrong", this.currentQuestion]);
  }

  // if(this.currentQuestion == 9){
  //   this.showNext = false;
  // }{
  //   this.showNext = true;
  // }
}


// ด้านล่างไม่ได้ใช้
question(v){
  console.log("v",v)
  if(v === this.questions[this.currentQuestion].question){
  }
}

next(){
  if(this.currentQuestion<this.questions.length){
    this.currentQuestion ++
  }
   
   this.currentAnswer = "";
    console.log("next")
    this.showNext = false
 }

save(){
  this.httpClient.post('http://localhost:8080/chioce/' ,{})
   .subscribe(
     data => {
        this.chioce == this.questions;
        console.log('PUT Request is successful', data);
        this.resetsave();
      }
   );
  }

  resetsave(){
    console.log(this.answer);
    console.log(this.question);
  }
}
