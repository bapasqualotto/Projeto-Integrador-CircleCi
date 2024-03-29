import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Servico } from 'src/app/interfaces/servico';
import { ToastController} from '@ionic/angular';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {


   [x: string]: any;
  public servicoData: Servico = {};

  constructor(
    private crudService: CrudService,
    private toastController: ToastController
    ) {}

  ngOnInit() {}

  createServico(){
    console.log("Criando Serviço...")
    
    this.crudService.create_NewServico(this.servicoData).then(resp => {
      this.presentToast("Serviço Criado!");

      
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
