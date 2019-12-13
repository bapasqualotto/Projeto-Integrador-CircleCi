import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
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
  students: any;

  constructor(    public db: AngularFireDatabase,
    private crudService: CrudService,
    private authService: AuthService) { }

  ngOnInit() {

  this.allServices();
  this.allDelivery();
  }

  allServices(){
    
      this.crudService.read_services().subscribe(data => {
   
        this.servicos = data.map(e => {
          return {
            Desc: e.payload.doc.data()['descricao'],
            Ori: e.payload.doc.data()['origem'],
            Id: e.payload.doc.id,
            idEntre: this.authService.getId()
          };
        })
        console.log(this.servicos);
   
      });

  }

    allDelivery(){
    console.log("Buscando Todos os Deliverys e Servicos!")
    
      this.crudService.read_delivery().subscribe(data => {
   
        this.delivery = data.map(e => {
          return {
            Desc: e.payload.doc.data()['descricao'],
            Dest: e.payload.doc.data()['destino'],
            Ori: e.payload.doc.data()['origem'],
            Id: e.payload.doc.id,
            idEntre: this.authService.getId()
          };
        })
        console.log(this.delivery);
   
      });

  }
  
    
  aceitarEntrega(itemObjeto, colecao) {
        this.crudService.create(itemObjeto, "EntregadorCliente").then(resp => {
          console.log("Criado!");
          this.crudService.delete(itemObjeto.Id, colecao);
    
          
        })
          .catch(error => {
            console.log(error);;
          });
        console.log("DADO: "+itemObjeto.Id);
       
  
      }


}
