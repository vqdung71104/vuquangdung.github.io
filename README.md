# Portfolio Website - Architecture Documentation

## 🏗️ Project Structure

```
vuquangdung.github.io/
├── index.html                    # Entry point
├── assets/
│   ├── css/
│   │   ├── base/                # Base styles
│   │   │   ├── reset.css        # CSS reset
│   │   │   ├── variables.css    # Design tokens (colors, spacing, etc.)
│   │   │   └── typography.css   # Typography styles
│   │   ├── components/          # Component-specific styles
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── about.css
│   │   │   ├── academic.css
│   │   │   ├── projects.css
│   │   │   ├── skills.css
│   │   │   ├── contact.css
│   │   │   └── footer.css
│   │   ├── utilities/           # Utility classes
│   │   │   └── helpers.css
│   │   └── main.css             # Main CSS (imports all)
│   ├── js/
│   │   ├── data/                # Data layer (SOLID: Single Responsibility)
│   │   │   ├── projects.js      # Project data & queries
│   │   │   ├── skills.js        # Skills data & queries
│   │   │   └── academic.js      # Academic data & calculations
│   │   ├── components/          # Component logic
│   │   │   ├── chart.js         # Chart initialization
│   │   │   └── navigation.js    # Navigation behavior
│   │   ├── utils/               # Utility functions
│   │   │   └── helpers.js       # Helper functions
│   │   └── main.js              # Main JS entry point
│   └── images/                  # Images and assets
└── README.md                    # This file
```

## 🎯 SOLID Principles Applied

### 1. **Single Responsibility Principle (SRP)**
- Each CSS file handles ONE component/concern
- Each JS data file manages ONE type of data
- Separation of data, logic, and presentation

**Example:**
- `projects.js` - Only handles project data
- `projects.css` - Only styles project components
- `chart.js` - Only handles chart rendering

### 2. **Open/Closed Principle (OCP)**
- Easy to add new projects without modifying existing code
- Add new skills by updating data file only
- Extend functionality through new modules

**Example:**
```javascript
// To add a new project, just add to the array in projects.js
export const projects = [
    // ... existing projects
    {
        id: 'new-project',
        title: 'New Project',
        // ... other properties
    }
];
```

### 3. **Liskov Substitution Principle (LSP)**
- All project cards follow same structure
- All skill items follow same interface
- Consistent component APIs

### 4. **Interface Segregation Principle (ISP)**
- Components only import what they need
- No monolithic CSS files
- Modular imports

### 5. **Dependency Inversion Principle (DIP)**
- Components depend on data interfaces, not concrete implementations
- Easy to swap data sources (e.g., from static to API)

## 📝 How to Maintain

### Adding a New Project
1. Open `assets/js/data/projects.js`
2. Add new project object to the `projects` array
3. No other files need to be modified!

```javascript
{
    id: 'unique-id',
    title: 'Project Title',
    tag: 'Project Type',
    gradient: 'preview-gradient-1', // or 2, 3
    icon: 'devicon-xxx-xxx',
    problem: 'Description...',
    solution: 'Description...',
    result: 'Description...',
    technologies: {
        icons: [
            { name: 'Tech Name', icon: 'devicon-xxx-xxx colored' }
        ],
        badges: ['Badge1', 'Badge2']
    }
}
```

### Adding a New Skill
1. Open `assets/js/data/skills.js`
2. Add to appropriate category or create new category
3. Done!

### Updating Academic Data
1. Open `assets/js/data/academic.js`
2. Add new semester to `semesters` array
3. Chart automatically updates!

### Modifying Styles
1. Identify the component you want to modify
2. Open corresponding CSS file in `assets/css/components/`
3. Make changes - won't affect other components!

### Changing Theme Colors
1. Open `assets/css/base/variables.css`
2. Modify CSS custom properties
3. Entire site updates automatically!

## 🎨 Design Tokens

All design decisions are centralized in `variables.css`:
- Colors
- Spacing
- Typography
- Shadows
- Border radius
- Transitions
- Z-index layers

**Benefits:**
- Consistent design across entire site
- Easy theme switching
- One place to update all colors/spacing

## 🚀 Adding New Features

### Example: Adding a Blog Section

1. **Create data file:**
   ```javascript
   // assets/js/data/blog.js
   export const blogPosts = [ /* ... */ ];
   ```

2. **Create component CSS:**
   ```css
   /* assets/css/components/blog.css */
   .blog { /* ... */ }
   ```

3. **Import in main.css:**
   ```css
   @import './components/blog.css';
   ```

4. **Add HTML section in index.html**

5. **Done!** No need to modify existing code.

## 📦 Benefits of This Architecture

✅ **Easy to maintain** - Each file has one clear purpose
✅ **Easy to extend** - Add new features without touching existing code
✅ **Easy to debug** - Know exactly where to look
✅ **Easy to test** - Isolated components
✅ **Easy to collaborate** - Clear structure for team members
✅ **Scalable** - Can grow to hundreds of projects/skills
✅ **Performance** - Can lazy-load components as needed

## 🔄 Migration from Old Structure

Old structure had everything in 2 files:
- `index.html` - 500+ lines
- `styles.css` - 500+ lines

New structure:
- Separated into 20+ focused files
- Each file < 100 lines
- Clear responsibility for each file

## 📚 Further Improvements

Future enhancements could include:
- Move data to JSON files or API
- Add build process (Webpack/Vite)
- Add TypeScript for type safety
- Add CSS preprocessor (SASS/LESS)
- Add component framework (React/Vue)
- Add testing (Jest/Vitest)

## 🤝 Contributing

When adding new features:
1. Follow the existing file structure
2. Keep files focused (Single Responsibility)
3. Use design tokens from `variables.css`
4. Document your changes
5. Test across different screen sizes

---

**Last Updated:** February 5, 2026
**Version:** 2.0.0