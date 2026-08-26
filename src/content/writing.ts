// Add real posts here as they're written. Each entry should be a finished
// (or at least published-ready) piece — do not add placeholder posts just to
// populate this page.

export type PostCategory = "Engineering" | "Architecture" | "Leadership" | "Building" | "Notes";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: PostCategory;
  tags?: string[];
  readingTime?: string;
};

export const posts: Post[] = [];
