import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformWithEsbuild } from 'vite';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const outputRoot = path.join(projectRoot, 'dist');
const siteUrl = 'https://nationalsol.sa';

const blogDataSource = await readFile(path.join(projectRoot, 'src', 'data', 'blog.ts'), 'utf8');
const transformedBlogData = await transformWithEsbuild(blogDataSource, 'blog.ts', {
  loader: 'ts',
  format: 'esm',
});
const blogDataModule = await import(
  `data:text/javascript;base64,${Buffer.from(transformedBlogData.code).toString('base64')}`
);
const { blogPosts } = blogDataModule;

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const jsonLd = (value) => JSON.stringify(value).replaceAll('<', '\\u003c');

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Smart National Solutions',
  alternateName: 'SNS',
  url: siteUrl,
  logo: `${siteUrl}/Logo/SNS-Icon-Logo.svg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  sameAs: [
    'https://www.linkedin.com/company/nationalsol',
    'https://www.youtube.com/@SmartNationalSolution',
    'https://www.instagram.com/nationalsol1/',
    'https://www.facebook.com/nationalsol1',
  ],
};

const prerenderStyles = `
  <style>
    .sns-prerender{font-family:Inter,Arial,sans-serif;color:#0f172a;line-height:1.7;margin:0 auto;max-width:1180px;padding:48px 24px 72px}
    .sns-prerender a{color:#236d8d}.sns-prerender h1{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:.4rem 0 1rem}
    .sns-prerender h2{font-size:1.65rem;line-height:1.25;margin:2.2rem 0 .7rem}.sns-prerender h3{font-size:1.2rem;margin:1.7rem 0 .5rem}
    .sns-prerender p,.sns-prerender li{color:#334155}.sns-prerender img{display:block;height:auto;max-width:100%;border-radius:8px}
    .sns-prerender-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:32px}
    .sns-prerender-card{border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;padding-bottom:22px}.sns-prerender-card h2,.sns-prerender-card p{margin-left:22px;margin-right:22px}
    .sns-prerender-meta{color:#64748b;font-size:.9rem}.sns-prerender-summary{background:#f4f9fb;border-left:4px solid #36a0d0;padding:20px 24px;margin:32px 0}
    .sns-prerender-faq{border-top:1px solid #e2e8f0;margin-top:48px;padding-top:20px}.sns-prerender-source{overflow-wrap:anywhere}
  </style>`;

function renderBlogIndex() {
  const cards = blogPosts.map((post) => `
    <article class="sns-prerender-card">
      <a href="/blog/${escapeHtml(post.slug)}"><img src="${escapeHtml(post.imageUrl)}" width="1600" height="900" alt="${escapeHtml(post.imageAlt)}"></a>
      <h2><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h2>
      <p class="sns-prerender-meta"><time datetime="${escapeHtml(post.datePublished)}">${escapeHtml(post.date)}</time> · ${escapeHtml(post.readTime)}</p>
      <p>${escapeHtml(post.excerpt)}</p>
    </article>`).join('');

  return `${prerenderStyles}
    <div class="sns-prerender">
      <header>
        <p class="sns-prerender-meta">SNS INSIGHTS</p>
        <h1>SAP, AI and Digital Transformation Insights</h1>
        <p>Practical guidance for leaders building connected, trusted, and scalable enterprises in Saudi Arabia and across the GCC.</p>
      </header>
      <main class="sns-prerender-grid" aria-label="SNS expert insights">${cards}</main>
    </div>`;
}

function renderArticle(post) {
  const takeaways = post.keyTakeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const faqs = post.faqs.map((faq) => `
    <section>
      <h3>${escapeHtml(faq.question)}</h3>
      <p>${escapeHtml(faq.answer)}</p>
    </section>`).join('');
  const sources = post.sources.map((source) => `
    <li class="sns-prerender-source"><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('');

  return `${prerenderStyles}
    <article class="sns-prerender">
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Insights</a> / ${escapeHtml(post.category)}</nav>
      <header>
        <p class="sns-prerender-meta">${escapeHtml(post.category)}</p>
        <h1>${escapeHtml(post.title)}</h1>
        <p>${escapeHtml(post.excerpt)}</p>
        <p class="sns-prerender-meta">By ${escapeHtml(post.author)} · <time datetime="${escapeHtml(post.datePublished)}">${escapeHtml(post.date)}</time> · ${escapeHtml(post.readTime)}</p>
      </header>
      <img src="${escapeHtml(post.imageUrl)}" width="1600" height="900" alt="${escapeHtml(post.imageAlt)}">
      <aside class="sns-prerender-summary" aria-labelledby="prerender-takeaways">
        <h2 id="prerender-takeaways">Key takeaways</h2>
        <ul>${takeaways}</ul>
      </aside>
      <div>${post.content}</div>
      <section class="sns-prerender-faq" aria-labelledby="prerender-faqs">
        <h2 id="prerender-faqs">Frequently asked questions</h2>${faqs}
      </section>
      <section aria-labelledby="prerender-sources">
        <h2 id="prerender-sources">Sources and further reading</h2>
        <ul>${sources}</ul>
      </section>
      <p><a href="/contact">Contact SNS about your SAP, AI, or digital transformation program</a></p>
    </article>`;
}

function pageHead({ title, description, keywords, canonical, image, imageAlt, type = 'website', schemas, post }) {
  const articleMeta = post ? `
    <meta data-rh="true" property="article:published_time" content="${escapeHtml(post.datePublished)}">
    <meta data-rh="true" property="article:modified_time" content="${escapeHtml(post.dateModified)}">
    <meta data-rh="true" property="article:section" content="${escapeHtml(post.category)}">` : '';

  return `
    <meta data-rh="true" name="description" content="${escapeHtml(description)}">
    <meta data-rh="true" name="keywords" content="${escapeHtml(keywords)}">
    <link data-rh="true" rel="canonical" href="${escapeHtml(canonical)}">
    <meta data-rh="true" property="og:type" content="${escapeHtml(type)}">
    <meta data-rh="true" property="og:site_name" content="Smart National Solutions">
    <meta data-rh="true" property="og:title" content="${escapeHtml(title)}">
    <meta data-rh="true" property="og:description" content="${escapeHtml(description)}">
    <meta data-rh="true" property="og:url" content="${escapeHtml(canonical)}">
    <meta data-rh="true" property="og:image" content="${escapeHtml(image)}">
    <meta data-rh="true" property="og:image:alt" content="${escapeHtml(imageAlt)}">
    <meta data-rh="true" name="twitter:card" content="summary_large_image">
    <meta data-rh="true" name="twitter:title" content="${escapeHtml(title)}">
    <meta data-rh="true" name="twitter:description" content="${escapeHtml(description)}">
    <meta data-rh="true" name="twitter:image" content="${escapeHtml(image)}">${articleMeta}
    ${schemas.map((schema) => `<script data-rh="true" type="application/ld+json">${jsonLd(schema)}</script>`).join('\n    ')}`;
}

function createPage(template, { title, head, body }) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace('</head>', `${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const template = (await readFile(path.join(outputRoot, 'index.html'), 'utf8'))
  .replaceAll('\r\n', '\n')
  .replaceAll('\r', '\n');
const featuredPost = blogPosts[0];
const blogUrl = `${siteUrl}/blog`;
const blogDescription = 'Expert SNS insights on SAP partners, SAP S/4HANA, SuccessFactors, enterprise AI, Elm, and digital transformation in Saudi Arabia and the GCC.';
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${blogUrl}#blog`,
  name: 'SNS Insights',
  url: blogUrl,
  description: blogDescription,
  inLanguage: 'en',
  publisher: { '@id': `${siteUrl}/#organization` },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `${blogUrl}/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: `${siteUrl}${post.imageUrl}`,
  })),
};
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${blogUrl}#articles`,
  itemListElement: blogPosts.map((post, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: post.title,
    url: `${blogUrl}/${post.slug}`,
  })),
};

const blogTitle = 'SAP, AI and Digital Transformation Insights | SNS';
const blogPage = createPage(template, {
  title: blogTitle,
  head: pageHead({
    title: blogTitle,
    description: blogDescription,
    keywords: 'SAP partner Saudi Arabia, SAP Gold Partner KSA, enterprise AI Saudi Arabia, SAP S/4HANA, SAP SuccessFactors, Elm SNS',
    canonical: blogUrl,
    image: `${siteUrl}${featuredPost.imageUrl}`,
    imageAlt: featuredPost.imageAlt,
    schemas: [organizationSchema, blogSchema, itemListSchema],
  }),
  body: renderBlogIndex(),
});

const prerenderRoot = path.join(outputRoot, 'prerender');
const prerenderArticleRoot = path.join(prerenderRoot, 'blog');
await mkdir(prerenderArticleRoot, { recursive: true });
await writeFile(path.join(prerenderRoot, 'blog.html'), blogPage, 'utf8');

for (const post of blogPosts) {
  const articleUrl = `${blogUrl}/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    headline: post.title,
    description: post.metaDescription,
    image: { '@type': 'ImageObject', url: `${siteUrl}${post.imageUrl}`, width: 1600, height: 900 },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    inLanguage: 'en',
    author: { '@type': 'Organization', name: post.author, url: `${siteUrl}/about` },
    publisher: { '@id': `${siteUrl}/#organization` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: blogUrl },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const page = createPage(template, {
    title: post.seoTitle,
    head: pageHead({
      title: post.seoTitle,
      description: post.metaDescription,
      keywords: post.keywords.join(', '),
      canonical: articleUrl,
      image: `${siteUrl}${post.imageUrl}`,
      imageAlt: post.imageAlt,
      type: 'article',
      schemas: [organizationSchema, articleSchema, breadcrumbSchema, faqSchema],
      post,
    }),
    body: renderArticle(post),
  });
  await writeFile(path.join(prerenderArticleRoot, `${post.slug}.html`), page, 'utf8');
}

console.log(`Prerendered the Blog index and ${blogPosts.length} articles.`);
