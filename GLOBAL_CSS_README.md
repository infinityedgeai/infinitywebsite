# Global CSS Documentation

## Overview
This global CSS file (`static/global.css`) contains all common CSS rules used across the Infinity Edge AI website.

## What's Included

### 1. Global Reset & Base Styles
- Universal CSS reset
- Base typography using Montserrat font
- Global box-sizing and scroll behavior

### 2. Common Components

#### Navigation & Header
- Sticky header styling
- Navigation menu with dropdowns
- Mobile responsive hamburger menu
- Logo styling

#### Buttons
- Primary button styles with hover effects
- Consistent button appearance across pages

#### Sections
- Default section padding and styling
- Centered content layout
- Base typography for headings and paragraphs

#### Footer
- Standard footer styling
- Copyright and company information layout

#### Back-to-top Button
- Fixed positioning and styling
- Show/hide functionality styles

### 3. Utility Classes

#### Layout Utilities
- `.text-center`, `.text-left`, `.text-right` - Text alignment
- `.hidden`, `.visible` - Display control
- `.flex`, `.flex-center`, `.grid` - Display types
- `.relative`, `.absolute`, `.fixed` - Positioning

#### Spacing Utilities
- Margin classes: `.m-0` to `.m-5`, `.mt-0` to `.mt-5`, `.mb-0` to `.mb-5`
- Padding classes: `.p-0` to `.p-5`, `.pt-0` to `.pt-5`, `.pb-0` to `.pb-5`

#### Typography Utilities
- Font weights: `.font-weight-300` to `.font-weight-700`
- Font sizes: `.font-size-sm` to `.font-size-3xl`

#### Color Utilities
- Text colors: `.text-primary`, `.text-secondary`, `.text-white`, `.text-gray`
- Background colors: `.bg-primary`, `.bg-secondary`, `.bg-white`, `.bg-light`

#### Border & Shadow Utilities
- Border styles: `.border`, `.border-radius`, `.border-radius-circle`
- Shadow effects: `.shadow-sm`, `.shadow`, `.shadow-lg`, `.shadow-xl`

#### Transition Utilities
- `.transition`, `.transition-fast`, `.transition-slow`

#### Size Utilities
- Width: `.w-25`, `.w-50`, `.w-75`, `.w-100`, `.w-auto`
- Height: `.h-25`, `.h-50`, `.h-75`, `.h-100`, `.h-auto`

### 4. Mobile Responsiveness
- Mobile navigation menu styles
- Responsive adjustments for smaller screens
- Mobile-specific dropdown behaviors

## Usage

### In HTML Files
```html
<!-- Include in the <head> section -->
<link href="static/global.css" rel="stylesheet">
<!-- For subdirectory pages -->
<link href="../static/global.css" rel="stylesheet">
```

### Page-Specific Styles
After including the global CSS, add page-specific styles in `<style>` tags for unique elements:

```html
<style>
  /* Page-specific styles only */
  .hero-section {
    /* Custom hero styles */
  }
</style>
```

## Benefits
1. **Consistency** - All pages share the same base styles and components
2. **Maintainability** - Update common styles in one place
3. **Performance** - Reduces CSS duplication across pages
4. **Scalability** - Easy to add new pages using existing styles
5. **Utility Classes** - Quick styling without custom CSS

## File Structure
```
infinitywebsite/
├── static/
│   └── global.css          # Global styles
├── index.html              # Homepage with hero-specific styles
├── proiecte/
│   └── agrifuture.html     # Project page with page-specific styles
└── anunturi/
    └── placeholder.html    # Announcement page with page-specific styles
```