const { exec } = require('child_process');
const nodemon = require('nodemon');

nodemon({
  watch: ['**/*'],
  ignore: ['node_modules', 'public/img'],
  ext: 'js,html,css,json',
  exec: '.\\auto-push.bat' // Use 'exec' to run the batch file
});
