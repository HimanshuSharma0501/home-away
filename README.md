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

#### Setting Up Dark Mode

```sh
npm install next-themes
```

Set up the file ThemeProvider.tsx

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

update file navbar/DarkMode.tsx

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
// import { Moon, Sun } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

This would set up the button which can be used to switch between dark and light mode and system theme would be set as default
