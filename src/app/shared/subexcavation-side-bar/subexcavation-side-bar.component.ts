import { Component, OnInit } from '@angular/core';
import { SubexcavationService } from 'src/app/subexcavation/subexcavation.service';
import { SubexcavationModel } from 'src/app/subexcavation/subexcavation-model';

@Component({
  selector: 'app-subexcavation-side-bar',
  templateUrl: './subexcavation-side-bar.component.html',
  styleUrls: ['./subexcavation-side-bar.component.css']
})
export class SubexcavationSideBarComponent implements OnInit {

  subexcavations: Array<SubexcavationModel> = [];
  displayViewAll: boolean;

  constructor(private subexcavationService: SubexcavationService) {
    this.subexcavationService.getAllSubexcavations().subscribe(data => {
      if (data.length > 3) {
        this.subexcavations = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subexcavations = data;
      }
    });
  }

  ngOnInit(): void {
  }
}
