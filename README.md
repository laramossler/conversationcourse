# The Art of Conversation - Beta Course Landing Page

A clean, simple one-page site for the BETA launch of "The Art of Conversation" beginner course.

## Quick Start

1. Open `index.html` in your browser to preview the landing page
2. Customize the placeholders (see below)
3. Add your instructor photo (optional)
4. Deploy to your hosting platform

## Placeholders to Customize

Before going live, replace these placeholders in `index.html`:

### Contact Information
- `[your email]` - Your email address (appears in multiple places)
- `[your LinkedIn URL]` - Your LinkedIn profile URL
- `[Your Name]` - Your name as the instructor

### Beta Cohort Details
- `[Month/Year]` - When the beta cohort starts (e.g., "February 2026")
- `[Start Date]` - First day of the course (e.g., "February 3, 2026")
- `[End Date]` - Last day of the course (e.g., "March 3, 2026")
- `[Day of week]` - Day of live sessions (e.g., "Wednesdays")
- `[Time]` - Time of live sessions (e.g., "7:00 PM")
- `[Timezone]` - Timezone (e.g., "EST")

### Pricing
- `$[X]` or `$[Beta Price]` - Your beta course price (e.g., "$297")
- `$[Y]` or `$[Regular Price]` - Your planned regular price (e.g., "$597")

## Adding Your Photo

1. Add your professional photo to this folder (e.g., `instructor-photo.jpg`)
2. In `index.html`, find the About Section (line ~147)
3. Uncomment and update the image tag:
   ```html
   <img src="instructor-photo.jpg" alt="[Your Name]" class="instructor-photo">
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
- [ ] All placeholders replaced with real information
- [ ] Email links work (`mailto:` links open email client)
- [ ] LinkedIn link opens in new tab
- [ ] Test on mobile phone
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
