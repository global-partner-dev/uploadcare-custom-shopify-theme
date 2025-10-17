---
description: Repository Information Overview
alwaysApply: true
---

# Shopify Theme Information

## Summary

This repository contains a Shopify theme based on Dawn (version 15.4.0), Shopify's reference theme. It includes all necessary components for a complete Shopify storefront including templates, sections, snippets, assets, and localization files. The theme appears to have integrations with Shogun and PageFly page builders.

## Structure

- **assets/**: CSS, JavaScript, and media files for theme styling and functionality
- **blocks/**: Reusable content blocks for theme sections
- **config/**: Theme configuration and settings
- **layout/**: Theme layout templates
- **locales/**: Internationalization files for multiple languages
- **sections/**: Modular, reusable content sections
- **snippets/**: Reusable code fragments
- **templates/**: Page templates for different content types

## Language & Runtime

**Language**: Liquid (Shopify template language), JavaScript, CSS
**Version**: Dawn theme 15.4.0
**Framework**: Shopify Online Store 2.0

## Configuration

**Main Configuration Files**:

- `config/settings_schema.json`: Theme settings definition
- `config/settings_data.json`: Theme settings values
- `templates/*.json`: JSON template files (Online Store 2.0)

## Theme Features

**Template Types**:

- Product pages
- Collection pages
- Blog and article pages
- Cart
- Customer accounts
- Static pages
- Search results

**Section Types**:

- Header and footer
- Product displays
- Collection lists
- Rich text
- Image with text
- Multicolumn layouts
- Newsletter signup
- Contact forms

**Third-party Integrations**:

- Shogun Page Builder (templates and sections)
- PageFly Page Builder (snippets and sections)

## Localization

**Supported Languages**:
Multiple languages supported through locale files including English, French, German, Spanish, Japanese, Chinese, and many others.

**Translation Files**:

- `locales/*.json`: Language translation files
- `locales/*.schema.json`: Schema definitions for translations

## Assets

**JavaScript Components**:

- Cart functionality
- Customer account features
- Product variant selection
- Animations and interactions
- Faceted search

**CSS Components**:

- Layout styling
- Component-specific styles
- Responsive design elements

## Development

**Development Pattern**:

- Liquid templates for server-rendered content
- JSON templates for section-based content
- JavaScript for client-side interactivity

**Customization Points**:

- Theme settings in admin
- Section and block configurations
- Template assignments
- Custom CSS/JS through assets
