import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../shared/interfaces';
import {PostsService} from '../../shared/components/posts.service';
import {AlertService} from '../shared/service/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor(private postsService: PostsService, private alertService: AlertService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('',[Validators.required]),
      author: new FormControl('', [Validators.required]),
      text: new FormControl('', Validators.required)
    })
  }

  submit() {
    if(this.form.invalid){
      return
    }
    const post: Post = {
      title: this.form.get('title').value,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    }
    this.postsService.create(post).subscribe((res) => {
      this.alertService.success('Success')
      this.form.reset();
    });
  }
}
