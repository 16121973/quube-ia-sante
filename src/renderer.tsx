import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'QUUBE IA Santé - Formation & Conseil en Intelligence Artificielle'}</title>
        <meta name="description" content="QUUBE accompagne les professionnels de santé et du médico-social dans leur transformation IA : formations, coaching, conseil et audits personnalisés." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#000000',
                    secondary: '#333333',
                    accent: '#666666',
                    dark: '#000000',
                    light: '#ffffff',
                    gray: {
                      50: '#fafafa',
                      100: '#f5f5f5',
                      200: '#e5e5e5',
                      300: '#d4d4d4',
                      400: '#a3a3a3',
                      500: '#737373',
                      600: '#525252',
                      700: '#404040',
                      800: '#262626',
                      900: '#171717'
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body class="font-sans antialiased bg-light text-dark">
        {children}
      </body>
    </html>
  )
})
