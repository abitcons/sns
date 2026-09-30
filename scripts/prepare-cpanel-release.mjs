import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const distRoot = path.join(projectRoot, 'dist');
const releaseRoot = path.join(projectRoot, 'cpanel-release');

await mkdir(releaseRoot, { recursive: true });

for (const entry of await readdir(releaseRoot, { withFileTypes: true })) {
  if (entry.isFile() && /^(bundle-|style-).+\.(js|css)(\.br)?$/.test(entry.name)) {
    await rm(path.join(releaseRoot, entry.name));
  }
}

await rm(path.join(releaseRoot, 'blog'), { recursive: true, force: true });

const rootFiles = await readdir(distRoot, { withFileTypes: true });
for (const entry of rootFiles) {
  if (
    entry.isFile() &&
    (/^(bundle-|style-).+\.(js|css)(\.br)?$/.test(entry.name) ||
      ['index.html', '.htaccess', 'robots.txt', 'sitemap.xml', 'llms.txt', '10b4101cfb8a70ec27f079544ca4f50119721e99.txt'].includes(entry.name))
  ) {
    await cp(path.join(distRoot, entry.name), path.join(releaseRoot, entry.name), { force: true });
  }
}

for (const directory of ['prerender', 'assets']) {
  const source = path.join(distRoot, directory);
  try {
    await cp(source, path.join(releaseRoot, directory), { recursive: true, force: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

await mkdir(path.join(releaseRoot, 'images'), { recursive: true });
await cp(path.join(distRoot, 'images', 'blog'), path.join(releaseRoot, 'images', 'blog'), {
  recursive: true,
  force: true,
});

console.log('Prepared the prebuilt cPanel release.');
