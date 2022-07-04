import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISourceObjects, IArticleObjects } from '../../interface/interface';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    document?.querySelector('.sources')?.addEventListener('click', (e: Event) => {
      return this.controller.getNews(e, (data: IArticleObjects | ISourceObjects) => 
        this.view.drawNews(data as IArticleObjects));
    });
    this.controller.getSources((data: Pick<ISourceObjects, 'sources'> | IArticleObjects) => 
      this.view.drawSources(data as Pick<ISourceObjects, 'sources'>)); 
  }
}

export default App;
