import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '8dba3181037d4e74a733930ddcbadd4b',
    });
  }
}

export default AppLoader;
