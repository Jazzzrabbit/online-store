import './styles/main.scss';
import createSlider from './components/slider';
import viewCards from './view/viewCards';
import { cards } from './model/card';
import viewChosen from './view/viewChosen';
import viewSorted from './view/viewSorted';
import adToCart from './controller/adToCart';
import viewSearched from './view/viewSearched';

createSlider();
viewCards(cards);
viewChosen();
viewSorted(viewCards);
adToCart();
viewSearched();
