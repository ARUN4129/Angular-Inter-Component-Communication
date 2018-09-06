import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent {
/*  
    THIS IS COMPOLASORY cause If we want to access Data Value 
    It Should be Declaired as Public  
*/

  @Input() Data   // This is for Accepting something from Somewere
  //    i.e. Parrent to child

  @Output() MyData = new EventEmitter();  //  This is for Sending something to somewere
  //    i.e. Child to Parrent

  SendData()
  {
    //  This is the function which is used to send the data by using event.
      this.MyData.emit("Hello This is Child Message...!");
  }

}
