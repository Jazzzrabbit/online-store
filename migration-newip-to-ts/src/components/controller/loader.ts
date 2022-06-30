import { TUrlOptions } from '../../interface/interface';

enum StatusCodes {
  Unauthorized = 401,
  'Not Found' = 404,
}

class Loader {
  private readonly baseLink: string;

  private readonly options: TUrlOptions;

  constructor(baseLink: string, options: TUrlOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint = '', options = {} },
    callback = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === StatusCodes.Unauthorized || res.status === StatusCodes['Not Found'])
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: TUrlOptions, endpoint: string): string {
    const urlOptions: Partial<TUrlOptions> = { ...this.options, ...options };
    let url: string = this.baseLink + endpoint + '?';

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: <T>(arg: T | undefined) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: string) => callback(data))
      .catch((err: Event) => console.error(err));
  }
}

export default Loader;
