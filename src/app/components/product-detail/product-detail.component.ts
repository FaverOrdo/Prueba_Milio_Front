import { Component, Output, EventEmitter } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Componente ProductDetailComponent
 * 
 * Este componente muestra los detalles de un producto en un modal. Permite al usuario
 * seleccionar un tamaño, agregar el producto al carrito, y marcar el producto como favorito.
 * Utiliza Angular Material Dialog para manejar el diálogo.
 */
@Component({
  selector: 'app-product-detail', // Selector usado para incluir el componente en el HTML
  templateUrl: './product-detail.component.html', // Archivo de template asociado al componente
  styleUrls: ['./product-detail.component.css']   // Estilos aplicados al componente
})
export class ProductDetailComponent {

  /** Evento emitido cuando se agrega un producto al carrito */
  @Output() addToCart = new EventEmitter<any>();

  /** Producto a mostrar en los detalles, obtenido mediante inyección de datos */
  product: any;

  /** Tamaño seleccionado del producto */
  selectedSize: string = '';

  /**
   * Constructor de ProductDetailComponent
   * 
   * @param dialogRef - Referencia al diálogo actual, permite abrir o cerrar el modal
   * @param data - Datos inyectados que contienen la información del producto
   */
  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.product = data;
  }

  /**
   * Cierra el diálogo de detalles del producto.
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  /**
   * Alterna el estado de favorito del producto.
   */
  toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  /**
   * Establece el tamaño seleccionado del producto.
   * 
   * @param size - Tamaño seleccionado por el usuario
   */
  selectSize(size: string) {
    this.selectedSize = size;
  }

  /**
   * Dispara el evento para agregar el producto al carrito sin cerrar el modal.
   */
  addToCartClicked() {
    this.addToCart.emit({ ...this.product });
  }

  /**
   * Agrega el producto al carrito y cierra el diálogo.
   * 
   * Nota: Usa el evento `addToCart` y pasa los datos del producto.
   */
  addProductToCart() {
    this.addToCart.emit(this.data);
    this.dialogRef.close();
  }
}
