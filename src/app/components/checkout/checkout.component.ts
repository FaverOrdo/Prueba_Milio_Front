import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * Componente CheckoutComponent
 * 
 * Este componente representa una ventana de checkout que permite al usuario
 * descargar un comprobante de pago y cerrar el modal. 
 * Utiliza Angular Material Dialog para gestionar el diálogo.
 */
@Component({
  selector: 'app-checkout', // Selector utilizado para insertar el componente en el HTML
  templateUrl: './checkout.component.html', // Archivo de template asociado al componente
  styleUrls: ['./checkout.component.css']   // Estilos aplicados al componente
})
export class CheckoutComponent {

  /**
   * Constructor de CheckoutComponent
   * @param dialogRef - Referencia al diálogo actual, permite controlar la apertura y cierre del modal
   */
  constructor(public dialogRef: MatDialogRef<CheckoutComponent>) {}

  /**
   * Cierra el modal de checkout.
   */
  closeModal() {
    this.dialogRef.close();
  }

  /**
   * Inicia el proceso de descarga del comprobante de pago y cierra el modal.
   * Nota: La lógica de descarga aún debe implementarse en detalle.
   */
  downloadReceipt() {
    // Lógica para descargar el comprobante
    this.closeModal();
  }
}
