import { Component, OnInit } from '@angular/core';
import {EintragService} from "../../services/eintrag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public createSuccessful: boolean = false;

  constructor(
    private eintragService: EintragService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleCreateEintrag($event) {
    this.eintragService.createEintrag($event).subscribe(result => {
      this.createSuccessful = true;
      this.router.navigate(["/"]);
    });
    this.createSuccessful = false;
  }

}
