import { Component, OnInit } from '@angular/core';
import {EintragService} from "../../services/eintrag.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Eintrag} from "../../services/eintrag";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public eintragId: number;
  public eintrag: Eintrag;
  public parentId: number;
  public createSuccessful: boolean = false;

  constructor(
    private eintragService: EintragService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.eintragId = params.eintragId);

    if (this.eintragId) {
      this.eintragService.getEintragById(this.eintragId).subscribe((eintrag: Eintrag) => {
        this.eintrag = eintrag;
      }, (error) => {
      });
    } /*else if (this.parentId) {
      this.textService.getTextById(this.parentId).subscribe((post: Post) => {
        this.post = post;
      }, (error) => {
      });
    }*/
  }

  ngOnInit() {
  }

  handleCreateEintrag($event) {
    this.eintragService.createEintrag($event).subscribe(result => {
      this.createSuccessful = true;
      this.router.navigate(['/']);
    });
    this.createSuccessful = false;




    if (this.eintrag.id) {
      //update

    } else {
      this.eintragService.createEintrag($event).subscribe(result => {
        this.createSuccessful = true;
        this.router.navigate(['/']);
      });
      this.createSuccessful = false;
    }
  }

}
