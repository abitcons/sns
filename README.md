# SNS
test development of sns 

## Google Analytics

The site defaults to the dedicated GA4 web stream for `nationalsol.sa`: `G-HXQX92DZ7W`.
Set `VITE_GA_MEASUREMENT_ID` before building only if you need to override it:

```bash
VITE_GA_MEASUREMENT_ID=G-HXQX92DZ7W npm run build
```

The app sends SPA route changes as GA4 `page_view` events.
