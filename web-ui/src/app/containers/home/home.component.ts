import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EintragService} from "../../services/eintrag.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Eintrag} from "../../services/eintrag";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eintraege: Eintrag[];
  private id: number;

  constructor(
    private eintragService: EintragService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {
    this.eintragService.getEintraege().subscribe(result => {
      this.eintraege = result;
    }, error => {
      console.log('Mein Fehler', error);
    });
  }

  handleViewEintrag($event) {
    this.router.navigate([$event.id], {relativeTo: this.route});
  }

  handleRemoveEintrag($event) {
    this.eintragService.deleteEintrag($event).subscribe(result => {
      this.eintragService.getEintraege().subscribe(result => {
        this.eintraege = result;
      });
    });
  }

}
