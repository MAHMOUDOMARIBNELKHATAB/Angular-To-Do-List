import { Component ,Input  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() dataFromParent !: string;

  tasks: Array<string> = [];

  ngOnChanges() {
    if (this.dataFromParent) {
      this.tasks.push(this.dataFromParent);
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    
  }
}
