import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  mensaje: string;
  formIncorrecto: boolean;

  constructor() {
    this.usuario = '';
    this.password = '';
    this.mensaje = '';
    this.formIncorrecto = false;

  }

  ngOnInit(): void {
  }

  enviado() {
    if(this.usuario == '' || this.password == '') {
      this.formIncorrecto = true;
      this.mensaje = 'Usuario o password incorrecto';
      return;
    }else {
      this.usuario === 'challenge@alkemy.com' && this.password === 'react';
      this.mensaje = 'Bienvenido';
      this.formIncorrecto = false;
    }
    console.log(this.usuario)
    console.log(this.password)

  }
}
