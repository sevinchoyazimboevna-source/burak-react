// react app state
import { Member } from "./member";
import { Product } from "./product";
import ProductsPage from './../../app/screens/productsPage/index';

export interface AppRootState {
    homePage: HomePageState;  
    // productsPage: ProductsPage;   
}
//HOMEPAGE
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

//PRODUCTS PAGE

//ORDERS PAGE