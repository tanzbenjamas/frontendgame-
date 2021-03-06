import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MariamService } from '../service/mariam.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary: any = 0;
  cookie: any;

  constructor(private router:Router, private route: ActivatedRoute, private mariamService: MariamService, private cookieService: CookieService) { 
    this.cookie = this.cookieService.getAll();
    this.summary = localStorage.getItem("current_point");

    //  play sound background. 
    this.playAudioSummary();
  }

  ngOnInit() {
    this.summary = localStorage.getItem("current_point");
    // console.log("summary: ", this.summary);
    this.recordSummary();
  }

  recordSummary(){
    let cookie = this.getGAUID(this.cookie._ga);

    let total = {
      "user_id": cookie[2],
      "user_score": this.summary
    };

    this.mariamService.postScore(total).subscribe(data => {
      //console.log("data:", data);
    });
  }

  getGAUID(cookie) {
    var cookie_id = cookie.split(".");
    return cookie_id;
  }

  reloadQuestion(){
    let re_point = "0";
    localStorage.setItem("current_point", re_point);
    this.router.navigate(["/intro"]);
  }

  playAudioSummary(){
    let audio = new Audio();
    audio.src = "assets/sound/audience-clapping.mp3";
    audio.load();
    audio.play();
  }
}
