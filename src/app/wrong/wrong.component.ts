import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MariamService } from '../service/mariam.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent implements OnInit {
  total: any;
  current_point: any;
  last_questions: any;
  question: any;
  quest_id: any;
  safeURL: any;
  checklink: any;
  answer: any;

  constructor(private router:Router, private route: ActivatedRoute, private mariamService: MariamService, private sanitizer: DomSanitizer) {
    // get index of question.
    this.route.params.subscribe(params => {
      this.quest_id = parseInt(params['quest_id']);
   });

   //  play sound background when answer WRONG. 
   this.playAudioWrong();
  }

  ngOnInit() {
    // call services for check length of data.
    this.mariamService.getQuestion().subscribe(data => {
      this.question = data[this.quest_id];  

      this.question.choice.forEach(element => {
        if(this.question.q_ans == element.c_ans){
          this.answer = element.c_name;
        }
      });

      this.last_questions = data.length;
      this.checklink = this.question.link;
      if(this.checklink){
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.question.link);
      }
    });
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
    this.router.navigate(["/intro"]);
  }

  playAudioWrong(){
    let audio = new Audio();
    audio.src = "assets/sound/wrong-sound.mp3";
    audio.load();
    audio.play();
  }

}
