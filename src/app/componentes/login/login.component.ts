import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  username: any;
  userpassword: any;
  formIncorrecto: boolean;
  token: any;
  //miFormulario : any;
  //mensaje: any;

  constructor(private loginService: LoginService) {

    this.username = '';
    this.userpassword = '';
    this.formIncorrecto = false;
    //this.mensaje = "";



  }
  miFormulario = new FormGroup({
    usernameForm : new FormControl('', Validators.required),
    userpasswordForm : new FormControl('', Validators.required),

  });

  ngOnInit(): void {
  }

  enviar() {
    if(this.username == '' || this.userpassword == '') {
     console.log('faltan datos')
    }else {
      const user = {
        email: this.username,
        password: this.userpassword
      }
      this.loginService.postLogin(user).subscribe(
        res=>{
          this.token = res
          localStorage.setItem('token', this.token.token)
          this.mensaje('success','Bienvenido','Que lo disfrute')
        },
        err=>{
          console.log(err)
        }
      )

    }
    }

    mensaje(icono: any, titulo: string, texto: string){
      Swal.fire({
      icon: icono,
      title: titulo,
      text: texto,
      })

    }

}


//}
//}
