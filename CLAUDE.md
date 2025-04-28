# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Serve Commands
- To serve the website locally: `python -m http.server` or `npx http-server`
- After changes, validate HTML: `npx html-validator-cli --file=index.html`
- Validate CSS: `npx stylelint "styles.css"`
- Validate JS: `npx eslint "script.js"`

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper ARIA attributes for accessibility
- Use double quotes for attributes
- Indent with 4 spaces

### CSS
- Follow CSS custom properties (variables) pattern in :root
- Mobile-first responsive design
- Class naming: descriptive, lowercase with hyphens

### JavaScript
- ES6+ features
- Function-based organization
- Add null/undefined checks before accessing properties
- Create separate functions for distinct functionality
- Use addEventListener instead of inline event handlers

### General
- Follow minimalist design principles (Dieter Rams)
- Prioritize accessibility features
- Maintain dark mode compatibility
- Use smooth transitions/animations sparingly