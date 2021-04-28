import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subjects',
})
export class SubjectsPipe implements PipeTransform {
  transform(_subjects: string[]): string {
    let subjects = 'Fächer: ' + _subjects[0];
    for (let i = 1; i < _subjects.length; i++) {
      subjects += ', ' + _subjects[i];
    }
    return subjects;
  }
}
