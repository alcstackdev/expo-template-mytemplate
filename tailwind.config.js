/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      // Responsive Breakpoints
      screens: {
        'xs': '320px',    // iPhone SE
        'sm': '375px',    // iPhone 12/13/14
        'md': '768px',    // iPad
        'lg': '1024px',   // iPad Pro
        'xl': '1280px',   // Large Tablet
        '2xl': '1536px',  // Desktop
      },
      
      // Responsive Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Responsive Font Sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      fontFamily: {
        'geist': ['Geist_400Regular', 'system-ui', 'sans-serif'],
        'geist-medium': ['Geist_500Medium', 'system-ui', 'sans-serif'],
        'geist-semibold': ['Geist_600SemiBold', 'system-ui', 'sans-serif'],
        'geist-bold': ['Geist_700Bold', 'system-ui', 'sans-serif'],
      },
      
      colors: {
        // Platform-specific colors
        platform: {
          ios: {
            primary: '#007AFF',
            secondary: '#5856D6',
            success: '#34C759',
            warning: '#FF9500',
            error: '#FF3B30',
          },
          android: {
            primary: '#6200EE',
            secondary: '#03DAC6',
            success: '#4CAF50',
            warning: '#FF9800',
            error: '#F44336',
          },
        },
        
        // Light theme colors
        light: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          background: {
            primary: '#ffffff',
            secondary: '#f8fafc',
            tertiary: '#f1f5f9',
            card: '#ffffff',
            modal: '#ffffff',
          },
          text: {
            primary: '#0f172a',
            secondary: '#475569',
            tertiary: '#64748b',
            inverse: '#ffffff',
            muted: '#94a3b8',
          },
          border: {
            primary: '#e2e8f0',
            secondary: '#cbd5e1',
            tertiary: '#f1f5f9',
          },
        },
        // Dark theme colors
        dark: {
          primary: {
            50: '#0c4a6e',
            100: '#075985',
            200: '#0369a1',
            300: '#0284c7',
            400: '#0ea5e9',
            500: '#38bdf8',
            600: '#7dd3fc',
            700: '#bae6fd',
            800: '#e0f2fe',
            900: '#f0f9ff',
          },
          background: {
            primary: '#0f172a',
            secondary: '#1e293b',
            tertiary: '#334155',
            card: '#1e293b',
            modal: '#1e293b',
          },
          text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            tertiary: '#94a3b8',
            inverse: '#0f172a',
            muted: '#64748b',
          },
          border: {
            primary: '#334155',
            secondary: '#475569',
            tertiary: '#1e293b',
          },
        },
      },
    },
  },
  plugins: [],
}