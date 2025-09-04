'use client';
import React, { useState } from 'react';
import '../styles/blog.css';

const blogData = [
  // 9 blogs (as you already have)
  {
    title: 'Guide Onlyfans 2024',
    date: '14 July, 2025',
    tag: 'FANFIX',
    image: '/images/FANFIX.png',
  },
  {
    title: 'Protect Your ManyVids Content',
    date: '12 July, 2025',
    tag: 'ONLYFANS',
    image: '/images/onlyfanblog.png',
  },
  {
    title: 'Protect Your Patreon Profile',
    date: '10 July, 2025',
    tag: 'PATREON',
    image: '/images/PATRON.png',
  },
  {
    title: 'Guide Onlyfans 2024',
    date: '8 July, 2025',
    tag: 'FANSLY',
    image: '/images/FANSLY.png',
  },
  {
    title: 'Family Privacy Tips',
    date: '6 July, 2025',
    tag: 'LOYALFANS',
    image: '/images/LOYALFANS.png',
  },
  {
    title: 'Earn More with Fan Subscriptions',
    date: '2 July, 2025',
    tag: 'MANYVIDS',
    image: '/images/MANYVIDS.png',
  },
  {
    title: 'Guide Onlyfans 2024',
    date: '14 July, 2025',
    tag: 'FANFIX',
    image: '/images/FANFIX.png',
  },
  {
    title: 'Protect Your ManyVids Content',
    date: '12 July, 2025',
    tag: 'ONLYFANS',
    image: '/images/onlyfanblog.png',
  },
  {
    title: 'Protect Your Patreon Profile',
    date: '10 July, 2025',
    tag: 'PATREON',
    image: '/images/PATRON.png',
  },
    {
    title: 'Guide Onlyfans 2024',
    date: '14 July, 2025',
    tag: 'FANFIX',
    image: '/images/FANFIX.png',
  },
  {
    title: 'Protect Your ManyVids Content',
    date: '12 July, 2025',
    tag: 'ONLYFANS',
    image: '/images/onlyfanblog.png',
  },
  {
    title: 'Protect Your Patreon Profile',
    date: '10 July, 2025',
    tag: 'PATREON',
    image: '/images/PATRON.png',
  },
    {
    title: 'Guide Onlyfans 2024',
    date: '14 July, 2025',
    tag: 'FANFIX',
    image: '/images/FANFIX.png',
  },
  {
    title: 'Protect Your ManyVids Content',
    date: '12 July, 2025',
    tag: 'ONLYFANS',
    image: '/images/onlyfanblog.png',
  },
  {
    title: 'Protect Your Patreon Profile',
    date: '10 July, 2025',
    tag: 'PATREON',
    image: '/images/PATRON.png',
  },
    {
    title: 'Guide Onlyfans 2024',
    date: '14 July, 2025',
    tag: 'FANFIX',
    image: '/images/FANFIX.png',
  },
  {
    title: 'Protect Your ManyVids Content',
    date: '12 July, 2025',
    tag: 'ONLYFANS',
    image: '/images/onlyfanblog.png',
  },
  {
    title: 'Protect Your Patreon Profile',
    date: '10 July, 2025',
    tag: 'PATREON',
    image: '/images/PATRON.png',
  },
   
  
];

const tags = [
  '💼 Job Tracker',
  '️Copilot Extension',
  '️Copilot Extension',
  '️Copilot Extension',
];

const Blogs = () => {
  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);

return (
  <section className="blog-section">
    <div className="blog-container">

      {/* Heading */}
      <h2 className="blogs-heading">Blogs</h2>

      {/* Search Field */}
      <div className="blog-search-wrapper">
        <input
          type="text"
          placeholder="Search blogs..."
          className="blog-search-input"
        />
      </div>

      {/* Tabs Wrapper */}
      <div className="blog-tabs-wrapper">
        <div className="blog-tabs">
          {tags.map((tag, idx) => (
            <button key={idx} className={`blog-tab ${idx === 0 ? 'active' : ''}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        {currentBlogs.map((item, idx) => (
          <div className="blog-item" key={idx}>
            <div className="blog-card">
              <img src={item.image} alt={item.title} className="blog-thumbnail" />
              <a href="/blogInner" className="blog-arrow">↗</a>
              <div className="blog-details">
                <div className="blog-meta">
                  <span className={`blog-badge tag-${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                  <span className="blog-date">{item.date}</span>
                </div>
                <h5 className="blog-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="blog-pagination">
        {(() => {
          const pages = [];
          if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
          } else {
            if (currentPage <= 3) pages.push(1, 2, 3, '...', totalPages);
            else if (currentPage >= totalPages - 2)
              pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            else pages.push(1, '...', currentPage, '...', totalPages);
          }

          return pages.map((page, index) =>
            typeof page === 'number' ? (
              <button
                key={index}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="pagination-dots">...</span>
            )
          );
        })()}
      </div>
    </div>
  </section>
);
}

export default Blogs;
