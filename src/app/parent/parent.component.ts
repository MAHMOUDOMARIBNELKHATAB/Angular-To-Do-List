import { Component ,Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  dataFromChild1 !: string;

  receiveDataFromChild(data: string) {
 
    this.dataFromChild1 = data;
  }


}
