import { ResultMessage } from './../model/result-message.model';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-message-result',
  templateUrl: './message-result.component.html',
  styleUrls: ['./message-result.component.scss'],
})
export class MessageResultComponent implements OnInit {

  @Input() messages: ResultMessage[] = [];

  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  onDismiss() {
    this.popoverController.dismiss();
  }

}
