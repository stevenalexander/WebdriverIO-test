if [ ! -f selenium-server-standalone-2.47.1.jar ]
then
  echo "*** Downloading Selenium Server Standalone"
  curl -O http://selenium-release.storage.googleapis.com/2.47/selenium-server-standalone-2.47.1.jar
fi

echo "\n*** Starting Selenium Server as background process"

java -jar selenium-server-standalone-2.47.1.jar &

echo "\n*** Getting node dependencies"

npm install webdriverio

echo "\n*** Running test script"

node test.js

echo "\n*** Killing Selenium Server"
pkill -f 'selenium-server-standalone*'
