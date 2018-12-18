import {Component, OnInit} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {ActivatedRoute, Router} from "@angular/router";
import {EintragService} from "../../services/eintrag.service";

@Component({
  selector: 'app-eintrag',
  templateUrl: './eintrag.component.html',
  styleUrls: ['./eintrag.component.css']
})
export class EintragComponent implements OnInit {

  private eintragId: number;
  public eintrag: Eintrag;

  constructor(
    private route: ActivatedRoute,
    private eintragService: EintragService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.eintragId = params.eintragId);
    this.getEintragById(this.eintragId);
  }

  getEintragById(eintragId) {
    this.eintragService.getEintragById(eintragId).subscribe((eintrag) => {
      this.eintrag = eintrag;
      console.log(this.eintrag);
    }, (error) => {
      console.log("Text nicht gefunden")
    });
  }

  doUpdate(eintrag: Eintrag) {
    this.eintragService.updateEintrag(eintrag).subscribe(result => {
      console.log("hoolooo");
      this.router.navigate(["/eintraege"]);
    });
  }
}
