import { Component } from '@angular/core';

/**
 * Componente ProfileComponent
 * 
 * Este componente representa la vista de perfil de un usuario. Permite la navegación
 * entre diferentes secciones dentro del perfil, simulando la funcionalidad de cambio de sección.
 */
@Component({
  selector: 'app-profile', // Selector utilizado para insertar el componente en el HTML
  templateUrl: './profile.component.html', // Archivo de template asociado al componente
  styleUrls: ['./profile.component.css']   // Estilos aplicados al componente
})
export class ProfileComponent {

  /**
   * Navega a una sección específica del perfil.
   * 
   * @param section - Nombre de la sección a la que se desea navegar
   * 
   * Este método simula la navegación hacia una sección particular del perfil.
   * Por ejemplo, podría usarse para mostrar contenido dinámico o hacer una
   * navegación interna dentro del perfil.
   */
  goToSection(section: string) {
    console.log(`Navegando a la sección: ${section}`);
    // Aquí podrías implementar una navegación real o mostrar contenido dinámico
  }
}
