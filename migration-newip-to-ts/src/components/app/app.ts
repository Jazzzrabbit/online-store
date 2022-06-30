import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    document?.querySelector('.sources')?.addEventListener('click', (e: Event) => {
      return this.controller.getNews(e, (data: void) => this.view.drawNews(data))});
    this.controller.getSources((data: void) => this.view.drawSources(data));
  }
}

export default App;
