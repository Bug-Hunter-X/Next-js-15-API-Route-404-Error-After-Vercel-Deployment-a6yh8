# Next.js 15 API Route 404 Error After Vercel Deployment

This repository demonstrates a bug encountered in Next.js 15 where API routes return a 404 error after deployment to Vercel.  The issue arises when using the default export syntax for API routes.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Access `http://localhost:3000/api/hello` - This will work correctly.
5. Deploy the app to Vercel.
6. Access the deployed API route.  It will return a 404 error.

## Solution

The solution involves ensuring that the API route file exports a function named `default`.  This is a subtle difference that can easily be missed.