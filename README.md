## TASK MANAGEMENT APPLICATION

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Before running the project please install first the depedencies below:

```bash
"prisma": "^5.6.0",
"@prisma/client": "^5.6.0",
"cookies-next": "^4.1.0",
"dateformat": "^5.0.3",
"dotenv": "^16.3.1",
"firebase": "^10.7.0",
"react-fade-in": "^2.0.1",
```

After, installing dependcies setup your envirinment variable for your postgresSQL
After that you can now run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

**NOTE**

When deploying this project in vercel you might encounter a error realated to Prisma Client.
If you do encounter it, check this documentation [Vercel build dependency caching workaround](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
