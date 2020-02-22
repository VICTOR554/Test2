import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

 onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
    .create({keyboardClose: true, message: 'logging in.....'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/home/tabs/list-view');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const studentid = form.value.studentid;
    const password = form.value.password;
    console.log(studentid, password);
  }

}
