import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/info_service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon"
  btnclick(){
    const service=new MyService();
    service.onClickBtn(this.title);
  }
}
