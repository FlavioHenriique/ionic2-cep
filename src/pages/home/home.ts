import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface local {
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  estado: string,
  cep: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  local: local = {
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    cep: ""
  };
  constructor(public http: HttpClient, alert: AlertController) { }

  buscaCEP() {
    

    let url = "https://viacep.com.br/ws/" + this.local.cep + "/json/";
    this.http.get(url, { responseType: 'text' }).subscribe(res => {
      
      let json = JSON.parse(res);
      this.local = json;
    });

  }

}
