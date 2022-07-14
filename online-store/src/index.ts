import './styles/main.scss';
import createSlider from './components/slider';
import viewCards from './view/viewCards';
import { cards } from './model/card';
import { viewChosen } from './view/viewChosen';
import viewSorted from './view/viewSorted';
import adToCart from './controller/adToCart';

createSlider();
viewCards(cards);
viewChosen(cards);
viewSorted(viewCards);
adToCart();

