import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';


import { AngularFireDatabase } from '@angular/fire/database';
import { CrudService } from 'src/app/services/crud.service';






@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  [x: string]: any;

  students: any;
  servicos: any;

  constructor( private authService: AuthService,
    private router: Router,
    private afm: AngularFireModule,
    public afs: AngularFirestore,
    public db: AngularFireDatabase,
    private crudService: CrudService,
    public toastController: ToastController) {

      this.getName(); 

    }

    ngOnInit() {
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

     this.crudService.read_Students_id(idUser).subscribe(data => {
   console.log();
      this.students = data;
      console.log(this.students);
      //return this.students.name;
 
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