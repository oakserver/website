import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head lang="en-AU">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="oakserver.org" />
        <meta name="twitter:site" content="@kitsonk" />
        <meta name="twitter:creator" content="@kitsonk" />

        <meta property="og:site_name" content="oak: a middleware framework" />
        <meta property="og:locale" content="en_AU" />

        <meta
          name="keywords"
          content="deno, node, bun, cloudflare workers, middleware"
        />

        <title>oak</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-white dark:bg-black text-black dark:text-white">
        <Component />
      </body>
    </html>
  );
}
