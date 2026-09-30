const key = '10b4101cfb8a70ec27f079544ca4f50119721e99';
const host = 'nationalsol.sa';
const siteUrl = `https://${host}`;
const urlList = [
  `${siteUrl}/blog`,
  `${siteUrl}/blog/choose-sap-partner-saudi-arabia-gcc`,
  `${siteUrl}/blog/sap-s4hana-implementation-saudi-arabia-roadmap`,
  `${siteUrl}/blog/sap-successfactors-snam-saudi-hr-operations`,
  `${siteUrl}/blog/trusted-enterprise-ai-saudi-arabia-sns-ai-lab`,
  `${siteUrl}/blog/elm-sns-digital-transformation-saudi-arabia`,
];

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

if (![200, 202].includes(response.status)) {
  const detail = await response.text();
  throw new Error(`IndexNow submission failed with HTTP ${response.status}${detail ? `: ${detail}` : ''}`);
}

console.log(`IndexNow accepted ${urlList.length} URLs with HTTP ${response.status}.`);
