import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment'
})
export class CommentPipe implements PipeTransform {

  transform(commentNum: number): string {
    if (commentNum > 0) {
      const st = commentNum === 1 ? 'comment' : 'comments';
      return `${commentNum} ${st}`;
    }

    return 'discuss';
  }

}
