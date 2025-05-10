// types/contentful.ts

export interface Author {
  fields: {
    name: string;
    bio?: string;
    avatar?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt?: string;
    updatedAt?: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
    publishDate: string;
    author?: Author;
    tags: string[];
    featured: boolean;
    image?: {
      fields: {
        file: {
          url: string;
          details?: {
            image?: {
              width: number;
              height: number;
            };
          };
        };
        title: string;
        description?: string;
      };
    };
    content?: any; // This would be the rich text content from Contentful
  };
}

export interface ContentfulResponse {
  items: BlogPost[];
  total: number;
  skip: number;
  limit: number;
}
