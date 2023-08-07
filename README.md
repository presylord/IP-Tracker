
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>IP-Tracker
</h1>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style&logo=Bootstrap&logoColor=white" alt="Bootstrap" />

<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Leaflet-199900.svg?style&logo=Leaflet&logoColor=white" alt="Leaflet" />
</p>
<img src="https://img.shields.io/github/languages/top/presylord/IP-Tracker?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/presylord/IP-Tracker?style&color=5D6D7E" alt="GitHub code size in bytes" />

</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)

---


## 📍 Overview

The IP-Tracker project is a web application designed to track the geolocation information of an IP address. It provides users with the ability to search and retrieve details such as location, timezone, and Internet Service Provider (ISP) information related to the IP address they input. The project combines React for building user interfaces, Bootstrap for pre-defined styles, and the Leaflet library for rendering interactive maps. With its user-friendly interface and useful geolocation information, the IP-Tracker offers a valuable tool for anyone needing to identify and explore the details of an IP address.

---

## 🧩 Modules


| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                          |
| [index.html](https://github.com/presylord/IP-Tracker/blob/main/index.html)                                    | This code snippet is an HTML file that sets up the basic structure for an IP Address Tracker web application. It includes necessary meta tags, imports required external stylesheets and fonts, and references the main JavaScript file responsible for rendering the application logic.                                                                                                                     |
| [vite.config.js](https://github.com/presylord/IP-Tracker/blob/main/vite.config.js)                            | This code snippet configures Vite, a build tool, to use plugins for React and sets up an alias for the Bootstrap library. It uses the `defineConfig` function to export a configuration object with the specified plugins and alias configuration.                                                                                                                                                           |
| [App.css](https://github.com/presylord/IP-Tracker/blob/main/src\App.css)                                      | The code snippet defines the core visual styling for a search result page. It includes center alignment, flexible layout, header design, and a map container with specific dimensions. The stylesheet also applies styling to prioritize the layout responsiveness and customizes the appearance of the leaflet container.                                                                                   |
| [App.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\App.jsx)                                      | The provided code snippet is a React functional component. It imports useState from the'react' library and some assets like an SVG file and a CSS file. It also imports three custom components: SearchContainer, SearchResult, and LeafletMap. The App component renders these three components within a main tag. This code sets up the core structure of the application's user interface and components. |
| [index.css](https://github.com/presylord/IP-Tracker/blob/main/src\index.css)                                  | This code snippet defines the core styles for a website or application. It sets the font, color scheme, background, and various styles for elements like links, buttons, and headings. It also provides specific styling for different media preferences.                                                                                                                                                    |
| [main.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\main.jsx)                                    | The code snippet is a React application that renders the "App" component inside the "root" element. It also imports custom CSS and Bootstrap's JS and includes a provider component from "UseGlobalContext" for app-wide state management.                                                                                                                                                                   |
| [LeafletMap.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\components\LeafletMap.jsx)             | This code snippet is a React component that renders a Leaflet map using the `MapContainer`, `TileLayer`, `Marker`, and `Popup` components from the `react-leaflet` library. It also utilizes custom marker icon and the `useGlobalContext` hook for retrieving coordinates. The map is centered and zoomed to the provided coordinates and displays a marker at that location.                               |
| [SearchField.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\components\SearchField.jsx)           | The code snippet defines a `SearchContainer` component that uses the `useGlobalContext` hook. It renders a search form with an input field and submit button for searching IP addresses. When the form is submitted, it calls the `handleSubmit` function from the global context.                                                                                                                           |
| [SearchResult.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\components\SearchResult.jsx)         | This code snippet is a React component called SearchResult. It uses a custom hook called useGlobalContext to access data and loading state. The component renders a search result with IP address, location, timezone, and ISP information. The loading state is indicated by a spinner.                                                                                                                     |
| [UseGlobalContext.jsx](https://github.com/presylord/IP-Tracker/blob/main/src\components\UseGlobalContext.jsx) | This code snippet provides a global context for a React application. It defines a context and a provider component that fetches data from an IP geolocation API and stores it in state. It also provides a custom hook for accessing the global context in other components.                                                                                                                                 |
| [index.html](https://github.com/presylord/IP-Tracker/blob/main/src\projectFiles\index.html)                   | This code snippet is a basic HTML template for an IP address tracker web application. It sets up the necessary structure and includes some placeholders for displaying IP address, location, timezone, and ISP information. It also includes a favicon and attribution information for Frontend Mentor and the coder.                                                                                        |
| [styles.scss](https://github.com/presylord/IP-Tracker/blob/main/src\scss\styles.scss)                         | The code snippet imports all of Bootstrap's CSS styles, allowing the website or app to utilize Bootstrap's pre-defined styles and components.                                                                                                                                                                                                                                                                |

</details>

---

## 🚀 Getting Started

### 📦 Installation

1. Clone the IP-Tracker repository:
```sh
git clone https://github.com/presylord/IP-Tracker
```

2. Change to the project directory:
```sh
cd IP-Tracker
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using IP-Tracker

```sh
node app.js
```




---

