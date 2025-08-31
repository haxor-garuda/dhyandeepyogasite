# Netlify Deployment Guide

## Steps to Deploy:

1. **Build your project locally first:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "New site from Git"
   - Connect your GitHub repository: `https://github.com/mrthinkagain/dhyandeepyogasite.git`
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

## Alternative: Drag & Drop Method
1. Run `npm run build`
2. Drag the `dist` folder to Netlify's deploy area

## Important Notes:
- ✅ CSS import issue fixed (moved @import before @tailwind)
- ✅ Netlify configuration added (`netlify.toml`)
- ✅ Redirects configured for SPA routing
- ✅ Build tested and working locally

## If you still get a blank screen:
1. Check Netlify deploy logs for errors
2. Open browser dev tools and check console for JavaScript errors
3. Verify the build output in the `dist` folder
4. Check if all assets are loading properly
