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

  map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([28.644800, 77.216721], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([28.6, 77]).addTo(this.map)
      .bindPopup('Ionic 4 <br> Leaflet.')
      .openPopup();

    
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }




  [x: string]: any;
  public servicoData: Servico = {};

  constructor(
    private crudService: CrudService,
    private toastController: ToastController
    ) {}

  ngOnInit() {}

  createServico(){
    console.log("Testando Bottão")
    
    this.crudService.create_NewServico(this.servicoData).then(resp => {
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
