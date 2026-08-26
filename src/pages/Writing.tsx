import { posts } from "../content/writing";

function Writing() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Writing</p>
          <h1>Writing</h1>
          <p>
            Thoughts on software engineering, architecture, building systems, technical
            leadership, learning, failure, and the craft of creating useful software.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="writing-empty">
            Nothing published yet &mdash; the first post is on its way. Check back soon.
          </p>
        ) : (
          <div className="post-list">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                <div className="post-card-meta">
                  <span className="post-category">{post.category}</span>
                  <span>{post.date}</span>
                  {post.readingTime && <span>{post.readingTime}</span>}
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <p className="project-tags">{post.tags.join(" · ")}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Writing;
