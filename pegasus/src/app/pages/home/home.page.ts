import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;

  constructor( private authService: AuthService,  private router: Router) { }

  ngOnInit() {
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
  

}
