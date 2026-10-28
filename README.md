# PenguinCrew

A bookkeeping and expense-splitting app for travel groups. No dependencies to install or backend to configure—open the app in your browser to create trips, record expenses, and review how to settle up.

## Try It Online

[Open PenguinCrew](https://jennycheng25.github.io/trip-split-app/)

## Features

- Create multiple trips and manage the members and bills for each one separately.
- Record bills, expense items, payers, taxes, and tips.
- Choose which members share each expense item, then review each member's balance and suggested transfers.
- Upload or take a photo of a receipt and use Chinese or English OCR to recognize expense items. Review the results before adding them.
- Install the app as a Progressive Web App (PWA) and cache its pages for offline access.

## How to Use

1. Open the [web app](https://jennycheng25.github.io/trip-split-app/).
2. Create or select a trip, then add the people traveling with you.
3. Create a bill. Enter the payer, date, tax, and tip, then add expense items and select who shares each one.
4. Review suggested transfers between members on the **Settlement** page. You can also add a receipt photo to a bill and scan its items.

The app displays a sample trip and bill the first time you open it to help you explore the interface. You can edit or delete the sample data.

## Data and Privacy

Trips, bills, and receipt photos are stored in your current browser's local storage. The app has no account system, and data does not sync automatically across devices. Clearing your browser's site data may erase your records, so keep a separate copy of anything important.

Cloudflare Web Analytics is an optional feature that measures website traffic. It does not read trip, bill, or receipt data. Analytics are disabled by default; tracking starts only after a site token is configured. Cloudflare states that Web Analytics does not collect personal data about visitors.

Receipt OCR uses Tesseract.js. The recognition library is loaded from jsDelivr the first time you use it, and recognition runs locally in your browser. Check the results before using them.

## Traffic Analytics

This project uses Cloudflare Web Analytics, which is disabled by default. To enable it:

1. Open **Web Analytics** in the Cloudflare dashboard, add the `jennycheng25.github.io` site, and create a site token.
2. Add the token to the `CLOUDFLARE_WEB_ANALYTICS_TOKEN` constant near the top of `index.html`.
3. Commit and deploy to GitHub Pages. You can then view visitor and page-view trends in the Cloudflare Web Analytics dashboard.

This is a single-page app, so analytics primarily count page loads and do not distinguish between in-app views such as bills, members, and settlements. Do not send trip or bill details as analytics events.

## Run Locally

This is a static website with no build step. Serve the project directory using any local static HTTP server, then open the corresponding address in your browser. Service Worker and PWA offline features require access over HTTP or HTTPS.

## Deployment

The repository's GitHub Actions workflow deploys the repository root to GitHub Pages when changes are pushed to the `main` branch or when the workflow is triggered manually. Before the first deployment, set the source to **GitHub Actions** under **Settings → Pages → Build and deployment** in the repository.

## Technology

- Native HTML, CSS, and JavaScript
- `localStorage` for local data storage
- Service Worker and Web App Manifest
- Tesseract.js for receipt OCR
