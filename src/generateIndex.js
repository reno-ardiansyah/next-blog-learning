const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const directories = ['atoms', 'molecules', 'templates', 'pages'];
const basePath = path.resolve(__dirname, './components');
let isGenerating = false;

function generateIndex() {
    if (isGenerating) return;
    isGenerating = true;

    directories.forEach(dir => {
        const dirPath = path.join(basePath, dir);
        
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.tsx') && file !== 'index.tsx');

            const indexPath = path.join(dirPath, 'index.tsx');
            const content = files.map(file => {
                const fileName = path.basename(file, '.tsx');
                return `export { default as ${fileName} } from './${fileName}';`;
            }).join('\n');

            fs.writeFileSync(indexPath, content);
            console.log(`Index file generated for ${dir}`);
        } else {
            console.warn(`Directory ${dirPath} does not exist.`);
        }
    });

    isGenerating = false;
}

// Initial generation
generateIndex();

// Watch for changes
const watcher = chokidar.watch(directories.map(dir => path.join(basePath, dir, '*.tsx')), {
    persistent: true,
    ignoreInitial: true
});

watcher.on('add', path => {
    if (!path.endsWith('index.tsx')) {
        console.log(`File added: ${path}`);
        generateIndex();
    }
})
.on('change', path => {
    if (!path.endsWith('index.tsx')) {
        console.log(`File changed: ${path}`);
        generateIndex();
    }
})
.on('unlink', path => {
    if (!path.endsWith('index.tsx')) {
        console.log(`File removed: ${path}`);
        generateIndex();
    }
});
