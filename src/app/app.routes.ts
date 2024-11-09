import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';

/**
 * Definición de rutas de la aplicación.
 * Cada ruta se asocia con un componente específico que se renderizará cuando se acceda a esa URL.
 */
export const routes: Route[] = [
  /**
   * Ruta raíz ('/').
   * Renderiza el componente HomeComponent cuando el usuario accede a la raíz del sitio web.
   */
  { path: '', component: HomeComponent },

  /**
   * Ruta comentada para 'categories'.
   * Esta ruta está comentada y, por lo tanto, no está activa.
   * En caso de activarse, renderizaría el componente CategoriesComponent al acceder a '/categories'.
   */
  // { path: 'categories', component: CategoriesComponent },

  /**
   * Ruta para el carrito ('/cart').
   * Renderiza el componente CartComponent cuando el usuario accede a '/cart'.
   */
  { path: 'cart', component: CartComponent },

  /**
   * Ruta para el perfil de usuario ('/profile').
   * Renderiza el componente ProfileComponent cuando el usuario accede a '/profile'.
   */
  { path: 'profile', component: ProfileComponent }
];
