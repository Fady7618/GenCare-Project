const { exec } = require('child_process');
const chokidar = require('chokidar');

// Watch the whole project, ignore unnecessary folders
chokidar.watch('.', {
  ignored: ['node_modules', '.git', 'public/img', '*.log'],
  persistent: true,
  ignoreInitial: true
}).on('all', (event, path) => {
  console.log(`[${event}] ${path}`);
  exec('auto-push.bat', (err, stdout, stderr) => {
    if (err) {
      console.error('Auto-push failed:', stderr);
    } else {
      console.log('Auto-push completed.');
    }
  });
});