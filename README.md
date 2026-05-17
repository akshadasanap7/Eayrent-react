# 🏠 EasyRent — React Rental Property App

A modern rental property listing application built with **React + Vite**.

## 🔗 Live Links

| | URL |
|---|---|
| 🌐 **Live App (Client)** | https://easyrent-react.vercel.app *(deploy to update)* |
| 📦 **Repository** | https://github.com/your-username/easyrent-react |

> **To deploy:** Push this repo to GitHub, then connect to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant hosting.

---

## ✨ Features

- **Property Listings** — 8 sample properties (Apartment, House, Studio, Villa)
- **Filter & Search** — Real-time search by title/location, filter by type, max price (slider), bedrooms, and sort order
- **Property Detail** — Full detail view with amenities, landlord contact, and save functionality
- **Multilingual Support** — English 🇬🇧 / French 🇫🇷 / Spanish 🇪🇸 via React Context
- **Dark Modern UI** — Custom dark teal theme, fully responsive

## 🧱 Concepts Used

| Concept | Usage |
|---|---|
| `useState` | Filters state, saved state, language state |
| `useContext` | Language context shared across all components |
| `useMemo` | Optimized filter/search computation |
| `React Router v7` | Client-side routing (`/`, `/listings`, `/listings/:id`, `/about`) |
| `react-hot-toast` | Toast notifications for contact/save actions |
| Props & Components | Reusable `PropertyCard`, `Filters`, `Navbar` |
| Conditional Rendering | No-results state, available/rented badges |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── context/
│   └── LanguageContext.jsx   # Multilingual context
├── data/
│   └── properties.js         # Property data + translations
├── components/
│   ├── Navbar.jsx
│   ├── PropertyCard.jsx
│   └── Filters.jsx
├── pages/
│   ├── Home.jsx
│   ├── Listings.jsx
│   ├── PropertyDetail.jsx
│   └── About.jsx
├── App.jsx                   # Routes + layout
└── App.css                   # All styles
```
