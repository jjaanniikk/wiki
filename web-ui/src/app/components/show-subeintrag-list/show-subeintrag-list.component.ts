import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-subeintrag-list',
  templateUrl: './show-subeintrag-list.component.html',
  styleUrls: ['./show-subeintrag-list.component.css']
})
export class ShowSubeintragListComponent implements OnInit {

  @Input() eintraege: Array<Eintrag>;
  @Output() viewSubEintrag = new EventEmitter<number>();

  private id: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {

  }

  onViewSubEintrag($event) {
    this.viewSubEintrag.emit($event.id)

  }

}
