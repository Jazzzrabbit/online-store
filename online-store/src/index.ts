import './styles/main.scss';
import createSlider from './components/slider';
import viewCards from './view/viewCards';
import { cards } from './components/card';
import { viewChosen } from './view/viewChosen';
import viewSorted from './view/viewSorted';

createSlider();
viewCards(cards);
viewChosen(cards);
viewSorted(viewCards);