import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  visible = true;
  logs = []
  i = 0;

  toogle(){
    this.visible == false ? this.visible = true : this.visible = false;
    this.logs.push(this.i)
    console.log(this.logs)
    this.i++

  }
  getColor(log){
    // console.log(this.logs[this.i-1])
    // console.log(this.i-1)
    return log >= 5 ? "blue" : null;
    
  }
}
