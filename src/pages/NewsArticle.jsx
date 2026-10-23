import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getPosts, plainText, postImage } from "../lib/wordpress";
export default function NewsArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");
  useEffect(() => { let active = true; setStatus("loading"); getPosts({ slug }).then(({ posts }) => { if (active) { setPost(posts[0] || null); setStatus(posts.length ? "ready" : "missing"); } }).catch(() => { if (active) setStatus("error"); }); return () => { active = false; }; }, [slug]);
  return <><SEO title={post ? plainText(post.title.rendered) : "News"} path={`/news/${slug}`} />
    <article className="section"><div className="container-pad max-w-4xl">
      <Link to="/news" className="text-kogi-green underline">← All news</Link>
      {status === "loading" && <p className="mt-8">Loading story…</p>}
      {status === "error" && <p role="alert" className="mt-8">This story is temporarily unavailable.</p>}
      {status === "missing" && <p className="mt-8">Story not found.</p>}
      {post && status === "ready" && <><time className="mt-8 block text-black/60" dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-NG", { dateStyle: "long" })}</time>
        <h1 className="mt-4 font-display text-4xl font-bold text-kogi-green">{plainText(post.title.rendered)}</h1>
        <img src={postImage(post)} alt="" className="mt-8 max-h-[500px] w-full rounded-2xl object-cover" />
        <div className="wp-article mt-10 text-lg leading-8 text-slate-800" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </>}
    </div></article>
  </>;
}
