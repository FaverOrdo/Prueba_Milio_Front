import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Define el selector para usar este componente en plantillas HTML
  templateUrl: './app.component.html', // Ruta del archivo HTML de la plantilla del componente
  styleUrls: ['./app.component.css'], // Ruta del archivo CSS del componente
  standalone: true, // Declara que el componente es standalone, es decir, independiente
  imports: [RouterLink, RouterLinkActive, RouterOutlet] // Importa directivas de enrutamiento para su uso en la plantilla
})
export class AppComponent {

  // Arreglo para almacenar los productos agregados al carrito
  cartItems: any[] = [];
  
  /**
   * Método para agregar un producto al carrito.
   * Si el producto ya existe en el carrito con la misma talla, aumenta su cantidad.
   * De lo contrario, lo agrega como un nuevo producto en el carrito.
   *
   * @param product - El producto a agregar, que incluye nombre, talla y cantidad.
   */
  onAddToCart(product: any) {
    // Busca si el producto ya está en el carrito con el mismo nombre y talla
    const existingProduct = this.cartItems.find(item => item.name === product.name && item.size === product.size);
    
    // Si el producto ya existe, incrementa su cantidad
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      // Si no existe, lo agrega al carrito
      this.cartItems.push(product);
    }
  }
}
