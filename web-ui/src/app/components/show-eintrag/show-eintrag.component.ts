import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/index";
import {Eintrag} from "../../services/eintrag";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-eintrag',
  templateUrl: './show-eintrag.component.html',
  styleUrls: ['./show-eintrag.component.css']
})
export class ShowEintragComponent implements OnInit {
  @Input() eintrag: Eintrag;
  @Output() onSave: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();


  editForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.eintrag.id);

    this.editForm = new FormGroup({
      id: new FormControl(this.eintrag.id),
      titel: new FormControl(this.eintrag.titel),
      text: new FormControl(this.eintrag.text),
      parent_id: new FormControl(this.eintrag.parent_id),
    })
  }

  doSaveEintrag() {
    this.onSave.emit(this.editForm.value);
  }

}
