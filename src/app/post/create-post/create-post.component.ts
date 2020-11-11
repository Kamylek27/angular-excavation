import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';
import { SubexcavationService } from 'src/app/subexcavation/subexcavation.service';
import { CreatePostPayload } from './create-post-payload';
import { throwError } from 'rxjs';
import { SubexcavationModel } from 'src/app/subexcavation/subexcavation-response';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subexcavations: Array<SubexcavationModel>;

  constructor(private router: Router, private postService: PostService,
    private subexcavationService: SubexcavationService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subexcavationName: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subexcavationName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subexcavationService.getAllSubexcavations().subscribe((data) => {
      this.subexcavations = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subexcavationName = this.createPostForm.get('subexcavationName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}