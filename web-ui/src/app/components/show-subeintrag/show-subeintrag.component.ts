import {Component, Input, OnInit} from '@angular/core';
import {Eintrag} from "../../services/eintrag";

@Component({
  selector: 'app-show-subeintrag',
  templateUrl: './show-subeintrag.component.html',
  styleUrls: ['./show-subeintrag.component.css']
})
export class ShowSubeintragComponent implements OnInit {

  @Input() eintrag: Eintrag;

  constructor() { }

  ngOnInit() {
  }

}
