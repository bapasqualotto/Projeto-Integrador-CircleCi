import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-andamento',
  templateUrl: './andamento.page.html',
  styleUrls: ['./andamento.page.scss'],
})
export class AndamentoPage implements OnInit {
  allservicos: any;

  constructor(    public db: AngularFireDatabase,
    private crudService: CrudService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getmyService();
  }

  getmyService(){

    this.crudService.read_EntregadorCliente().subscribe(data => {
   
      this.allservicos = data.map(e => {
          return {
            Desc: e.payload.doc.data()['Desc'],
            Dest: e.payload.doc.data()['Dest'],
            Ori: e.payload.doc.data()['Ori'],
            idEntre: e.payload.doc.data()['idEntre'],
            idAtual: this.authService.getId(),
            id: e.payload.doc.id
          };
        
       
      })
      console.log("CONSOLE: "+this.allservicos);

    });

  }

  deleteServico(itemObjeto, colecao){
    this.crudService.delete(itemObjeto.Id, colecao);

  }

}
