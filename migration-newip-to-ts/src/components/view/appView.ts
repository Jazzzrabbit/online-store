import News from './news/news';
import Sources from './sources/sources';
import { TArticleValues, TSourceValues, Data } from '../../interface/interface';

export class AppView {
  private readonly news: News;

  private readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: Data): void {
    const values: TArticleValues[] = data?.articles ?? [];
    this.news.draw(values);
  }

  drawSources(data: Data): void {
    const values: TSourceValues[] = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;
