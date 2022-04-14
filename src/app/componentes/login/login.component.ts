import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario: any;
  password: any;

  formIncorrecto: boolean;
  token: any

  constructor(private loginService: LoginService) {
    this.usuario = '';
    this.password = '';

    this.formIncorrecto = false;

  }

  ngOnInit(): void {
  }

  enviar() {
    if(this.usuario == '' || this.password == '') {
     console.log('faltan datos')
    }else {
      const user = {
        email: this.usuario,
        password: this.password
      }
      this.loginService.postLogin(user).subscribe(
        res=>{
          this.token = res
          localStorage.setItem('token', this.token.token)
          this.mensaje('success','Bienvenido','Que lo disfrute')
        },
        err=>{
          //console.log(err)
        }
      )

    }
    }

    mensaje(icono: any, titulo: string, texto:string){
      Swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
      })
    }

}

