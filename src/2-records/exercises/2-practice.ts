import { Equal, Expect } from '..';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

type BlogPostSummary = Pick<BlogPost, 'title' | 'content'>;

// Asynchronously fetches a blog post from an API.
export const fetchBlogPost = async (): Promise<BlogPostSummary> => {
  const response = await fetch('/api/blogpost');
  const post = await response.json();
  return post;
};

const getBlogSummary = async () => {
  const post = await fetchBlogPost();

  // Extract only part of the properties: title and content.
  type test = Expect<Equal<typeof post, { title: string; content: string }>>;
};
