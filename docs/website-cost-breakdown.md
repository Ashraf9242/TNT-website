# TNT Website Cost Breakdown

**Estimate date:** 14 September 2026  
**Currency:** Omani Rial (OMR)  
**Estimate type:** Minimum practical budget for the current website

## Summary

The minimum practical cost for the current TNT website is:

- **One-time build cost:** **180 OMR**
- **Minimum yearly running cost:** **54 OMR per year**
- **Minimum first-year total:** **234 OMR**
- **Minimum ongoing cost after year one:** **54 OMR per year**

This is a planning estimate, not an invoice or a hosting-provider quotation. Final prices depend on the chosen domain registrar, hosting provider, email provider, taxes, and exchange rates.

## 1. One-Time Build Cost

| Work | Minimum cost |
| --- | ---: |
| Content preparation and page structure | 30 OMR |
| Astro frontend implementation and responsive layouts | 90 OMR |
| Contact form, server endpoint, validation, and basic security | 30 OMR |
| Accessibility, SEO basics, testing, and deployment documentation | 30 OMR |
| **One-time total** | **180 OMR** |

This includes the current website scope:

- Arabic RTL website pages
- Responsive desktop, tablet, and mobile layouts
- Light and dark themes
- Local images and fonts
- Service, systems, projects, clients, pricing, and contact pages
- Contact quotation form
- Server-side form validation and rate limiting
- Basic metadata, sitemap, robots rules, and structured business data
- Production build using Astro and the Node adapter

## 2. Minimum Yearly Running Cost

| Service | Minimum estimate |
| --- | ---: |
| Domain name, such as `.com` | 6 OMR/year |
| Node-compatible hosting | 48 OMR/year |
| SSL certificate | 0 OMR/year |
| Transactional email | 0 OMR/year if an existing SMTP service is used |
| **Minimum yearly total** | **54 OMR/year** |

The hosting estimate is based on a low-cost plan of approximately **4 OMR per month**. The chosen host must support a Node.js server because this project currently uses Astro's server output.

A free host may reduce the cash cost, but it can introduce sleeping services, slower first requests, usage limits, or less predictable form delivery. The 54 OMR figure is therefore the minimum practical production budget rather than the absolute cheapest experiment.

## 3. First-Year Calculation

```text
One-time build       180 OMR
Domain and hosting    54 OMR
---------------------------
First-year minimum   234 OMR
```

## 4. Optional Maintenance

Maintenance is not included in the 234 OMR minimum. A small maintenance plan can be added when the business needs regular support.

| Optional service | Estimate |
| --- | ---: |
| Content or image updates | 5-10 OMR per update |
| Technical maintenance | 15 OMR/month |
| Annual maintenance total | 180 OMR/year |
| Backup and monitoring setup | 10-25 OMR one time |

With the optional 15 OMR/month maintenance plan:

```text
First-year minimum       234 OMR
Annual maintenance       180 OMR
--------------------------------
First year with support  414 OMR
```

## 5. Costs Not Included

The minimum estimate does not include:

- Paid advertising or social media management
- Professional copywriting or translation approval
- New photography or video production
- Premium stock images, fonts, plugins, or SaaS subscriptions
- Paid business email mailboxes
- WhatsApp Business API or CRM integration
- Online payments or e-commerce
- Major redesigns or new page types
- Hosting-provider taxes or domain renewal price changes
- Emergency work outside the agreed maintenance scope

## 6. Recommended Budget

For a simple launch with no optional services, reserve **234 OMR for the first year**.

For a more dependable business setup with support, backups, and paid email, reserve approximately **400-450 OMR for the first year**. This higher range is a safer operating budget; the 234 OMR figure is the minimum version.

## 7. Important Hosting Note

The current project uses:

```text
output: "server"
adapter: @astrojs/node
```

It therefore needs Node-compatible hosting. A static-only host would require changing the project to a static output and replacing or moving the server-side quotation endpoint before deployment.

## Final Price

For quoting the current website as a minimum complete project:

> **234 OMR for the first year, including the website build and minimum domain/hosting costs.**

After the first year, the minimum recurring infrastructure budget is:

> **54 OMR per year, excluding optional maintenance.**
