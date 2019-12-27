import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MariamService } from '../service/mariam.service';

@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent implements OnInit {
  total: any;
  current_point: any;
  last_questions: any;
  quest_id: any;

  constructor(private router:Router, private route: ActivatedRoute, private mariamService: MariamService) {
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
