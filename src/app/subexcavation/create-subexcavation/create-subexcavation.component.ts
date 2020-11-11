import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubexcavationModel } from '../subexcavation-model';
import { SubexcavationService } from '../subexcavation.service';

@Component({
  selector: 'app-create-subexcavation',
  templateUrl: './create-subexcavation.component.html',
  styleUrls: ['./create-subexcavation.component.css']
})
export class CreateSubexcavationComponent implements OnInit {
  createSubexcavationForm: FormGroup;
  subexcavationModel: SubexcavationModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private subexcavationService: SubexcavationService) {
    this.createSubexcavationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.subexcavationModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubexcavation() {
    this.subexcavationModel.name = this.createSubexcavationForm.get('title').value;
    this.subexcavationModel.description = this.createSubexcavationForm.get('description').value;
    this.subexcavationService.createSubexcavation(this.subexcavationModel).subscribe(data => {
      this.router.navigateByUrl('/list-subexcavations');
    }, error => {
      throwError(error);
    })
  }
}