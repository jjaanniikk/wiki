import { Component, OnInit } from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {ActivatedRoute, Router} from "@angular/router";
import {EintragService} from "../../services/eintrag.service";

@Component({
  selector: 'app-create-sub',
  templateUrl: './create-sub.component.html',
  styleUrls: ['./create-sub.component.css']
})
export class CreateSubComponent implements OnInit {

  private eintragId: number;
  public eintrag: Eintrag;

  constructor(
    private route: ActivatedRoute,
    private eintragService: EintragService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.eintragId = params.eintragId);
  }

  handelSaveSubEintrag($event) {
    console.log($event);
    this.eintragService.createEintrag($event).subscribe(result => {
      this.router.navigate(['/eintraege', this.eintragId]);
    });
  }


}
