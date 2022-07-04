import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Data } from '../../interface/interface';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    document?.querySelector('.sources')?.addEventListener('click', (e: Event): void => {
      return this.controller.getNews(e, (data: Pick<Data, 'articles'>): void => this.view.drawNews(data));
    });
    this.controller.getSources((data: Pick<Data, 'sources'>): void => this.view.drawSources(data)); 
  }
}

export default App;
