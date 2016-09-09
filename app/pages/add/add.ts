import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add/add.html',
})
export class AddPage {

  public todoList: Array<string>;
  public todoItem: string;

  constructor(private navCtrl: NavController) {
    this.todoList = JSON.parse(localStorage.getItem('todos'));
    if (!this.todoList) {
      this.todoList = [];
    }
    this.todoItem = '';
  }

  save() {
    if (this.todoItem !== '') {
      this.todoList.push(this.todoItem);
      localStorage.setItem('todos',
        JSON.stringify(this.todoList));
      this.navCtrl.pop();
    }
  }
}
