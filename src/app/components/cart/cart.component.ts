import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog para el modal
import { CheckoutComponent } from '../checkout/checkout.component';


/**
 * Componente que representa el diálogo del carrito de compras.
 * Muestra los artículos en el carrito del usuario, permite ajustar las cantidades,
 * calcula el precio total y los impuestos, y proporciona opciones para cerrar el diálogo
 * o agregar más productos.
 */
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para las directivas básicas de Angular
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // Cambia a true para mostrar el desenfoque inicialmente o al abrir el modal
  showBlurOverlay: boolean = true; 

  // Arreglo para almacenar los artículos en el carrito
  cartItems: any[] = [];

  /**
   * Constructor del CartComponent.
   * 
   * @param data - Datos inyectados que contienen los artículos añadidos al carrito. Se espera que sea un arreglo de objetos de artículo.
   * @param dialogRef - Referencia al diálogo que contiene este componente, usada para cerrar el diálogo programáticamente.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CartComponent>,
    private location: Location,
    private dialog: MatDialog // Anexado para abrir el modal de checkout
  ) {
    this.cartItems = data.map((item: any) => ({ ...item, quantity: 1 }));
  }

  /**
   * Calcula el número total de artículos en el carrito sumando las cantidades de cada artículo.
   * 
   * @returns La cantidad total de artículos en el carrito.
   */
  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Getter para calcular el precio total de todos los artículos en el carrito, basado en su cantidad y precio.
   * 
   * @returns El precio total de los artículos en el carrito.
   */
  get totalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  /**
   * Calcula los impuestos basados en el precio total de los artículos en el carrito.
   * 
   * @returns El monto calculado de impuestos (10% del precio total).
   */
  getTaxes() {
    const taxRate = 0.1; // Tasa de impuestos, por ejemplo, 10%
    return this.totalPrice * taxRate;
  }

  /**
   * Incrementa la cantidad de un artículo específico en el carrito.
   * 
   * @param index - El índice del artículo en el arreglo del carrito a incrementar.
   */
  incrementQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  /**
   * Decrementa la cantidad de un artículo específico en el carrito.
   * Si la cantidad llega a 1, al llamar a este método se eliminará el artículo del carrito.
   * 
   * @param index - El índice del artículo en el arreglo del carrito a decrementar.
   */
  decrementQuantity(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.removeItem(index);
    }
  }

  /**
   * Elimina completamente un artículo del carrito.
   * 
   * @param index - El índice del artículo en el arreglo del carrito a eliminar.
   */
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  /**
   * Cierra el diálogo del carrito, permitiendo que el usuario agregue más productos.
   * Este método típicamente activaría una redirección u otra acción de la interfaz de usuario fuera del carrito.
   */
  addMoreProducts() {
    this.dialogRef.close();
  }


  /**
   * Método para volver a la página anterior.
   * Utiliza el servicio `Location` de Angular para navegar hacia atrás en el historial del navegador.
   * Este método es llamado cuando el usuario hace clic en el botón de retroceso.
   */
  goBack() {
    this.dialogRef.close();
  }

  /**
   * Método para cerrar el modal del carrito.
   * Aquí puedes incluir lógica adicional si necesitas manejar el cierre del modal.
   */
  closeCart() {
    this.dialogRef.close();
  }

  
 // Método para abrir el CheckoutComponent
 openCheckout() {
  // Cerrar el modal de CartComponent
  this.dialogRef.close();
  
  // Abrir el modal de CheckoutComponent
  this.dialog.open(CheckoutComponent, {
    width: '400px', // Ajusta el ancho según necesites
    disableClose: true // Opcional: para evitar cerrar al hacer clic fuera del modal
  });
}

}
