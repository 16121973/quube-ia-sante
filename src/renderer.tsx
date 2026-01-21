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
                    primary: '#2563eb',
                    secondary: '#7c3aed',
                    accent: '#06b6d4',
                    dark: '#1e293b',
                    light: '#f8fafc'
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
