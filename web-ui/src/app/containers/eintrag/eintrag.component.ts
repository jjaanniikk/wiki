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
  public subEintraege: Array<Eintrag>;

  constructor(
    private route: ActivatedRoute,
    private eintragService: EintragService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.eintragId = params.eintragId);
    this.getEintragById(this.eintragId);
    this.getSubEintraege(this.eintragId);
  }

  getEintragById(eintragId) {
    this.eintragService.getEintragById(eintragId).subscribe((eintrag) => {
      this.eintrag = eintrag;

    }, (error) => {
      console.log("Text nicht gefunden")
    });
  }

  getSubEintraege(parentId: number) {
    this.eintragService.getSubEintraege(parentId).subscribe(
      (eintraege: Array<Eintrag>) => {
        this.subEintraege = eintraege;
      },
      (error) => {
        console.log("fehler" + this.subEintraege);
      }
    );
  }


  doUpdate(eintrag: Eintrag) {
    this.eintragService.updateEintrag(eintrag).subscribe(result => {

      this.router.navigate(["/eintraege"]);
    });
  }

  doViewSubEintrag($event) {
    this.router.navigate([$event], {relativeTo: this.route});
    console.log($event + "wwwwwwwwww");
  }

  handleRemoveSubEintrag($event) {
    this.eintragService.deleteEintrag($event).subscribe(result => {
      this.eintragService.getSubEintraege(this.eintragId).subscribe(result => {
        this.subEintraege = result;
      });
    });
  }
}
