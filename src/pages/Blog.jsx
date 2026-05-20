import { useState } from 'react';
import { useNavigate } from 'react-router';

const posts = [
  { id: 1, category: 'Tips', title: '10 Things to Check Before Signing a Lease', excerpt: 'Avoid costly mistakes by inspecting these key areas before committing to any rental property.', date: 'Mar 15, 2025', read: '5 min', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', author: 'Sarah M.' },
  { id: 2, category: 'Market', title: 'NYC Rental Market Trends in 2025', excerpt: 'Prices are shifting — here\'s what renters need to know about the current New York rental landscape.', date: 'Mar 10, 2025', read: '7 min', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', author: 'James T.' },
  { id: 3, category: 'Guide', title: 'First-Time Renter\'s Complete Guide', excerpt: 'Everything you need to know from application to move-in day — a step-by-step walkthrough.', date: 'Mar 5, 2025', read: '10 min', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Emma W.' },
  { id: 4, category: 'Tips', title: 'How to Negotiate Your Rent Like a Pro', excerpt: 'Smart strategies to lower your monthly rent and get better terms from your landlord.', date: 'Feb 28, 2025', read: '4 min', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', author: 'Alex K.' },
  { id: 5, category: 'Design', title: 'Small Space, Big Style: Studio Apartment Ideas', excerpt: 'Transform your compact studio into a stylish, functional living space with these design hacks.', date: 'Feb 20, 2025', read: '6 min', img: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80', author: 'Maria G.' },
  { id: 6, category: 'Legal', title: 'Tenant Rights You Must Know in 2025', excerpt: 'Know your legal protections as a renter — from security deposits to eviction procedures.', date: 'Feb 15, 2025', read: '8 min', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', author: 'Robert C.' },
];

const cats = ['All', 'Tips', 'Market', 'Guide', 'Design', 'Legal'];

export default function Blog() {
  const [active, setActive] = useState('All');
  const navigate = useNavigate();
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <div className="blog-page">
      <div className="page-header animate-fadein">
        <span className="page-tag">📰 Rental Insights</span>
        <h1>The <span className="gold">EasyRent</span> Blog</h1>
        <p>Expert tips, market trends, and guides for renters and landlords.</p>
      </div>

      <div className="blog-cats animate-fadein">
        {cats.map(c => (
          <button key={c} className={active === c ? 'cat-btn active' : 'cat-btn'} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      <div className="blog-grid">
        {filtered.map((post, i) => (
          <article key={post.id} className="blog-card animate-slideup" style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => navigate('/blog/' + post.id)}>
            <div className="blog-img-wrap">
              <img src={post.img} alt={post.title} loading="lazy" />
              <span className="blog-cat">{post.category}</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span>✍ {post.author}</span>
                <span>📅 {post.date}</span>
                <span>⏱ {post.read} read</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="blog-read-more">Read More →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
