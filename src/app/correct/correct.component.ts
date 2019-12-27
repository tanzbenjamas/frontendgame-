import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MariamService } from '../service/mariam.service';

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {
  total: any;
  current_point: any;
  last_questions: any;
  quest_id: any;

  constructor(private router:Router, private route: ActivatedRoute, private mariamService: MariamService ) {
    // call services for check length of data.
    this.mariamService.getQuestion().subscribe(data => {
      this.last_questions = data.length;
    });

    // get index of question.
    this.route.params.subscribe(params => {
      this.quest_id = parseInt(params['quest_id']);
   });
  }

  ngOnInit() {
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
      this.router.navigate(["/mariamgame1", quest_id]);
    }
  }

  reloadQuestion(){
    let re_point = "0";
    localStorage.setItem("current_point", re_point);
    this.router.navigate(["/mariamgame1", 0]); //go to first question & re-point to 0.
  }
}
