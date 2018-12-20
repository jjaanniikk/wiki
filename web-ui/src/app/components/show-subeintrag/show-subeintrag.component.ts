import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-subeintrag',
  templateUrl: './show-subeintrag.component.html',
  styleUrls: ['./show-subeintrag.component.css']
})
export class ShowSubeintragComponent implements OnInit {

  @Input() eintrag: Eintrag;
  @Output() onSaveSub: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();

  editForm: FormGroup;

  constructor() { }

  ngOnInit() {

    console.log(this.eintrag);


    this.editForm = new FormGroup({
      id: new FormControl(this.eintrag.id),
      titel: new FormControl(this.eintrag.titel),
      text: new FormControl(this.eintrag.text),
      parentId: new FormControl(this.eintrag.parent_id),
    })
  }

  doSaveSubEintrag() {
    this.onSaveSub.emit(this.editForm.value);
  }


}
