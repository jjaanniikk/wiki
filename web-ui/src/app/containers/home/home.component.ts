import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EintragService} from "../../services/eintrag.service";
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
  ) { }

  ngOnInit() {
    this.eintragService.getEintraege().subscribe(result => {
      this.eintraege = result;
    }, error => {
      console.log('Mein Fehler', error);
    });
  }

}
