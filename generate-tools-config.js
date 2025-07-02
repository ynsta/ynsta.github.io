const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const ignoredDirs = ['.git', '.github', 'node_modules', 'memory-bank', '_template'];

async function generateToolsConfig() {
    const tools = [];
    const dirents = fs.readdirSync(rootDir, { withFileTypes: true });

    for (const dirent of dirents) {
        if (dirent.isDirectory() && !ignoredDirs.includes(dirent.name)) {
            const toolDir = path.join(rootDir, dirent.name);
            const indexPath = path.join(toolDir, 'index.html');

            if (fs.existsSync(indexPath)) {
                const htmlContent = fs.readFileSync(indexPath, 'utf-8');
                
                const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
                const title = titleMatch ? titleMatch[1] : dirent.name.replace(/-/g, ' ').replace(/_/g, ' ');

                const descMatch = htmlContent.match(/<meta name="description" content="(.*?)"/i);
                const description = descMatch ? descMatch[1] : 'No description provided.';
                
                const iconPath = path.join(toolDir, 'icon.svg');
                const hasIcon = fs.existsSync(iconPath);

                tools.push({
                    folder: dirent.name,
                    file: 'index.html',
                    title: title,
                    description: description,
                    icon: hasIcon ? 'icon.svg' : null
                });
            }
        }
    }

    const configContent = `const toolsConfig = ${JSON.stringify(tools, null, 4)};`;
    fs.writeFileSync(path.join(rootDir, 'tools-config.js'), configContent);

    console.log(`Successfully generated tools-config.js with ${tools.length} tools.`);
}

generateToolsConfig();
