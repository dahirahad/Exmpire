import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import SEO from '../components/ui/SEO'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
})

// Placeholder blog posts — replace with CMS/API integration
const posts = [
  {
    slug: 'how-to-optimise-ebay-listings',
    title: 'How to Optimise Your eBay Listings for Better Visibility',
    excerpt: 'A structured approach to improving eBay listing titles, descriptions, item specifics, and category placement to help buyers find your products.',
    category: 'eBay Tips',
    date: '2024-11-15',
    readTime: '7 min read',
  },
  {
    slug: 'etsy-seo-keyword-research',
    title: 'Etsy SEO: A Practical Keyword Research Approach for Sellers',
    excerpt: 'Understanding how Etsy search works and how to identify relevant keywords to include in listing titles, tags, and descriptions.',
    category: 'Etsy Tips',
    date: '2024-10-28',
    readTime: '8 min read',
  },
  {
    slug: 'product-research-for-marketplace-sellers',
    title: 'Product Research Fundamentals for eBay and Etsy Sellers',
    excerpt: 'Before choosing what to sell, understanding demand, competition, and margin potential is essential. This article covers the key research steps.',
    category: 'Marketplace Strategy',
    date: '2024-10-05',
    readTime: '9 min read',
  },
  {
    slug: 'web-development-for-ecommerce',
    title: 'Why Your E-commerce Business Needs More Than Just a Marketplace Store',
    excerpt: 'Marketplace stores are valuable, but a dedicated website gives you brand control, customer data, and long-term business resilience.',
    category: 'Web Development',
    date: '2024-09-18',
    readTime: '6 min read',
  },
  {
    slug: 'digital-marketing-for-small-businesses',
    title: 'Digital Marketing Essentials for Small Business Owners',
    excerpt: 'An overview of the digital marketing channels most relevant to small businesses — from SEO and social media to email and paid advertising.',
    category: 'Digital Marketing',
    date: '2024-09-01',
    readTime: '7 min read',
  },
  {
    slug: 'ai-tools-for-business',
    title: 'How AI Tools Are Changing the Way Small Businesses Operate',
    excerpt: 'From customer service chatbots to content generation and data analysis — practical AI applications for business owners in 2024.',
    category: 'AI & Technology',
    date: '2024-08-12',
    readTime: '8 min read',
  },
]

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | eBay, Etsy, Digital Marketing & Web Development Tips"
        description="Read NEFFTO IT Solution's blog for practical insights on eBay store management, Etsy shop optimisation, web development, digital marketing, and AI tools."
        canonical="/blog"
      />

      {/* Hero */}
      <section className="section-sm bg-mesh text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <span className="badge-blue mb-4">NEFFTO Blog</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Insights, Tips &amp; Guides
            </h1>
            <p className="text-blue-pale text-lg">
              Practical content on marketplace management, web development,
              digital marketing, and running a modern online business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.slug} {...fadeUp(i * 0.06)}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="card-hover group block h-full"
                  aria-label={`Read: ${post.title}`}
                >
                  {/* Placeholder image area */}
                  <div className="h-48 rounded-xl bg-gradient-to-br from-navy-700 to-navy-600
                                  mb-5 flex items-center justify-center border border-blue-muted/10">
                    <span className="badge-blue text-xs">{post.category}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-blue-pale/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-white font-semibold text-lg mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-blue-pale text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-accent text-sm font-medium mt-auto">
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy-950 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl font-bold text-white mb-4">
              Have a Question or Need Help?
            </h2>
            <p className="text-blue-pale mb-6">
              Our team is available to discuss your project requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact NEFFTO <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
