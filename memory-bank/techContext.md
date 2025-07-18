# Technical Context: ynsta.github.io Tools Collection

## Technologies Used

### Core Technologies
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with modern features
  - CSS Grid for layouts
  - CSS Variables for theming
  - Backdrop filters for glassmorphism
  - Linear gradients for backgrounds
- **Vanilla JavaScript**: No framework dependencies
  - ES6+ features
  - Async/await for asynchronous operations
  - DOM manipulation
  - Event handling

### Development Tools
- **Node.js**: For build scripts (generate-tools-config.js)
- **GitHub Actions**: CI/CD for automatic updates
- **Git**: Version control
- **GitHub Pages**: Static site hosting

## Development Setup

### Local Development
1. Clone repository: `git clone https://github.com/ynsta/ynsta.github.io.git`
2. Open in any code editor
3. Use local server for testing (e.g., Live Server in VS Code)
4. No build process required for tools

### Testing Tools Locally
```bash
# Python simple server
python -m http.server 8000

# Node.js http-server
npx http-server

# VS Code Live Server extension
# Right-click on index.html → "Open with Live Server"
```

### Generating Tool Config Locally
```bash
node generate-tools-config.js
```

## Technical Constraints

### GitHub Pages Limitations
- **Static Files Only**: No server-side processing
- **No Database**: All data must be client-side
- **No Environment Variables**: Configuration in code
- **HTTPS Required**: Automatically provided
- **File Size Limits**: Keep assets optimized

### Browser Compatibility
- **Target**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Features Used**:
  - CSS Grid (wide support)
  - Backdrop filter (check Safari support)
  - ES6 JavaScript (use transpilation if needed)
  - Async/await (modern browser feature)

### Performance Constraints
- **No CDN**: Host all assets locally
- **Minimize HTTP Requests**: Inline critical CSS
- **Optimize Images**: Use SVG for icons
- **Lazy Loading**: Load tools on demand

## Dependencies

### External Dependencies
- **None**: Project is intentionally dependency-free

### Internal Dependencies
- `tools-config.js`: Generated file listing all tools
- `default.svg`: Fallback icon for tools
- Individual tool assets in their directories

## Tool Usage Patterns

### Creating a New Tool

1.  **Copy the Template**: Duplicate the `_template` directory and rename it to your new tool's name (e.g., `qr-code-generator`).

2.  **Customize `index.html`**:
    *   Open the `index.html` file inside your new tool's directory.
    *   **Update Metadata**: Change the `<title>` and `<meta name="description">` to match your tool's functionality. This is crucial for discovery.
    *   **Add HTML**: Build your tool's user interface inside the `<div class="container">`.
    *   **Add CSS**: Add any tool-specific styles to the embedded `<style>` block. The core theme is already included.
    *   **Add JavaScript**: Write your tool's logic inside the `<script>` block at the end of the file.

3.  **Add a Custom Icon (Optional)**:
    *   Create an `icon.svg` file and place it in your tool's directory. The build script will automatically detect it. If omitted, `default.svg` will be used.

4.  **Test Locally**:
    *   Run `node generate-tools-config.js` to update the tool list.
    *   Open the main `index.html` in a local server to see your tool in the gallery and test its functionality.

5.  **Push to GitHub**:
    *   Commit your changes and push to the `main` branch. The GitHub Actions workflow will automatically regenerate the `tools-config.js` and deploy your new tool.

3. **Theme CSS Variables**
```css
:root {
    --bg-primary: #0f1419;
    --bg-secondary: #1a2332;
    --accent: #00d4aa;
    --text-primary: #ffffff;
    --text-muted: #94a3b8;
    --glass-bg: rgba(255, 255, 255, 0.05);
    --border: rgba(255, 255, 255, 0.1);
}
```

### GitHub Actions Workflow
- **Trigger**: Push to main branch
- **Process**:
  1. Checkout repository
  2. Setup Node.js
  3. Run generate-tools-config.js
  4. Commit changes if any
  5. Auto-deploy via GitHub Pages

### API Patterns (Client-Side)
```javascript
// Fetch pattern for loading resources
async function loadData() {
    try {
        const response = await fetch('resource.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Copy to clipboard pattern
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showFeedback('Copied!');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showFeedback('Copied!');
    }
}
```

## Security Considerations

### Content Security Policy
- All scripts inline or local
- No external resource loading
- No eval() or dynamic code execution

### Input Validation
- Always validate user input client-side
- Sanitize before display
- Use appropriate input types

### Data Privacy
- No data leaves the browser
- No analytics or tracking
- No cookies or local storage (unless tool-specific)

## Deployment Process

### Automatic Deployment
1. Push changes to main branch
2. GitHub Actions runs workflow
3. Updates tools-config.js if needed
4. GitHub Pages deploys automatically

### Manual Deployment
- Simply push to main branch
- GitHub Pages handles the rest
- Changes live within minutes
