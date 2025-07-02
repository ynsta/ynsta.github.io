# Active Context: ynsta.github.io Tools Collection

## Current Work Focus
- Memory bank initialization completed
- Project structure documented
- One tool currently implemented (badge-converter)
- Ready for expansion with new tools

## Recent Changes
- Created memory-bank directory structure
- Documented project architecture and patterns
- Established design system guidelines
- Captured technical constraints and deployment process

## Next Steps

### Immediate Tasks
1. **Test Current Setup**
   - Verify badge converter works correctly
   - Ensure GitHub Actions updates tools-config.js
   - Check responsive design on mobile

2. **Tool Development**
   - Add tools as specific needs arise
   - No predetermined list or roadmap
   - Focus on quality over quantity

3. **Improvements**
   - Create a tool template for faster development
   - Add navigation back to home from tools
   - Consider adding search functionality
   - Implement keyboard shortcuts

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
1. Create tool in new directory
2. Follow established HTML structure
3. Include proper meta tags
4. Test locally before pushing
5. Let GitHub Actions handle config update

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
