import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {EintragService} from "../../services/eintrag.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-eintrag-list',
  templateUrl: './show-eintrag-list.component.html',
  styleUrls: ['./show-eintrag-list.component.css']
})
export class ShowEintragListComponent implements OnInit {

  @Input() eintrag: Eintrag;
  @Output() view: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();
  @Output() remove: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();

  private id: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {

  }

  onViewEintrag(eintrag: Eintrag) {
    this.view.emit(eintrag);
  }

  onRemoveEintrag(eintrag: Eintrag) {
    this.remove.emit(eintrag);
  }

}
