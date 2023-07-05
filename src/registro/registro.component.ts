import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CardModule, InputTextModule, PasswordModule, ButtonModule, FormsModule, DialogModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nome!: string;
  login!: string;
  senha!: string;
  apelido!: string;
  idade!: 0;
  curso!: string;
  periodo!: 0;
  credenciais!: any;

  constructor(private router: Router, private service: RegistroService, private http: HttpClient) { }

  registrar() {
    this.service.registraruser({
      nome: this.nome,
      login: this.login,
      senha: this.senha,
      apelido: this.apelido,
      idade: this.idade,
      curso: this.curso,
      periodo: this.periodo
    })
      .subscribe((dados: any[]) => {
        if (dados) {
          console.log(dados)
          this.credenciais = dados
          if (this.credenciais.status == "atualizado") {
            console.log("cadastro efetuado")
            console.log(this.credenciais)
            this.router.navigate(['/home']);
          )
          else if (this.credenciais.status == "erro") {
      console.log("cadastro não efetuado")
      console.log(this.credenciais)
    }
  }
}
    }
  }
}
