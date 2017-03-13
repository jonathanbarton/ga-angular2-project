npm install -g n
n 6.
npm install -g npm@3.10.0
npm install -g npm@next
n 7.
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
ng set --global warnings.packageDeprecation=false
ng set defaults.styleExt scss