import fs from 'fs';
import lessToJs from 'less-vars-to-js';
import path from 'path';

export default (pathname) => {
  const themePath = path.join(__dirname, pathname);
  return lessToJs(fs.readFileSync(themePath, 'utf8'));
};
