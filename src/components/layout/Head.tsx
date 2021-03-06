// import { isBrowser } from '@unly/utils'
import NextHead from 'next/head'
import React from 'react'
import { Head as Context } from '@state/head'
import useHeadContext from '@hooks/useHead'

// import { NRN_DEFAULT_FONT, NRN_DEFAULT_SERVICE_LABEL } from '../../constants'
// import { I18nLocale } from '../../types/i18n/I18nLocale'
// import { SUPPORTED_LOCALES } from '../../utils/i18n/i18n'

export interface HeadProps {
  head?: Context
}

/**
 * Custom Head component
 *
 * https://github.com/vercel/next.js#populating-head
 */
const Head = (): JSX.Element => {
  const head = useHeadContext()

  if (process.browser) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const WebFontLoader = require('webfontloader')

    // Load our fonts. Until they're loaded, fallback fonts will be used (configured in MultiversalGlobalStyles)
    // This fixed an issue when loading fonts from external sources that don't show the text until the font is loaded
    // With this, instead of not showing any text, it'll show the text using its fallback font, and then show the font once loaded
    // XXX See https://github.com/typekit/webfontloader#custom
    WebFontLoader.load({
      google: {
        families: ['Roboto:300,400,700']
      }
    })
  }

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{head?.seoTitle}</title>
      <meta name="description" content={head?.seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png?v=E6w3p0w8MX"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png?v=E6w3p0w8MX"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png?v=E6w3p0w8MX"
      />
      <link rel="manifest" href="/site.webmanifest?v=E6w3p0w8MX" />
      <link rel="shortcut icon" href="/favicon.ico?v=E6w3p0w8MX" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>

      {/* Perf optimisation (preload normal and bold fonts because they're the most used) - See https://web.dev/uses-rel-preload*/}
      {/* TODO See if it's actually a good thing, seems to conflict with WebFontLoader - See https://github.com/GoogleChrome/lighthouse/issues/10892 */}
      {/* <link
        rel="preload"
        as="style"
        href={'/static/fonts/NeuzeitGrotesk/font.css'}
      />
      <link
        rel="preload"
        as="font"
        href={'/static/fonts/NeuzeitGrotesk/NeuzeitGrotesk-bold.woff'}
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={'/static/fonts/NeuzeitGrotesk/NeuzeitGrotesk-bold.woff2'}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={'/static/fonts/NeuzeitGrotesk/NeuzeitGrotesk-black.woff'}
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={'/static/fonts/NeuzeitGrotesk/NeuzeitGrotesk-black.woff2'}
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}

      {/* {SUPPORTED_LOCALES.map((supportedLocale: I18nLocale) => {
        // Google best practice for SEO https://webmasters.googleblog.com/2011/12/new-markup-for-multilingual-content.html
        // Google accepts relative links for hreflang
        // See https://stackoverflow.com/questions/28291574/are-relative-links-valid-in-link-rel-alternate-hreflang-tags
        // See https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html
        return (
          <link
            key={supportedLocale?.name}
            rel="alternate"
            hrefLang={supportedLocale?.name || 'en'}
            href={`/${supportedLocale?.name || 'en'}`}
          />
        )
      })} */}

      <meta property="og:url" content={head?.seoUrl} />
      <meta property="og:title" content={head?.seoTitle} />
      <meta property="og:description" content={head?.seoDescription} />
      {/* <meta name="twitter:site" content={head?.seoUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={head?.seoImage} />
      <meta property="og:image" content={head?.seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}

      {/* Detect outdated browser and display a popup about how to upgrade to a more recent browser/version */}
      {/* XXX See public/static/CDN/README.md */}
      {/*
        XXX DISABLED because of https://github.com/mikemaccana/outdated-browser-rework/issues/57#issuecomment-620532590
          TLDR; Display false-positive warnings on embedded browsers if they're too old and the user can't do anything about it (e.g: Facebook Chrome, Linkedin Chrome, etc.)
      */}
      {/*<script async={true} src="https://storage.googleapis.com/the-funding-place/assets/libs/outdated-browser-rework/outdated-browser-rework.min.js" />*/}
      {/*<link rel="stylesheet" href="https://storage.googleapis.com/the-funding-place/assets/libs/outdated-browser-rework/outdated-browser-rework.css" />*/}
    </NextHead>
  )
}

export default Head
