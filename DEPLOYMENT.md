# Portfolio Deployment Guide (Vercel)

## Steps to Deploy:

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Initialize git in your project folder if not already:
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - That's it! Vercel will automatically deploy your portfolio and give you a live URL.

## Optional: Custom Domain
- You can add a custom domain in Vercel dashboard after deployment.
