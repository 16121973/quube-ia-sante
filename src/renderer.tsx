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
                    // Couleurs principales QUUBE
                    'quube-black': '#000000',
                    'quube-yellow': '#fcf474',
                    'quube-yellow-neon': '#dbff9b',
                    
                    // Couleurs d'accent QUUBE
                    'quube-blue': '#0082f3',
                    'quube-blue-dark': '#1e51f7',
                    'quube-blue-light': '#2895f7',
                    'quube-pink': '#bb4198',
                    'quube-red': '#ea384c',
                    'quube-green': '#027a48',
                    
                    // Gris QUUBE
                    'quube-gray-dark': '#5d6c7b',
                    'quube-gray': '#758696',
                    'quube-gray-light': '#aaadb0',
                    
                    // Alias pour utilisation simplifiée
                    primary: '#fcf474',      // Jaune signature
                    secondary: '#0082f3',    // Bleu
                    accent: '#000000',       // Noir
                    dark: '#000000',
                    light: '#ffffff',
                    
                    gray: {
                      50: '#fafafa',
                      100: '#f3f3f3',
                      200: '#e2e2e2',
                      300: '#c8c8c8',
                      400: '#aaadb0',
                      500: '#758696',
                      600: '#5d6c7b',
                      700: '#06282d',
                      800: '#000000',
                      900: '#000000'
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
