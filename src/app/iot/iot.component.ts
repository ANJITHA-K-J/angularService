import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info_service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="IoT"
  click(){
    const service = new MyService();
    service.onClickBtn(this.title);
  }

}
