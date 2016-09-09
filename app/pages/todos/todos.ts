import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddPage } from '../add/add';

/*
  Generated class for the TodosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/todos/todos.html',
})
export class TodosPage {

  public todolist: Array<string>;

  constructor(private navCtrl: NavController) {

  }

  onPageDidEnter() {
    this.todolist = JSON.parse(localStorage.getItem('todos'));
    if (!this.todolist) {
      this.todolist = [];
    }
  }

  delete(index: number) {
    this.todolist.splice(index, 1);
    localStorage.setItem('todos',
      JSON.stringify(this.todolist));
  }

  add() {
    this.navCtrl.push(AddPage);
  }
}
