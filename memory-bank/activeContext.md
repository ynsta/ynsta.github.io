# Active Context: ynsta.github.io Tools Collection

## Current Work Focus
- **Project Refactoring Complete**: The initial code review and refactoring tasks are now finished.
- **Development Workflow Established**: A robust, template-based workflow is in place for adding new tools.
- **Ready for New Tool Development**: The project is in a stable and well-documented state, ready for the creation of new tools.

## Recent Changes
- **Optimized Gallery Page**: Refactored `index.html` to be a pure renderer, significantly improving its performance and reliability.
- **Enhanced Build Script**: Updated `generate-tools-config.js` to be the single source of truth for tool discovery, including metadata and custom icon detection.
- **Created Tool Template**: Added a `_template` directory to serve as a starter kit for all new tools.
- **Improved Navigation**: Added a "Back to Tools" link in the `badge-converter` tool and the new template.
- **Updated Memory Bank**: All memory bank files have been updated to reflect these architectural improvements.

## Next Steps

### Immediate Tasks
1.  **Develop a New Tool**: The primary focus is now on expanding the toolset. Use the new `_template` to create a new utility based on an emerging need.
2.  **Monitor and Verify**: Ensure the automated CI/CD pipeline correctly adds the next new tool to the gallery.

### Future Considerations
- **Implement Search**: As the number of tools grows, a search/filter functionality on the main gallery will become the next high-priority improvement.
- **Tool Categories**: Consider adding a tagging or category system to organize tools.
- **PWA Capabilities**: Explore making the site a Progressive Web App for offline access.

### Future Considerations
- Tool categories when collection grows
- Favorites or most-used tools
- Tool-specific settings persistence
- PWA capabilities for offline use

## Active Decisions and Considerations

### Design Decisions
- **Theme Consistency**: Default dark glassmorphism theme established
- **Tool Independence**: Each tool self-contained
- **No External Dependencies**: Maintaining zero dependencies
- **Icon Strategy**: Custom SVG → default.svg → emoji fallback

### Technical Decisions
- **Pure Vanilla JS**: No frameworks to keep it simple
- **Inline Styles**: Each tool has embedded CSS
- **Auto-Discovery**: GitHub Actions handles tool registration
- **Client-Side Only**: All processing in browser

## Important Patterns and Preferences

### Code Style
- Clean, readable code with comments
- Consistent indentation (2 spaces)
- Descriptive variable and function names
- Error handling for all user inputs

### UI/UX Patterns
- Instant feedback for user actions
- Copy-to-clipboard functionality
- Smooth transitions and animations
- Clear error messages
- Mobile-first responsive design

### Development Workflow
1.  **Copy `_template`**: Duplicate the template directory and rename it.
2.  **Customize**: Modify the new `index.html` with the tool's logic, title, and description.
3.  **Add Icon** (Optional): Add a custom `icon.svg`.
4.  **Test Locally**: Run `node generate-tools-config.js` and use a local server.
5.  **Push to `main`**: The CI/CD pipeline handles the rest automatically.

## Learnings and Project Insights

### What Works Well
- Auto-discovery system is elegant
- GitHub Actions automation saves time
- Glassmorphism theme looks professional
- Badge converter demonstrates the pattern

### Areas for Enhancement
- Tool template would speed development
- Shared CSS could reduce duplication
- Categories will be needed as tools grow
- Search functionality for many tools

### GenAI Development Tips
- Provide clear tool requirements
- Reference existing badge-converter for patterns
- Specify if custom theme needed
- Include all functionality in single HTML file
- Remember client-side only constraint

## Current Tool Inventory

### Implemented Tools
1. **Badge Serial → ID Converter** (`badge-converter/`)
   - Converts NFC badge serials to decimal IDs
   - Supports Mifare Classic 1K and DESFire EV2
   - Features copy-to-clipboard
   - Includes usage examples

### Tool Development Philosophy
Tools are created as needed rather than following a fixed roadmap. This ensures:
- Each tool addresses a real, immediate need
- Development effort is focused on actual use cases
- No time wasted on tools that might never be used

### Potential Next Tools (Undecided)
- **WiFi QR Code Generator**: For sharing WiFi credentials easily
- **External Tool Links**: Quick access to frequently used tools like Excalidraw or CyberChef
- Other tools will emerge based on actual needs

## Development Notes
- Each tool should solve a real problem
- Keep interfaces simple and focused
- Prioritize tools used frequently
- Consider mobile usage for all tools
- Maintain consistent quality
