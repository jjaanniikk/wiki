import { Component, OnInit } from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {ActivatedRoute, Router} from "@angular/router";
import {EintragService} from "../../services/eintrag.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sub-eintrag',
  templateUrl: './sub-eintrag.component.html',
  styleUrls: ['./sub-eintrag.component.css']
})
export class SubEintragComponent implements OnInit {

  private subEintragId: number;
  public eintrag: Eintrag;

  constructor(
    private route: ActivatedRoute,
    private eintragService: EintragService,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.subEintragId = params.subEintragId);
    this.getSubEintragById(this.subEintragId);
  }

  getSubEintragById(subEintragId: number) {
    this.eintragService.getEintragById(this.subEintragId).subscribe((eintrag) => {
      this.eintrag = eintrag;
    }, (error) => {
      console.log("Du hast ein Problem")
    });
  }
  doUpdateSub(eintrag: Eintrag) {
    this.eintragService.updateEintrag(eintrag).subscribe(result => {
    this.location.back();

    });
  }



}
