import { Component, OnInit } from '@angular/core';

declare var window:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  formModalPhoto:any;
  formModalSend:any;

  ngOnInit(): void{
    this.formModalPhoto = new window.bootstrap.Modal(
      document.getElementById('myModal')
      
    )
    this.formModalSend = new window.bootstrap.Modal(
      document.getElementById('myModalSend')
    )
  }

  openModalPhoto(){
    this.formModalPhoto.show()
  }
  closeModalPhoto(){
    this.formModalPhoto.hide()
  }

  openModalSend(){
    this.formModalSend.show()
  }
  closeModalSend(){
    this.formModalSend.hide()
  }
}
