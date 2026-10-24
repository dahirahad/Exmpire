import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import SEO from '../components/ui/SEO'

// Minimal blog content — replace with CMS/API in production
const posts = {
  'how-to-optimise-ebay-listings': {
    title: 'How to Optimise Your eBay Listings for Better Visibility',
    excerpt: 'A structured approach to improving eBay listing titles, descriptions, item specifics, and category placement.',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'eBay Tips',
    content: `
      <h2>Why Listing Optimisation Matters on eBay</h2>
      <p>eBay's search algorithm — known as Cassini — considers multiple listing attributes when deciding which products to show buyers. Listings with complete, relevant, and well-structured information generally perform better than incomplete ones.</p>
      <p>This article covers the fundamental elements that influence how eBay presents your listings to potential buyers.</p>

      <h2>1. Listing Titles</h2>
      <p>Your listing title is one of the most important fields on eBay. It should include:</p>
      <ul>
        <li>The most relevant search terms buyers would use</li>
        <li>Key product attributes (brand, size, colour, model, condition)</li>
        <li>Natural phrasing — avoid excessive symbols or punctuation</li>
      </ul>
      <p>eBay provides 80 characters. Use them meaningfully, not by repeating the same keyword multiple times.</p>

      <h2>2. Item Specifics</h2>
      <p>Item specifics — fields like Brand, Size, Material, Colour — are used by eBay's search filters. Completing them thoroughly helps your listing appear in filtered searches. Missing item specifics can exclude your listing from relevant results.</p>

      <h2>3. Category Selection</h2>
      <p>Placing your item in the most accurate eBay category is important. The category determines which item specifics are available and which buyer searches your listing appears in.</p>

      <h2>4. Listing Descriptions</h2>
      <p>While eBay's search algorithm prioritises structured fields over description text, a clear and honest description helps buyers make informed decisions — which can reduce returns and improve seller metrics.</p>

      <h2>5. Listing Images</h2>
      <p>eBay requires listings to meet specific image standards. High-quality images on white or neutral backgrounds generally perform better in search results and with buyers evaluating purchases.</p>

      <h2>Important Notes</h2>
      <p>No optimisation approach guarantees a specific search position or sales volume. Buyer behaviour, competition, pricing, and many other factors outside our control affect results. This article describes general best practices and not guaranteed outcomes.</p>
    `,
  },
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <section className="section min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-blue-pale mb-6">This article may have been moved or doesn't exist.</p>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${slug}`}
        type="article"
      />

      {/* Hero */}
      <section className="section-sm bg-mesh">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent text-sm mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="badge-blue mb-4">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight mt-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-blue-pale/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-blue-muted/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/blog" className="btn-secondary text-sm">
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
