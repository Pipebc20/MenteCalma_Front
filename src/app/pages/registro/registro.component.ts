import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  clave: string = '';
  confirmarClave: string = '';

  registrarse(): void {
    if (!this.nombre || !this.correo || !this.clave || !this.confirmarClave) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (this.clave !== this.confirmarClave) {
      alert('Las contraseñas no coinciden');
      return;
    }

    alert('Registro de prueba exitoso');
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Clave:', this.clave);
  }
}
