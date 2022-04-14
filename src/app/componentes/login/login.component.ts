import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario: any;
  password: any;
  mensaje: string;
  formIncorrecto: boolean;
  token: any

  constructor(private loginService: LoginService) {
    this.usuario = '';
    this.password = '';
    this.mensaje = '';
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
          console.log()
        },
        err=>{
          //console.log(err)
        }
      )


    }


}
}
