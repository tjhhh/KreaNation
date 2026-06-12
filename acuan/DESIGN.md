---
name: Berkarya Modernist
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#926e6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00015'
  primary: '#b60013'
  on-primary: '#ffffff'
  primary-container: '#e01a22'
  on-primary-container: '#fff6f5'
  inverse-primary: '#ffb4ac'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#565a5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f7274'
  on-tertiary-container: '#f6f8fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is built to empower and inspire the next generation of Indonesian creators and tech innovators. The personality is **energetic, professional, and sophisticated**, bridging the gap between youthful ambition and industry-standard excellence.

The aesthetic leans into **High-Fidelity Minimalism**, combining the structured clarity of Stripe with the approachable warmth of Airbnb. It prioritizes high-contrast focal points against expansive white space to ensure the content remains the hero. The interface should feel "expensive" yet accessible—using precise alignment, generous breathing room, and premium micro-interactions to signal quality and reliability.

## Colors

The palette is anchored by **Vibrant Red**, used strategically for primary actions and brand signifiers to inject energy into the layout. 

- **Primary (#E01A22):** Used for CTA buttons, active states, and high-impact accents.
- **Secondary / Slate (#0F172A):** Applied to headings and primary body text to provide a grounded, professional contrast.
- **Surface / Background (#F8FAFC):** A very subtle off-white used for section backgrounds to distinguish content blocks from the pure white page background.
- **Neutral / Muted (#64748B):** Reserved for secondary text, icons, and borders to maintain a clean hierarchy.

## Typography

This design system utilizes a dual-font strategy. **Montserrat** provides a bold, geometric presence for headlines, echoing a sense of modern leadership and confidence. **Inter** is used for all functional and body copy to ensure maximum legibility and a systematic, clean feel.

Headlines should utilize tight letter-spacing and high font weights to create a sense of urgency and impact. Body text maintains generous line-heights to support long-form reading across educational and technical content.

## Layout & Spacing

The system follows a **Fluid Grid** logic within a maximum container width of 1280px. A strict 8px-based spacing scale ensures mathematical consistency across all margins and paddings.

- **Desktop:** 12-column grid with 24px gutters and 64px side margins.
- **Tablet:** 8-column grid with 24px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.

Whitespace is used aggressively to separate disparate concepts. Between major sections, use `xl` (64px) spacing. Within card components or content blocks, use `md` (24px) for padding.

## Elevation & Depth

To maintain the "Stripe-inspired" high-fidelity look, depth is communicated through **Soft Ambient Shadows** rather than heavy borders. 

1.  **Level 0 (Flat):** Primary background surfaces.
2.  **Level 1 (Subtle):** Default card state. Shadow: `0px 2px 4px rgba(15, 23, 42, 0.04), 0px 4px 12px rgba(15, 23, 42, 0.03)`.
3.  **Level 2 (Elevated/Hover):** Interactive elements. Shadow: `0px 10px 15px -3px rgba(15, 23, 42, 0.08), 0px 4px 6px -2px rgba(15, 23, 42, 0.03)`.
4.  **Level 3 (Overlays):** Modals and dropdowns. Use a larger blur radius (24px+) with 10% opacity for a soft, floating effect.

Avoid using pure black shadows; always tint shadows with the Secondary Slate color to maintain a premium feel.

## Shapes

The shape language is defined by **Large Rounded Corners**, specifically following the `2xl` preference. This softens the professional tone, making the tech-focused platform feel approachable and modern.

- **Small Components (Buttons, Inputs):** 8px (`rounded-md`).
- **Medium Components (Cards, Modals):** 16px (`rounded-xl`).
- **Large Components (Sections, Feature Blocks):** 24px (`rounded-2xl`).

## Components

### Buttons
- **Primary:** Solid Red background, White text. High-contrast, no border.
- **Secondary:** Transparent background, Slate text, subtle 1px border (#E2E8F0).
- **Sizing:** Large height (48px or 56px) with horizontal padding 2x the vertical padding.

### Cards
- Pure white background with the Level 1 shadow. 
- Padding should be 24px (`md`) or 32px (`lg`) depending on content density.
- On hover, cards should lift slightly using the Level 2 shadow.

### Input Fields
- Subtle gray background (#F1F5F9) that transitions to White on focus.
- 1px border (#E2E8F0) that turns Red (#E01A22) on focus.
- Labels are always `label-md` in Slate, placed above the field.

### Chips & Tags
- Used for categories like "Technology" or "Design."
- Light gray background with Slate text for inactive; light red tint with Red text for active/highlighted.

### Lists
- Clean rows separated by thin 1px lines (#F1F5F9).
- Use 16px vertical padding for list items to maintain the "airy" feel of the design system.