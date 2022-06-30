export interface IArticleObjects {
  articles: [
    {
      source: {
        id: null | string,
        name: string
      },
      author: string,
      title: string,
      description: string,
      url: string,
      urlToImage: string,
      publishedAt: string,
      content: string,
    },
  ]
}

export interface ISourceObjects {
  sources: [
    {
      id: string, 
      name: string,
      description: string,
      url: string,
      category: string,
      language: string,
      country: string,
    },
  ]
}

export type TArticleValues = {
  source: {
    id: null | string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string,
}

export type TSourceValues = {
  id: string,
  name: string, 
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
}

export type TUrlOptions = {
  [prop: string]: string
}