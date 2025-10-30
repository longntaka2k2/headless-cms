import qs from "qs";

const api = process.env.NEXT_PUBLIC_API_CMS
export const getPosts = async (params: string) => {
    const [
        posts,
    ] = await Promise.all([
        fetch(`${api}/api/posts${params}`).then((res) => res.json()),
    ]);

    return {
        posts,
    }
}

export const getPostsLocal = async (params: string) => {

  const [
      posts,
  ] = await Promise.all([
      fetch(`http://localhost:3000/api/posts${params}`).then((res) => res.json()),
  ]);

  return {
      posts,
  }
}


export const getTypeBlog = async (type: string, locale : string) => {

   
        const queryNews = {
            "category.name": {
              equals: locale ==='vi' ? "blogVi" : 'blogEn',
            },
          };
          const query = {
            "category.name": {
              equals: locale ==='vi' ? "blogVi" : 'blogEn',
            },
            
             "layout.blog.type": {
              equals: type === null ? '' : type,
            },
          };
    
      const stringifiedQuery = qs.stringify(
        {
          where: type === 'news' ? queryNews : query, // ensure that `qs` adds the `where` property, too!
          locale: locale,
          limit:50
        },
        { addQueryPrefix: true }
      );
      let listBlog = await getPosts(stringifiedQuery);
    
    return {
        listBlog,
    }
}
