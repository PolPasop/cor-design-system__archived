---
layout: layouts/base.njk
title: Colour
permalink: /colour.html
eleventyNavigation:
  key: Colour
  order: 1
---

## Colour contrast

---

### CoR Website requirement

**Text should have contrast ratio of at least 4.5:1**

Make sure that there’s enough colour contrast in your designs; the contrast ratio between a text and its background should be at least 4.5:1. This helps low vision users in particular.

There is an exception for large or bold text. Text that is larger than 24px or bold text that is larger than 18px should have a contrast ratio of at least 3:1.

- [level AA of the Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/TR/WCAG21/#contrast-minimum)

---

### What does this mean for web accessibility?

On the web, the use of complementary colors is about finding shades that provide enough contrast between content and the background for anyone with low vision impairments and color deficiencies.

This doesn't mean colors should only be limited to contrasting colors, but instead that care should be taken to ensure a level of contrast in body text, logos, and essential diagrams or other pieces of content. There are a number of tools to help designers and developers check color contrast, including these listed below:

### Tools

- [Tanaguru Contrast Finder](http://contrast-finder.tanaguru.com/) (Web)
- [Contrast Ratio by Lea Verou](http://leaverou.github.io/contrast-ratio/) (Web)
- [Colour Contrast Analyzer by TPGi](https://www.tpgi.com/color-contrast-checker/) (Windows, Mac)
- [Color Contrast Checker by WebAIM](https://webaim.org/resources/contrastchecker/) (Web)
- [Contrast Finder](https://app.contrast-finder.org/) (Web)

These tools test your colors against a contrast ratio.

A contrast ratio of 4.5:1 is the minimum Web Content Accessibility Guideline (WCAG) 2 standard for regular sized text.

The level to which a pair of colors are contrasted is measured with a grade system, known as "levels of conformance". The highest attainable grade is AAA, which requires a 7:1 contrast ratio. W3C states that because it is not always possible to reach the AAA level of conformance across entire sites, the goal is to get the highest level in crucial areas across a site, such as headlines and body text.

### What else can we do?

- The larger the font and wider the stroke, the more legible it will be with lower contrast. Therefore the contrast requirement for larger font is lower. W3C recommends starting at 18pt regular weight or 14pt bold text.

- Steer clear of text-based images and use text wherever possible. If that's not possible, consider using a high resolution for text images. Speaking of text images, don't forget to fill out the alt text.

## Sources

- [What is color contrast?](https://www.a11yproject.com/posts/2015-01-05-what-is-color-contrast/)
