import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Entrega } from 'src/app/interfaces/entrega';
import { ToastController} from '@ionic/angular';


@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})



export class EntregaPage implements OnInit {
  [x: string]: any;
  public entregaData: Entrega = {};

  constructor(
    private crudService: CrudService,
    private toastController: ToastController
    ) {}

  ngOnInit() {
  }

  createEntrega(){


    this.crudService.create_NewDelivery(this.entregaData).then(resp => {
        console.log("Testando Bottão")
        this.presentToast("Criado!");

        
      })
        .catch(error => {
          console.log(error);
          this.presentToast(error);
        });
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}