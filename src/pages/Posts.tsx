import { useState } from "react";

type Post = {
  title: string;
  body: string;
  published_at?: string | null;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  async function loadPosts() {
    try {
      setLoadingPosts(true);

      const res = await fetch("http://localhost:5257/posts/published", {
        headers: {
          accept: "application/json"
        }
      });

      if (!res.ok) {
        throw new Error("Failed to load posts");
      }

      const data = await res.json();

      // Transformare backend → frontend
      const mapped: Post[] = data.map((p: any) => ({
        title: p.title,
        body: p.body,
        published_at: p.publishedAt ?? null
      }));

      setPosts(mapped);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPosts(false);
    }
  }

  return (
    <div>
      <button onClick={loadPosts}>Load posts</button>

      <section id="articles" className="articles">
        {loadingPosts && <p>Loading…</p>}
        {!loadingPosts && posts.length === 0 && (
          <p>No posts published at the moment.</p>
        )}

        {posts.map((post, i) => (
          <article key={i} className="article-card">
            <h2>{post.title}</h2>

            {post.published_at && (
              <time dateTime={post.published_at}>
                {new Intl.DateTimeFormat("ro-RO", { dateStyle: "long" }).format(
                  new Date(post.published_at)
                )}
              </time>
            )}

            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
