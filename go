echo "\n*** Getting node dependencies"

npm install

echo "\n*** Installing Selenium Standalone with browser drivers"

node_modules/.bin/selenium-standalone install

echo "\n*** Starting Selenium Server as background process"

node_modules/.bin/selenium-standalone start &

echo "\n*** Running test script"

node_modules/.bin/wdio wdio.conf.js

echo "\n*** Killing Selenium Server"

pkill -f "node node_modules/.bin/selenium-standalone start"
