# Personal Blog with Next.js 13 and Tailwind CSS

This is a guide on how to clone and start a personal blog project using Next.js 13 and Tailwind CSS. Next.js is a popular React framework for building server-side rendered and static websites, while Tailwind CSS is a utility-first CSS framework that allows for rapid styling and customization.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- Git

## Cloning the Project

To clone the personal blog project, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command to clone the repository:

```
git clone https://github.com/ennachite/personal-blog-next-markdown.git
```

Make sure to replace `your-username` with your actual GitHub username.

## Starting the Project

Once you have cloned the project, follow these steps to start it:

1. Open your terminal or command prompt.
2. Navigate to the project directory:

```
cd personal-blog-next-markdown
```

3. Install the project dependencies by running the following command:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your web browser and visit `http://localhost:3000` to see the blog.

## Project Structure

The project structure of the personal blog will be as follows:

```
personal-blog-next-markdown
├── README.md
├── app
│   ├── components
│   │   ├── ListItem.tsx
│   │   ├── MyProfilePic.tsx
│   │   ├── Navbar.tsx
│   │   └── Posts.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts
│       └── [postId]
│           ├── not-found.tsx
│           └── page.tsx
├── blogposts
│   ├── spring-boot.md
│   └── ssg-ssr.md
├── lib
│   ├── getFormattedDate.tsx
│   └── posts.tsx
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── images
│   │   └── oussama-pdp-github.png
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.js
├── tsconfig.json
└── types.d.ts
```

## Customization

To customize the personal blog, you can modify the existing components, add markdown articles,create new pages, or change the styles. You can also add additional features such as authentication, commenting, or pagination based on your requirements.

## Deployment

To deploy the personal blog project to a hosting platform, you can follow the deployment guides provided by Next.js and the hosting platform of your choice. Common options for deploying Next.js projects include Vercel, Netlify, and AWS Amplify.

## Conclusion

You now have a cloned personal blog project using Next.js 13 and Tailwind CSS. You can start customizing it and adding your own content to create your personal blog. Enjoy writing and sharing your thoughts with the world!