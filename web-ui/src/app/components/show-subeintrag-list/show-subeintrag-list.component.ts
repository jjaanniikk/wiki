import {Component, Input, OnInit} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-subeintrag-list',
  templateUrl: './show-subeintrag-list.component.html',
  styleUrls: ['./show-subeintrag-list.component.css']
})
export class ShowSubeintragListComponent implements OnInit {

  @Input() eintraege: Array<Eintrag>;

  private id: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {

  }



}
