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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private service: RegistroServices, private http: HttpClient) { }
  username = '';
  password = '';
  visible = false;
  crendenciais!: any;

  realizarLogin() {
    this.service.login({ email: this.username, senha: this.password })
      .subscribe((dados = any[]) => {
        if (dados) {
          console.log(dados)
          this.crendenciais = dados
          if (this.crendenciais.status == "ok") {
            console.log("login efetuado")
            console.log(this.crendenciais)
            localStorage.clear();
            localStorage.setItem('usuario', this.username);
            let name = localStorage.getItem('usuario');
            this.router.navigate(['/dados']);
          }
          else if (this.crendenciais.status == "erro") {
            console.log("login não efetuado")
            console.log(this.crendenciais)
            console.log(this.crendenciais.nome)
            this.username = ""
            this.password = ""
            this.visible = true;
          }
        }
      })
  }

}
