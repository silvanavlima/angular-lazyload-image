import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  images = [
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+9',
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+8',
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+7',
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+6',
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+5',
    'https://dummyimage.com/600x400/000/fff&text=imagem+fake+4'
  ];
  img = this.images[0];

  constructor() { }

  ngOnInit() {
  }

}
