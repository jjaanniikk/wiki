import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Eintrag} from "../../services/eintrag";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Output() create: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();

  createForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm = new FormGroup({
      titel: new FormControl(''),
      text: new FormControl('')
    });
  }

  doCreateEintrag() {
    console.log(this.createForm.value);
    this.create.emit(this.createForm.value);
    this.createForm = new FormGroup({
      titel: new FormControl(''),
      text: new FormControl(''),
    });
  }

}
