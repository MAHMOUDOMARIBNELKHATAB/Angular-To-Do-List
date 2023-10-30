import { Component ,  EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Output() dataEvent = new EventEmitter<string>();

  newTask : string='';
  addtask(){
    if (this.newTask!=""){
      const data =this.newTask;
      this.dataEvent.emit(data);
    }
    this.newTask = ""


  }

}
