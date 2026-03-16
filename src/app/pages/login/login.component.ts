import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo: string = '';
  clave: string = '';

  iniciarSesion(): void {
    if (!this.correo || !this.clave) {
      alert('Por favor completa todos los campos');
      return;
    }

    alert('Inicio de sesión de prueba');
    console.log('Correo:', this.correo);
    console.log('Clave:', this.clave);
  }
}
