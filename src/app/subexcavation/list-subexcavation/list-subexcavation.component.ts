import { Component, OnInit } from '@angular/core';
import { SubexcavationService } from '../subexcavation.service';
import { throwError } from 'rxjs';
import { SubexcavationModel } from '../subexcavation-response';


@Component({
  selector: 'app-list-subexcavation',
  templateUrl: './list-subexcavation.component.html',
  styleUrls: ['./list-subexcavation.component.css']
})
export class ListSubexcavationComponent implements OnInit {

  subexcavation: Array<SubexcavationModel>;
  constructor(private subexcavationervice: SubexcavationService) { }

  ngOnInit() {
    this.subexcavationervice.getAllSubexcavations().subscribe(data => {
      this.subexcavation = data;
    }, error => {
      throwError(error);
    })
  }
}