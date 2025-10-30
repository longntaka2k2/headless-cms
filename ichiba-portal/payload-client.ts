export const getPosts = async (params: string) => {
  const [posts] = await Promise.all([
    fetch(`https://cms-careers.ichiba.net/api/posts${params}`)
      .then((res) => res.json())
      .catch((err) => console.log(err)),
  ]);

  return {
    posts,
  };
};
