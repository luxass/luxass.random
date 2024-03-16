import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
    }),
  ],
  compressHTML: false,
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    functionPerRoute: false,
  }),
})
