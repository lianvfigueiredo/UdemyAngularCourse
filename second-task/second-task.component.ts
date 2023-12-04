import { Component } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent {
  userName = "";
  sentence = `The username is ${this.userName}`
  // allowButtonToBeClicked = true

  onUpdateInput(){
    this.sentence = `The username is ${this.userName}`;
  }
  onButtonClicked(){
    this.userName = ""
  }
}
