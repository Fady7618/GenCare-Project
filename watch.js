import { exec } from 'child_process';
import nodemon from 'nodemon';

nodemon({
  watch: ['**/*'],
  ignore: ['node_modules', 'public/img', 'public/img-min'],
  ext: 'js,html,css,json',
  script: 'auto-push.sh' // or auto-push.bat
});
