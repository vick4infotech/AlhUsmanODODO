const configuredUrl = (import.meta.env.VITE_WORDPRESS_URL || "http://localhost:8080").replace(/\/$/, "");
export const wordpressUrl = configuredUrl;

export async function getPosts({ slug, page = 1, perPage = 12 } = {}) {
  const url = new URL(`${configuredUrl}/wp-json/wp/v2/posts`);
  url.searchParams.set("_embed", "1");
  url.searchParams.set("per_page", String(perPage));
  if (slug) url.searchParams.set("slug", slug);
  else url.searchParams.set("page", String(page));
  const response = await fetch(url.toString(), { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error("Unable to load news from WordPress.");
  return { posts: await response.json(), totalPages: Number(response.headers.get("X-WP-TotalPages") || 1) };
}

export function postImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/kogi-classroom-visit.jpg";
}

export function plainText(html = "") {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent || "";
}
