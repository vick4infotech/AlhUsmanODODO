import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getPosts, plainText, postImage } from "../lib/wordpress";

export default function News() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ posts: [], totalPages: 1 });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    setLoading(true);
    getPosts({ page }).then(result => { if (active) { setData(result); setError(""); } }).catch(() => { if (active) setError("News is temporarily unavailable. Please try again shortly."); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [page]);
  return <>
    <SEO title="Latest News and Updates" path="/news" />
    <section className="section"><div className="container-pad">
      <div className="kicker">Latest updates</div><h1 className="mt-4 font-display text-4xl font-bold text-kogi-green">News &amp; Announcements</h1>
      <p className="mt-3 text-black/70">Official updates, programmes and events from Kogi State.</p>
      {error && <p role="alert" className="mt-10 rounded-xl bg-red-50 p-5 text-red-800">{error}</p>}
      {loading ? <p className="mt-10">Loading news…</p> : <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map(post => <article key={post.id} className="card overflow-hidden">
          <Link to={`/news/${post.slug}`}><img src={postImage(post)} alt="" className="h-52 w-full object-cover" loading="lazy" /></Link>
          <div className="p-6"><time className="text-sm text-black/60" dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-NG", { dateStyle: "long" })}</time>
            <h2 className="mt-3 font-display text-xl font-bold text-kogi-green"><Link to={`/news/${post.slug}`}>{plainText(post.title.rendered)}</Link></h2>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/70">{plainText(post.excerpt.rendered)}</p>
            <Link className="mt-5 inline-block font-semibold text-kogi-green underline" to={`/news/${post.slug}`}>Read story →</Link>
          </div></article>)}
        {!data.posts.length && !error && <p>No news has been published yet.</p>}
      </div>}
      <div className="mt-10 flex items-center gap-4">
        <button disabled={page <= 1 || loading} onClick={() => setPage(p => p - 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">Previous</button>
        <span>Page {page} of {data.totalPages}</span>
        <button disabled={page >= data.totalPages || loading} onClick={() => setPage(p => p + 1)} className="rounded-lg border px-4 py-2 disabled:opacity-40">Next</button>
      </div>
    </div></section>
  </>;
}
