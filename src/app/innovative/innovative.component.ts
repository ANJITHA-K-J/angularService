import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info_service';

@Component({
  selector: 'app-innovative',
  templateUrl: './innovative.component.html',
  styleUrls: ['./innovative.component.css']
})
export class InnovativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Innovative"
  click(){
    const service = new MyService();
    service.onClickBtn(this.title);
  }
}
