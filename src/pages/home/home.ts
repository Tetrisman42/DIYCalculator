import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CustomFormsModule } from 'ng2-validation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parome: number;
  totaLiquide: number;

  gouttes: number;
  gouttesML: number;

  erreur: boolean = false;
  strResultat: string[] = ["", "", ""];

  constructor(public navCtrl: NavController, private CustForMod: CustomFormsModule, public toastCtrl: ToastController) {

  }

  private showGouttes()
  {
    if(this.parome < 50 && this.parome > 1 && this.totaLiquide < 1000 && this.totaLiquide > 1 )
    {
      var qArome = this.parome/100*this.totaLiquide;
      var nbGouttes = qArome*30;
      var liquideRestant = this.totaLiquide - qArome;
      this.strResultat[0] = "Résultat de votre composition finale : ";
      this.strResultat[1] = "Arôme : "+qArome+" mL soit "+nbGouttes+" gouttes. ";
      this.strResultat[2] = "Liquide : "+liquideRestant+" mL";
      this.erreur = false;
    }
    else
    {
      this.strResultat[0] = "";
      this.strResultat[1] = "";
      this.strResultat[2] = "";
      let toastError = this.toastCtrl.create({
        message: "Des champs sont manquants ou incorrects",
        duration: 2000,
        position: 'top'
      });
      toastError.present();
      this.erreur = true;
    }


  }


}
