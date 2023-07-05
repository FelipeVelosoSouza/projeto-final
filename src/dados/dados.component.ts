import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, CardModule, InputTextModule, PasswordModule, ButtonModule, FormsModule, DialogModule],
    templateUrl: './dados.component.html',
    styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit(
    allTodos ?: any[];
    newTodo!: any;
    user!: any;
    allnotes!; any;
    title!: string;
    description!: string;
    status!: string;
    dueDate!: string;
    statuses!: any;
    initdate!: string;
    constructor(private localStorageService: localStorageService, private router: Router, private service: RegistroService, private http: HttpClient)

    ngOninit() {
        this.user = localStorage.getItem('usuario');
this.get_allNotes(this.user)
    }
addTodo(){
    console.log(this.user)
    this.newTodo = {
        titulo: this.title,
        descricao: this.description,
        status: this.status,
        datainicial: this.initdate,
        previsao: this.dueDate,
        dono: localStorage.getItem('usuario')
    };
}
get_allNotes(user: any){
    this.service.allnotes({ email: user })
        .subscribe({ dados: any[] } => {
            if(dados) {
                this.allTodos = dados;
                console.log(this.allTodos)
                if (this.statuses.status == 'atualizado') {
                    console.log("ok")
                    console.log(this.status)
                }
                else if (this.statuses.status == "erro") {
                    console.log("erro")
                    console.log(this.status)
                }
            }
        })
}
 criarnota(){
   this.service.insert( this.newTodo)
   .subscribe((dados: any[])=> {
     if (dados) {
       console.log(dados)
       this.statuses = dados;
       if(this.statuses.status == " atualizado"){
         console.log("cadastro efetuado")
         console.log(this.status)
       }
       else if(this.statuses.status == "erro"){
         console.log("cadastro não efetuado")
         console.log(this.status)
       }
     }
   })
 }