import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Eintrag} from "../../services/eintrag";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-sub-form',
  templateUrl: './create-sub-form.component.html',
  styleUrls: ['./create-sub-form.component.css']
})
export class CreateSubFormComponent implements OnInit {

  @Input() eintrag: Eintrag;
  @Output() saveSub: EventEmitter<Eintrag> = new EventEmitter<Eintrag>();

  createSubForm: FormGroup;

  private eintragId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.eintragId = params.eintragId);

    this.createSubForm = new FormGroup({
      titel: new FormControl(''),
      text: new FormControl(''),
      parentId: new FormControl(this.eintragId)
    });
  }

  doSaveSubEintrag() {
    this.saveSub.emit(this.createSubForm.value);
    console.log(this.createSubForm.value);

    this.createSubForm = new FormGroup({
      titel: new FormControl(''),
      text: new FormControl(''),
      parentId: new FormControl(this.eintragId),
    });

  }

}
