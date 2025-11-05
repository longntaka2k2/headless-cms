import slug from 'slug';
export const createSlug = (text: string, options?: slug.Options) => {
  return slug(text, options);
};
