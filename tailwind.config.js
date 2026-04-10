/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface layers — differentiated by subtle value shifts
        surface: {
          0: '#ffffff',
          1: '#f7f7f8',
          2: '#f0f0f2',
          3: '#e8e8eb',
        },
        // Borders
        border: {
          DEFAULT: '#e2e2e5',
          strong: '#c8c8cc',
        },
        // Text hierarchy
        text: {
          primary:   '#0f0f10',
          secondary: '#5c5c66',
          tertiary:  '#9898a0',
        },
        // Single accent — used intentionally
        accent: {
          DEFAULT: '#2563eb',
          subtle:  '#eff4ff',
        },
        // Semantic — status indicators
        status: {
          active:   '#16a34a',
          invited:  '#d97706',
          disabled: '#9ca3af',
          off:      '#9ca3af',
        },
        // Semantic — permission badges
        badge: {
          admin:      { DEFAULT: '#ea580c', subtle: '#fff7ed' },
          accountant: { DEFAULT: '#7c3aed', subtle: '#f5f3ff' },
        },
        // DSN feedback codes
        feedback: {
          ok:   { DEFAULT: '#16a34a', subtle: '#f0fdf4' },
          warn: { DEFAULT: '#d97706', subtle: '#fffbeb' },
        },
        // File category colors
        category: {
          payslips: { DEFAULT: '#2563eb', subtle: '#eff4ff' },
          exports:  { DEFAULT: '#7c3aed', subtle: '#f5f3ff' },
          fsn:      { DEFAULT: '#ea580c', subtle: '#fff7ed' },
          feedback: { DEFAULT: '#16a34a', subtle: '#f0fdf4' },
          other:    { DEFAULT: '#9898a0', subtle: '#f7f7f8' },
        },
        // shadcn/ui semantic aliases (maps to CSS vars in index.css)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input:  'hsl(var(--input))',
        ring:   'hsl(var(--ring))',
      },
      fontFamily: {
        // System font stack — no web fonts
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          '"Fira Code"',
          '"Fira Mono"',
          '"Roboto Mono"',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // Type scale — size and weight carry meaning, not personality
        h1:      ['1.5rem',   { lineHeight: '2rem',    fontWeight: '600' }],
        h2:      ['1.25rem',  { lineHeight: '1.75rem', fontWeight: '600' }],
        h3:      ['1rem',     { lineHeight: '1.5rem',  fontWeight: '600' }],
        h4:      ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        body:    ['0.875rem', { lineHeight: '1.375rem', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        caption: ['0.75rem',  { lineHeight: '1rem',    fontWeight: '400' }],
        label:   ['0.6875rem',{ lineHeight: '1rem',    fontWeight: '500', letterSpacing: '0.04em' }],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // Functional animation only — short durations
      transitionDuration: {
        DEFAULT: '150ms',
        fast:    '100ms',
        base:    '150ms',
        slow:    '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // Elevation — surface layering first
      boxShadow: {
        sm:  '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        md:  '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
        lg:  '0 10px 15px -3px rgb(0 0 0 / 0.06), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
      },
    },
  },
  plugins: [],
}
