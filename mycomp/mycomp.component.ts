import { Component } from '@angular/core';

@Component({
  selector: 'comp',
  template: `<app-servers></app-servers>
  <p>it's working</p>`,
  styles: [`
  p{
    background-color: red
  }`]
})
export class MycompComponent {

}
