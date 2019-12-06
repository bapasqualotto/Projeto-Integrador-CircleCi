import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/database';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-realizadas',
  templateUrl: './realizadas.page.html',
  styleUrls: ['./realizadas.page.scss'],
})
export class RealizadasPage implements OnInit {
  servicos: any;
  delivery: any;
  constructor(    public db: AngularFireDatabase,
    private crudService: CrudService) { }

  ngOnInit() {

  this.allServices();
  this.allDelivery();
  }

  allServices(){
    console.log("Testando Botão")
    
      this.crudService.read_services().subscribe(data => {
   
        this.servicos = data.map(e => {
          return {
            Desc: e.payload.doc.data()['descricao'],
            Ori: e.payload.doc.data()['origem'],
          };
        })
        console.log(this.servicos);
   
      });

  }

    allDelivery(){
    console.log("Testando Botão")
    
      this.crudService.read_delivery().subscribe(data => {
   
        this.delivery = data.map(e => {
          return {
            Desc: e.payload.doc.data()['descricao'],
            Dest: e.payload.doc.data()['destino'],
            Ori: e.payload.doc.data()['origem']
          };
        })
        console.log(this.delivery);
   
      });

  }

}
