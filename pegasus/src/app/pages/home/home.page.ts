import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, Platform, LoadingController } from '@ionic/angular';


import { AngularFireDatabase } from '@angular/fire/database';
import { CrudService } from 'src/app/services/crud.service';
import { Environment, GoogleMap, GoogleMaps } from '@ionic-native/google-maps';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  @ViewChild('map', {static:true}) mapElement: any;
  [x: string]: any;
  students: any;
  private loading: any;
  private map: GoogleMap;

  constructor( private authService: AuthService,
    private router: Router,
    private afm: AngularFireModule,
    public afs: AngularFirestore,
    public db: AngularFireDatabase,
    private crudService: CrudService,
    public toastController: ToastController,
    private platform: Platform,
    private loadingCtrl: LoadingController) {

      this.getName(); 

    }

    ngOnInit() {
      this.mapElement = this.mapElement.nativeElement;
      this.mapElement.style.width = this.platform.width() + 'px';
      this.mapElement.style.height = this.platform.height() + 'px';

      this.loadMap();
      /*
      this.crudService.read_Students().subscribe(data => {
   
        this.students = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Email: e.payload.doc.data()['email'],
            Name: e.payload.doc.data()['name'],
            Password: e.payload.doc.data()['password'],
          };
        })
        console.log(this.students);
   
      });*/
    }

    async loadMap(){
      this.loading = await this.loadingCtrl.create({message: "Por favor, aguarde..."});
      await this.loading.present();
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBEtWOw4trJl1wgW0YIko62tn3FdYIjCHQ',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBEtWOw4trJl1wgW0YIko62tn3FdYIjCHQ'
      });

      this.map = GoogleMaps.create(this.mapElement);
    }

  async logout() {
    try {
      await this.authService.logout().then(() => {
        this.presentToast("Voce saiu");
        this.router.navigate(['login']);
      });
    } catch (error) {
      this.presentToast(error.message);
    }
  }

  getEmail(){
    return this.authService.getEmail();
  }

  getName(){
    const idUser = this.authService.getId();

     this.crudService.read_login_id(idUser).subscribe(data => {
   console.log();
      this.students = data;
      console.log(this.students);
      //return this.students.name;
 
    });
  }


  createTest(){
    console.log("Testando Bottão")
      let record = {};
      record['origem'] = "Manuel Mendes de Camargo";//this.studentName;
      record['destino'] = "Av Brasil";//this.studentAge;
      record['descricao'] = "Rapido Pra pega!";//this.studentAddress;

      this.crudService.create_NewDelivery(record).then(resp => {
        this.origem = "";
        this.destino = undefined;
        this.descricao = "";
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
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
