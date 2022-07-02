import News from './news/news';
import Sources from './sources/sources';
import { IArticleObjects, ISourceObjects, TArticleValues, TSourceValues } from '../../interface/interface';

export class AppView {
  private readonly news: News;

  private readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IArticleObjects | void): void {
    const values: TArticleValues[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: Pick<ISourceObjects, 'sources'> | void): void {
    const values: TSourceValues[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;