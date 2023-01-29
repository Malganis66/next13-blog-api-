import Link from "next/link";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async () => {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => {
    return (
      <article key={post.id}>
        <Link href='/posts/[id]' as={`/posts/${post.id}`}>
          <h2 style={{color: '#09f'}}>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
      </article>
    );
  });
};
