This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Remove the Bootstraped File and Create Directories and Files as needed in this Project

app/bookings
app/checkout
app/favorites
app/profile
app/properties
app/rentals
app/reviews

\*each folder would have page.tsx file in it so that /folderName could be used as Routes
every file would have a syntax as

```tsx
import React from "react";
function functionName() {
  return <h1 className="text-3xl">Title</h1>;
}
export default functionName;
```

## Install Shadcn UI

```sh
npx shadcn-ui@latest
```

Style->NewYork
BaseColor->Zinc
CSS Variables->Yes

## Install the Shadcn Components

```sh
npx shadcn-ui@latest add button
npx shadcn-ui@latest add breadcrumb calendar card checkbox dropdown-menu input label popover scroll-area select seperator table textarea toast
```

Create folder for shadcn Components
components/ui
components/card
components/form
components/home
components/navbar
components/properties

### NavBar-Setup

navbar/
-DarkMode.tsx
-LinksDropDown.tsx
-Logo.tsx
-NavBar.tsx
-NavSearch.tsx
-SignOut.tsx
-UserIcon.tsx
