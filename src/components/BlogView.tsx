import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";

const siteUrl = "https://nationalsol.sa";

export default function BlogPostView() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((candidate) => candidate.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950">Article not found</h1>
        <p className="mt-4 text-lg text-slate-600">The requested SNS insight is unavailable or has moved.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-[#2b80a5] hover:text-[#236d8d]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to SNS Insights
        </Link>
      </main>
    );
  }

  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const absoluteImageUrl = `${siteUrl}${post.imageUrl}`;
  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: absoluteImageUrl,
      width: 1600,
      height: 900,
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: post.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Smart National Solutions",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Logo/SNS-Icon-Logo.svg`,
      },
    },
    about: post.keywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={articleUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Smart National Solutions" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content={post.imageAlt} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map((keyword) => (
          <meta property="article:tag" content={keyword} key={keyword} />
        ))}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta name="twitter:image:alt" content={post.imageAlt} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-white">
        <header className="border-b border-slate-200 bg-[#f4f7f8]">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-[#2b80a5]">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className="hover:text-[#2b80a5]">Insights</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-700">{post.category}</span>
            </nav>

            <Link
              to="/blog"
              className="mb-7 inline-flex items-center gap-2 font-semibold text-[#2b80a5] transition-colors hover:text-[#236d8d]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to SNS Insights
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase text-[#2b80a5]">{post.category}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">By {post.author}</span>
              <time dateTime={post.datePublished} className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#2b80a5]" aria-hidden="true" />
                {post.date}
              </time>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#2b80a5]" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
          >
            <img
              src={post.imageUrl}
              alt={post.imageAlt}
              width="1600"
              height="900"
              fetchPriority="high"
              className="aspect-video w-full object-cover"
            />
          </motion.figure>

          <div className="mx-auto max-w-3xl">
            <aside aria-labelledby="key-takeaways" className="mb-12 border-l-4 border-[#36a0d0] bg-[#f4f9fb] p-6 sm:p-7">
              <h2 id="key-takeaways" className="text-2xl font-bold text-slate-950">Key takeaways</h2>
              <ul className="mt-5 space-y-3">
                {post.keyTakeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3 leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2b80a5]" aria-hidden="true" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-lg max-w-none prose-headings:text-slate-950 prose-h2:mt-12 prose-h2:text-3xl prose-h2:font-bold prose-h3:mt-8 prose-h3:text-2xl prose-h3:font-bold prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700 prose-a:font-semibold prose-a:text-[#2b80a5] prose-a:no-underline hover:prose-a:text-[#236d8d] [&_.answer-summary]:mb-12 [&_.answer-summary]:border-l-4 [&_.answer-summary]:border-[#6ec6ab] [&_.answer-summary]:bg-[#f3f8f6] [&_.answer-summary]:p-6 [&_.answer-summary_h2]:mt-0"
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>

            <section className="mt-16 border-t border-slate-200 pt-12" aria-labelledby="article-faqs">
              <p className="mb-2 text-sm font-semibold uppercase text-[#2b80a5]">Direct answers</p>
              <h2 id="article-faqs" className="text-3xl font-bold text-slate-950">Frequently asked questions</h2>
              <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                {post.faqs.map((faq, index) => (
                  <details key={faq.question} className="group py-5" open={index === 0}>
                    <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-950 marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14 border-t border-slate-200 pt-10" aria-labelledby="article-sources">
              <h2 id="article-sources" className="text-2xl font-bold text-slate-950">Sources and further reading</h2>
              <ul className="mt-5 space-y-3">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-2 font-semibold text-[#2b80a5] hover:text-[#236d8d]"
                    >
                      <span>{source.label}</span>
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="border-y border-slate-200 bg-[#f4f7f8] py-14" aria-labelledby="related-insights">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="related-insights" className="text-3xl font-bold text-slate-950">Related SNS insights</h2>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <Link to={`/blog/${relatedPost.slug}`} className="block overflow-hidden">
                  <img
                    src={relatedPost.imageUrl}
                    alt={relatedPost.imageAlt}
                    width="1600"
                    height="900"
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-sm font-semibold text-[#2b80a5]">{relatedPost.category}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-950">
                    <Link to={`/blog/${relatedPost.slug}`} className="hover:text-[#2b80a5]">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-[#2b80a5] hover:text-[#236d8d]"
                  >
                    Read the insight
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14" aria-labelledby="blog-contact">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 id="blog-contact" className="text-3xl font-bold text-slate-950">Plan your next transformation step</h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">Speak with SNS specialists in SAP, AI, data, integration, and enterprise delivery.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#2b80a5] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#236d8d]"
          >
            Contact SNS
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
