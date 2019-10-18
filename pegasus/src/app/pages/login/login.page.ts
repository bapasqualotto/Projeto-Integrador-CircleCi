import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController} from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides,{static: false}) slides: IonSlides;
  public wavesPosition: number = 0;
  public wavesDifference: number = 80;

  public userLogin: User = {};
  public userRegister: User = {};

    //
  private loading: any;

  constructor(
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private afs: AngularFirestore
    ){ }

  ngOnInit(){

  }

  segmentChanged(event: any){
    if(event.detail.value == "login"){
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
      
    }else{
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }


  async register(){
    await this.presentLoading();
    try {
     const newUser = await this.authService.register(this.userRegister);
     this.presentToast("Você Registrou!");
      console.log("CKECH: "+this.userRegister.checkbox);
     await this.afs.collection('Users').doc(newUser.user.uid).set(this.userRegister);
     console.log(newUser);
    } catch (error) {
      console.log(error);
      let message: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "E-Mail ja esta sendo usado!";  
        break;

        case 'auth/invalid-email':
          message = "E-Mail invalido!";  
        break;
      }


      this.presentToast(message);
    } finally{
      
      this.loading.dismiss();

    }
    
   

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde ...'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
