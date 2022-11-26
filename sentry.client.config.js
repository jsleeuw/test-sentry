// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN =
  process.env.SENTRY_DSN ||
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://28659ad25e89418c91af1ed8c89fe825@o4504215257284608.ingest.sentry.io/4504222823677952"

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  debug: true,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
