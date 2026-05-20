import { useState } from 'react';

const posts = [
  {
    id: 1, category: 'Tips', featured: true,
    title: '10 Things to Check Before Signing a Lease',
    excerpt: 'Avoid costly mistakes by inspecting these key areas before committing to any rental property. From water pressure to natural light — we cover it all.',
    date: 'Mar 15, 2025', read: '5 min',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    author: 'Sarah Mitchell', authorAvatar: 'S',
  },
  {
    id: 2, category: 'Market', featured: false,
    title: 'NYC Rental Market Trends in 2025',
    excerpt: "Prices are shifting — here's what renters need to know about the current New York rental landscape and where the best deals are hiding.",
    date: 'Mar 10, 2025', read: '7 min',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    author: 'James Thornton', authorAvatar: 'J',
  },
  {
    id: 3, category: 'Guide', featured: false,
    title: "First-Time Renter's Complete Guide",
    excerpt: 'Everything you need to know from application to move-in day — a step-by-step walkthrough for first-time renters.',
    date: 'Mar 5, 2025', read: '10 min',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    author: 'Emma Wilson', authorAvatar: 'E',
  },
  {
    id: 4, category: 'Tips', featured: false,
    title: 'How to Negotiate Your Rent Like a Pro',
    excerpt: 'Smart strategies to lower your monthly rent and get better terms from your landlord without burning bridges.',
    date: 'Feb 28, 2025', read: '4 min',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    author: 'Alex Kim', authorAvatar: 'A',
  },
  {
    id: 5, category: 'Design', featured: false,
    title: 'Small Space, Big Style: Studio Apartment Ideas',
    excerpt: 'Transform your compact studio into a stylish, functional living space with these clever design hacks and furniture tips.',
    date: 'Feb 20, 2025', read: '6 min',
    img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80',
    author: 'Maria Garcia', authorAvatar: 'M',
  },
  {
    id: 6, category: 'Legal', featured: false,
    title: 'Tenant Rights You Must Know in 2025',
    excerpt: 'Know your legal protections as a renter — from security deposits to eviction procedures and everything in between.',
    date: 'Feb 15, 2025', read: '8 min',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    author: 'Robert Chen', authorAvatar: 'R',
  },
];

const cats = ['All', 'Tips', 'Market', 'Guide', 'Design', 'Legal'];

const catColors = { Tips: '#f59e0b', Market: '#3b82f6', Guide: '#10b981', Design: '#8b5cf6', Legal: '#ef4444' };

export default function Blog() {
  const [active, setActive] = useState('All');
  const featured = posts.find(p => p.featured);
  const filtered = (active === 'All' ? posts.filter(p => !p.featured) : posts.filter(p => p.category === active && !p.featured));

  return (
    <div className="blog-page">

      {/* HEADER */}
      <div className="page-header animate-fadein">
        <span className="page-tag">📰 Rental Insights</span>
        <h1>The <span className="brand-gold">EasyRent</span> Blog</h1>
        <p>Expert tips, market trends, and guides for renters and landlords.</p>
      </div>

      {/* FEATURED POST */}
      {active === 'All' && featured && (
        <div className="blog-featured animate-slideup">
          <div className="blog-featured-img">
            <img src={featured.img} alt={featured.title} />
            <span className="blog-cat-badge" style={{ background: catColors[featured.category] }}>
              ⭐ Featured · {featured.category}
            </span>
          </div>
          <div className="blog-featured-body">
            <div className="blog-meta-row">
              <div className="author-chip">
                <div className="author-av">{featured.authorAvatar}</div>
                <span>{featured.author}</span>
              </div>
              <span className="blog-date">📅 {featured.date}</span>
              <span className="blog-read">⏱ {featured.read} read</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <button className="btn-blog-read">Read Full Article →</button>
          </div>
        </div>
      )}

      {/* CATEGORY FILTER */}
      <div className="blog-filter-bar animate-fadein">
        <span className="filter-label">Filter by:</span>
        <div className="blog-cats">
          {cats.map(c => (
            <button
              key={c}
              className={`cat-btn${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
              style={active === c && c !== 'All' ? { background: catColors[c], borderColor: catColors[c], color: '#fff' } : {}}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* POSTS GRID */}
      <div className="blog-layout">
        <div className="blog-grid">
          {filtered.map((post, i) => (
            <article
              key={post.id}
              className="blog-card animate-slideup"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="blog-card-img">
                <img src={post.img} alt={post.title} loading="lazy" />
                <span className="blog-cat-badge" style={{ background: catColors[post.category] }}>
                  {post.category}
                </span>
              </div>
              <div className="blog-card-body">
                <div className="blog-meta-row">
                  <div className="author-chip">
                    <div className="author-av">{post.authorAvatar}</div>
                    <span>{post.author}</span>
                  </div>
                  <span className="blog-read">⏱ {post.read}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>
                  <button className="btn-blog-sm">Read More →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="blog-sidebar animate-fadein">
          <div className="sidebar-widget">
            <h4>📌 Popular Topics</h4>
            <div className="topic-tags">
              {['Renting Tips', 'NYC Market', 'Lease Guide', 'Interior Design', 'Tenant Rights', 'Moving In', 'Budgeting', 'Landlord Tips'].map(tag => (
                <span key={tag} className="topic-tag" onClick={() => {}}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-widget">
            <h4>🔥 Trending</h4>
            {posts.slice(0, 3).map(p => (
              <div key={p.id} className="trending-item">
                <img src={p.img} alt={p.title} />
                <div>
                  <p>{p.title}</p>
                  <span>{p.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-widget sidebar-newsletter">
            <h4>📬 Stay Updated</h4>
            <p>Get weekly rental tips and market insights.</p>
            <input type="email" placeholder="your@email.com" />
            <button className="btn-hero" style={{ width: '100%', marginTop: '0.5rem' }}>Subscribe</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
