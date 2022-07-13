import './styles/main.scss';
import createSlider from './components/slider';
import viewCards from './view/viewCards';
import { cards } from './components/card';

createSlider();
viewCards(cards);