import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { fadeIn, staggerContainer } from "../styles/animations";

const siteUrl = "https://nationalsol.sa";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/blog#blog`,
    name: "SNS Insights",
    url: `${siteUrl}/blog`,
    description:
      "Expert guidance from Smart National Solutions on SAP, enterprise AI, data, HR technology, and digital transformation in Saudi Arabia and the GCC.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Smart National Solutions",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${siteUrl}${post.imageUrl}`,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/blog#articles`,
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>SAP, AI and Digital Transformation Insights | SNS</title>
        <meta
          name="description"
          content="Expert SNS insights on SAP partners, SAP S/4HANA, SuccessFactors, enterprise AI, Elm, and digital transformation in Saudi Arabia and the GCC."
        />
        <meta
          name="keywords"
          content="SAP partner Saudi Arabia, SAP Gold Partner KSA, enterprise AI Saudi Arabia, SAP S/4HANA, SAP SuccessFactors, Elm SNS"
        />
        <link rel="canonical" href={`${siteUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Smart National Solutions" />
        <meta property="og:title" content="SAP, AI and Digital Transformation Insights | SNS" />
        <meta
          property="og:description"
          content="Practical guidance for Saudi and GCC organizations planning SAP, enterprise AI, HR technology, and digital transformation programs."
        />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:image" content={`${siteUrl}${featuredPost.imageUrl}`} />
        <meta property="og:image:alt" content={featuredPost.imageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAP, AI and Digital Transformation Insights | SNS" />
        <meta name="twitter:description" content="Expert guidance for Saudi and GCC enterprise transformation leaders." />
        <meta name="twitter:image" content={`${siteUrl}${featuredPost.imageUrl}`} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <header className="border-b border-slate-200 bg-[#f4f7f8]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase text-[#2b80a5]">SNS Insights</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            SAP, AI and Digital Transformation Insights
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Practical guidance for leaders building connected, trusted, and scalable enterprises in Saudi Arabia and across the GCC.
          </p>
        </div>
      </header>

      <main>
        <section className="py-14 lg:py-16" aria-labelledby="featured-insight">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeIn}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <Link to={`/blog/${featuredPost.slug}`} className="block overflow-hidden" aria-label={featuredPost.title}>
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.imageAlt}
                    width="1600"
                    height="900"
                    fetchPriority="high"
                    className="aspect-video h-full min-h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
                  <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2 font-semibold text-[#2b80a5]">
                      <Tag className="h-4 w-4" aria-hidden="true" />
                      {featuredPost.category}
                    </span>
                    <time dateTime={featuredPost.datePublished} className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {featuredPost.date}
                    </time>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 id="featured-insight" className="text-3xl font-bold leading-tight text-slate-950">
                    <Link to={`/blog/${featuredPost.slug}`} className="transition-colors hover:text-[#2b80a5]">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="mt-5 leading-relaxed text-slate-600">{featuredPost.excerpt}</p>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-[#2b80a5] transition-colors hover:text-[#236d8d]"
                  >
                    Read the insight
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="border-t border-slate-100 pb-20 pt-12" aria-labelledby="all-insights">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase text-[#2b80a5]">Knowledge Center</p>
                <h2 id="all-insights" className="text-3xl font-bold text-slate-950">More expert insights</h2>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-7 md:grid-cols-2"
            >
              {regularPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={fadeIn}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden" aria-label={post.title}>
                    <img
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      width="1600"
                      height="900"
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                      <span className="font-semibold text-[#2b80a5]">{post.category}</span>
                      <time dateTime={post.datePublished}>{post.date}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-[#2b80a5]">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-600">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2b80a5] transition-colors hover:text-[#236d8d]"
                    >
                      Read the insight
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
