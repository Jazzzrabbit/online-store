import AppLoader from './appLoader';

class AppController extends AppLoader {
  public getSources(callback: () => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  public getNews(e: Event, callback: () => void): void {
    let target = e.target as Element;
    const newsContainer = e.currentTarget as Element;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: null | string = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId as string);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode as Element;
    }
  }
}

export default AppController;