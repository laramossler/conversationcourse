# The Art of Conversation - Beta Course Landing Page

A clean, simple one-page site for the BETA launch of "The Art of Conversation" beginner course.

## Quick Start

1. Open `index.html` in your browser to preview the landing page
2. Customize the placeholders (see below)
3. Add your instructor photo (optional)
4. Deploy to your hosting platform

## Placeholders to Customize

Before going live, replace these placeholders in `index.html`:

### IMPORTANT: Signup Form URL
- `YOUR_FORM_URL_HERE` - Replace with your Google Form, Typeform, or Tally form URL (appears twice - in hero section and "How to Join" section)
- Search for `YOUR_FORM_URL_HERE` and replace both instances

### Contact Information
- ✅ Already updated: Lara McKinney Mossler
- ✅ Already updated: laramckinneymossler@gmail.com
- ✅ Already updated: LinkedIn profile

### Beta Cohort Details
- ✅ Already updated: January 29, 2026 - February 26, 2026
- ✅ Already updated: Schedule TBD (poll will be sent to enrolled students)

### Pricing
- ✅ Already updated: FREE for beta (regular price $499)

## Creating Your Signup Form

The landing page includes prominent "Apply for Beta Cohort" buttons. You'll need to create a signup form and replace `YOUR_FORM_URL_HERE` with your form URL.

### Recommended Form Fields:

**Essential:**
1. Name (First and Last)
2. Email
3. Why are you interested in this course? (text area)
4. What's your biggest challenge in conversations? (optional text area)
5. Timezone (dropdown: EST, CST, MST, PST, Other)
6. Which time slots generally work for you? (checkboxes)
   - Weekday mornings (9am-12pm)
   - Weekday afternoons (12pm-5pm)
   - Weekday evenings (5pm-9pm)
   - Weekend mornings
   - Weekend afternoons
   - I'm flexible
7. LinkedIn Profile URL (optional)

### Form Platform Options:
- **Google Forms** (Free, easy) - Responses go to a spreadsheet
- **Typeform** (Beautiful UI, free tier available)
- **Tally** (Free, clean design)

Once you create your form, search for `YOUR_FORM_URL_HERE` in `index.html` and replace both instances with your form URL.

## Adding Your Photo

1. Add your professional photo to this folder (e.g., `instructor-photo.jpg`)
2. In `index.html`, find the About Section (line ~134)
3. Uncomment and update the image tag:
   ```html
   <img src="instructor-photo.jpg" alt="Lara McKinney Mossler" class="instructor-photo">
   ```

## Design Features

- **Clean & Minimal**: Lots of white space, easy to read
- **Mobile Responsive**: Works perfectly on phones, tablets, and desktops
- **Professional Color Scheme**: Deep teal accent color (#2c5f5f)
- **Fast Loading**: Simple HTML/CSS, no heavy frameworks
- **Easy to Update**: All content in one HTML file

## File Structure

```
conversationcourse/
├── index.html          # Main landing page
├── styles.css          # All styling
└── README.md          # This file
```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Push to GitHub
2. Go to repository Settings > Pages
3. Select branch and save
4. Your site will be live at `https://yourusername.github.io/conversationcourse`

### Option 2: Netlify (Free)
1. Drag and drop this folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant URL or connect custom domain

### Option 3: Custom Hosting
Upload `index.html` and `styles.css` to any web hosting service

## Customization Tips

### Changing Colors
The main accent color is defined in `styles.css`:
- Primary: `#2c5f5f` (deep teal)
- Light background: `#f0f7f7`
- Hover: `#1a4040`

Search and replace these hex codes to change the color scheme.

### Adding Content
The HTML is structured in clear sections. To add content:
1. Find the relevant `<section>`
2. Add content following the existing pattern
3. Save and refresh to see changes

### Removing Sections
To remove a section you don't need:
1. Delete the entire `<section>...</section>` block
2. The styling will automatically adjust

## Testing Checklist

Before launching:
- [ ] **Signup form created and `YOUR_FORM_URL_HERE` replaced (2 places)**
- [ ] Signup form link works and opens correctly
- [ ] Email links work (`mailto:` links open email client)
- [ ] LinkedIn link opens in new tab
- [ ] Test signup button on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check spelling and grammar
- [ ] Instructor photo added (if using)
- [ ] Page loads quickly

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For questions or issues with the landing page:
- Check that all placeholders are replaced
- Validate HTML: https://validator.w3.org/
- Test on multiple devices
- Check browser console for errors (F12)

## Next Steps After Beta

Once beta launches and you have students:
- Collect testimonials
- Take photos/videos during sessions
- Gather feedback for improvements
- Plan your full launch

Good luck with your beta cohort!
