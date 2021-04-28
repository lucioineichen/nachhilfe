import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
})
export class WriteComponent implements OnInit {
  @Output() onSendText = new EventEmitter<string>();

  text = new FormControl('');

  constructor() {}

  onEnterClicked() {
    this.onSendText.emit(this.text.value);
    this.text.setValue('');
  }

  ngOnInit() {}
}
