import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  closeResult: string;

  debleveImages = [
    {
      id: 1,
      title: 'DeBleve: Horizontal Drilling',
      url: '../assets/images/debleve_01.jpg',
      description: 'Our product can drill horizontally.'
    },
    {
      id: 2,
      title: 'DeBleve: Vertical Drilling',
      url: '../assets/images/debleve_02.jpg',
      description: 'Our product can drill vertically as well.'
    },
    {
      id: 3,
      title: 'DeBleve: Drill Removed',
      url: '../assets/images/debleve_04.jpg',
      description: 'The drill can be detached and stored for easy maintenance and travel.'
    }
  ];

  openLg(content, data) {
    this.modalService.open(content, { size: 'lg' });
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}
