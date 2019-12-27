import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MariamService } from '../service/mariam.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {
  total: any;
  current_point: any;
  last_questions: any;
  question: any;
  quest_id: any;
  safeURL: any;
  checklink: any;

  constructor(private router:Router, private route: ActivatedRoute, private mariamService: MariamService, private sanitizer: DomSanitizer) {
    // get index of question.
    this.route.params.subscribe(params => {
      this.quest_id = parseInt(params['quest_id']);
   });
  }

  ngOnInit() {
    // call services for check length of data.
    this.mariamService.getQuestion().subscribe(data => {
      this.question = data;  
      this.last_questions = data.length;

      this.checklink = this.question[this.quest_id].link;
      if(this.checklink){
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.question[this.quest_id].link);
      }
    });


    this.current_point = localStorage.getItem("current_point");
    if(this.current_point){
      this.total =  parseInt(this.current_point)+1;
      localStorage.setItem("current_point", this.total);
    }else{
      this.total = 1;
      localStorage.setItem("current_point", this.total);
    }
    
  }

  nextQuestion(){
    if(this.last_questions == (this.quest_id+1)){
      this.router.navigate(["/summary"]);
    }else{
      var quest_id = this.quest_id+1;
      this.router.navigate(["/mariamgame", quest_id]);
    }
  }

  reloadQuestion(){
    let re_point = "0";
    localStorage.setItem("current_point", re_point);
    this.router.navigate(["/intro"]); //go to first question & re-point to 0.
  }
}
