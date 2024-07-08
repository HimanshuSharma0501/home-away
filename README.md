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

*each folder would have page.tsx file in it so that /folderName could be used as Routes
every file would have a syntax as 

```tsx
import React from "react";
function functionName() {
  return <h1 className="text-3xl">Title</h1>;
}
export default functionName;
```
