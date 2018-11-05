import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../../shared/models/comment';

@Component({
  selector: 'hn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  collapse: boolean;

  ngOnInit() {
    this.collapse = false;
  }

}
