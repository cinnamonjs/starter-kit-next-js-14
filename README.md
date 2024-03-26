
### Next js 14 - starter kit  
> Initial setup nextjs with necessary library for variants scenarios
## Table of contents
*   [General info](#general-info)
*   [Folder Structure](#folder-structure)
*   [Technologies](#technologies)
*   [Setup](#setup)
*   [Features](#features)

## General info
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
> You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
> This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure
>. <br/>
>└── src/ <br/>
>&emsp;&emsp;&emsp;├── app/ <br/>
>&emsp;&emsp;&emsp; │&emsp;&emsp;&emsp;└── api/ <br/>
>&emsp;&emsp;&emsp;├── components/ <br/>
>&emsp;&emsp;&emsp;├── contexts/ <br/>
>&emsp;&emsp;&emsp;├── store/ <br/>
>&emsp;&emsp;&emsp;├── hooks/ <br/>
>&emsp;&emsp;&emsp;├── services/ <br/>
>&emsp;&emsp;&ensp; └── libs/ <br/>

> **app** - use for store page and route api <br/>
> **components** - use for store re-used class components ex. button navbar text input <br/>
> **contexts** - use for store state and function in provider keep track in many page <br/>
> **store** - use for store many state and function in page !data lost when re-render! <br/>
> **hooks** - use for store re-used function components ex. useFetch(), useClock() <br/>
> **services** - use for store re-used api service components ex. userService, itemService <br/>
> **libs** - use for store configuration and formatter library <br/>

## Technologies
Project is created with:
*   [React with Next.js](https://nextjs.org/) 
*   [Tailwindcss](https://tailwindcss.com/)
*   [Million.js](https://million.dev)
*   [Zod](https://zod.dev)
*   [React hook form](https://react-hook-form.com/)
*   [Zustand](https://github.com/pmndrs/zustand)

## Setup
To run this project, install it locally using npm:

```bash
$ cd ../starter-kit-next-js-14
$ npm install
$ npm run dev
```

## Features
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
