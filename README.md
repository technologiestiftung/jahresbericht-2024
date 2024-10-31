![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Jahresbericht 2024

Welcome to the **Jahresbericht 2024** repository! This project is built with Vite and React, providing a modern and fast development environment. Below are setup instructions for running the project locally and steps for deploying it to Netlify.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Deploying to Netlify](#deploying-to-netlify)

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or higher)
- **npm** (usually included with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install Dependencies**

   Run the following command to install all necessary packages:

   ```bash
   npm install
   ```

## Running the Project

To start a local development server, use the following command:

```bash
npm run dev
```

This will start the development server, usually accessible at `http://localhost:5173` (check the terminal output to confirm).

## Building for Production

To build the project for production, run:

```bash
npm run build
```

The output will be generated in the `dist` folder, ready to be deployed.

## Deploying to Netlify

### Steps to Deploy

1. **Login to Netlify**: Go to [Netlify](https://www.netlify.com/) and log in to your account (or create one if you haven’t already).

2. **Create a New Site**:
   - Click **"New site from Git"** and connect your GitHub (or other Git provider) account.
   - Select the repository for **Project Name**.

3. **Configure Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

4. **Deploy**:
   - Click **"Deploy Site"**. Netlify will automatically build and deploy your project.

### Netlify Continuous Deployment

After the initial setup, every push to the main branch will automatically trigger a redeployment on Netlify, ensuring your site stays up-to-date.

---

## TODO (after you generated the repo)

- [ ] Adjust the files under [.github/ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE)
- [ ] If you use staging and main branches use this template for [.github/renovate.json](./.github/renovate.json)

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>technologiestiftung/renovate-config"],
  "baseBranches": ["staging"]
}
```

```bash
npx all-contributors-cli check
npx all-contributors-cli add ff6347 doc
```

You can use it on GitHub just by commenting on PRs and issues:

```plain
@all-contributors please add @ff6347 for infrastructure, tests and code
```

- [ ] Add your project description
- [ ] Get fancy shields at https://shields.io


## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https:/github.com/LuiseBrandenburger"><img src="https://avatars.githubusercontent.com/u/50147356?v=4?s=64" width="64px;" alt="Luise Brandenburger"/><br /><sub><b>Luise Brandenburger</b></sub></a><br /><a href="https://github.com/technologiestiftung/jahresbericht-2024/commits?author=LuiseBrandenburger" title="Code">💻</a> <a href="https://github.com/technologiestiftung/jahresbericht-2024/pulls?q=is%3Apr+reviewed-by%3ALuiseBrandenburger" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https:/github.com/JS-TSB"><img src="https://avatars.githubusercontent.com/u/185074060?v=4?s=64" width="64px;" alt="Jakob Sawal"/><br /><sub><b>Jakob Sawal</b></sub></a><br /><a href="https://github.com/technologiestiftung/jahresbericht-2024/commits?author=JS-TSB" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licensing

Texts and content available as [CC BY](https://creativecommons.org/licenses/by/3.0/de/).

Illustrations by {MARIA_MUSTERFRAU}, all rights reserved.

## Credits

<table>
  <tr>
    <td>
      Made by  <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-berlin.svg" />
      </a>
    </td>
  </tr>
</table>

## Related Projects
