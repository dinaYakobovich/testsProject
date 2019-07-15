import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.css']
})
export class TeacherSettingsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
 // @ViewChild('block') block:ElementRef;
  addComponent(){
    

// addComponent() {
//   block.nativeElement.insertAdjacentHTML('beforeend', '<div></div>');
// }
  }
}
