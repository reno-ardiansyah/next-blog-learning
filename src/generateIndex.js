// const fs = require('fs');
// const path = require('path');
// const chokidar = require('chokidar');

// const directories = ['atoms', 'molecules', 'templates'];
// const basePath = path.resolve(__dirname, './components');
// let isGenerating = false;

// function generateIndex(dir) {
//     if (isGenerating) return;
//     isGenerating = true;

//     const dirPath = path.join(basePath, dir);
    
//     if (fs.existsSync(dirPath)) {
//         const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.tsx') && file !== 'index.tsx');

//         const indexPath = path.join(dirPath, 'index.tsx');
//         const content = files.map(file => {
//             const fileName = path.basename(file, '.tsx');
//             return `export { default as ${fileName} } from './${fileName}';`;
//         }).join('\n');

//         fs.writeFileSync(indexPath, content);
//         console.log(`Index file generated for ${dir}`);
//     } else {
//         console.warn(`Directory ${dirPath} does not exist.`);
//     }

//     isGenerating = false;
// }

// // Initial generation
// directories.forEach(generateIndex);

// // Watch for changes
// const watcher = chokidar.watch(directories.map(dir => path.join(basePath, dir, '*.tsx')), {
//     persistent: true,
//     ignoreInitial: true
// });

// watcher.on('add', filePath => {
//     const dir = path.basename(path.dirname(filePath));
//     if (!filePath.endsWith('index.tsx')) {
//         console.log(`File added in ${dir}: ${filePath}`);
//         generateIndex(dir);
//     }
// })
// .on('change', filePath => {
//     const dir = path.basename(path.dirname(filePath));
//     if (!filePath.endsWith('index.tsx')) {
//         console.log(`File changed in ${dir}: ${filePath}`);
//         generateIndex(dir);
//     }
// })
// .on('unlink', filePath => {
//     const dir = path.basename(path.dirname(filePath));
//     if (!filePath.endsWith('index.tsx')) {
//         console.log(`File removed in ${dir}: ${filePath}`);
//         generateIndex(dir);
//     }
// });
