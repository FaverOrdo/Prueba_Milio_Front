import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';

/**
 * Componente principal de la página de inicio de la tienda.
 * Muestra productos, maneja el carrito y las notificaciones de favoritos.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  showFavoriteModal: boolean = false; // Indica si se debe mostrar el modal de favoritos
  notificationVisible: boolean = false; // Controla la visibilidad de la notificación de "Agregado a favoritos"
  
  selectedProduct: any; // Producto actualmente seleccionado
  cartItems: any[] = []; // Arreglo que contiene los productos en el carrito

  /**
   * Arreglo de productos disponibles en la tienda.
   * Cada producto tiene propiedades como nombre, precio, imagen, descripción y si es favorito.
   */
  products = [
    { name: 'Camisas', price: 40, image: 'assets/ventasimg/camisas.png', description: 'Camiseta para hombre en tono unicolor, confeccionada en tela viscosa, cuenta con cuello redondo, manga corta y una silueta ajustada al cuerpo. Esta es una prenda esencial y versátil que te sacará de apuros, combínala con tus jeans o joggers favoritos y crea cientos de atuendos para tus planes diarios.', isFavorite: false, name2: 'Camiseta básica' },
    { name: 'Adidas', price: 300, image: 'assets/ventasimg/adidas.png', description: 'Descripción de Camisas', isFavorite: false },
    { name: 'Camisas', price: 40, image: 'assets/ventasimg/camisas 2.png', description: 'Descripción de Camisas', isFavorite: false },
    { name: 'Adidas', price: 300, image: 'assets/ventasimg/adidas 2.png', description: 'Descripción de Camisas', isFavorite: false },
    { name: 'Nike', price: 300, image: 'assets/ventasimg/nike.png', description: 'Descripción de Camisas', isFavorite: false },
    { name: 'Correas', price: 300, image: 'assets/ventasimg/correas.png', description: 'Descripción de Camisas', isFavorite: false }
  ];

  constructor(public dialog: MatDialog) {}

  /**
   * Abre el diálogo de detalles del producto.
   * @param product - Producto seleccionado para ver detalles
   */
  openProductDetail(product: any) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: product,
      panelClass: 'custom-dialog-container'
    });

    // Escucha el evento `addToCart` emitido desde el componente de detalles del producto.
    dialogRef.componentInstance.addToCart.subscribe((addedProduct: any) => {
      this.handleAddToCart(addedProduct);
      this.openCartDialog();
    });
  }

  /**
   * Alterna el estado de favorito del producto y muestra una notificación.
   * @param product - Producto seleccionado para agregar o quitar de favoritos
   */
  toggleFavorite(product: any) {
    product.isFavorite = !product.isFavorite;
    this.showNotification();
  }

  /**
   * Muestra una notificación temporal cuando se agrega un producto a favoritos.
   */
  showNotification() {
    this.notificationVisible = true;
    setTimeout(() => {
      this.notificationVisible = false;
    }, 30000); // La notificación desaparece después de 30 segundos
  }

  /**
   * Maneja la lógica para agregar un producto al carrito.
   * @param product - Producto seleccionado para agregar al carrito
   */
  handleAddToCart(product: any) {
    console.log("Producto agregado al carrito: ", product);
    this.cartItems.push(product);
  }

  /**
   * Abre el diálogo del carrito mostrando los productos añadidos.
   */
  openCartDialog() {
    this.dialog.open(CartComponent, {
      data: this.cartItems,
      panelClass: 'custom-dialog-container'
    });
  }
}
