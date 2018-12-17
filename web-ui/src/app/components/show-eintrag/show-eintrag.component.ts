import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/index";
import {Eintrag} from "../../services/eintrag";

@Component({
  selector: 'app-show-eintrag',
  templateUrl: './show-eintrag.component.html',
  styleUrls: ['./show-eintrag.component.css']
})
export class ShowEintragComponent implements OnInit {

  @Input() eintrag: Eintrag;
  @Output() onSave: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();

  constructor() { }

  ngOnInit() {
    console.log("JASDmfjasdlnfdnalsd");
    console.log(this.eintrag);
  }

}
