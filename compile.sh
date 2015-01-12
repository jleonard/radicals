#!/bin/sh

rm -rf js
rm -rf fonts
rm -rf css

echo -e "\033[42;30mcompiling harp...\033[0m";
harp compile harp ./tmp

echo -e "\033[42;30mmoving the site...\033[0m";
#rm -rf content
#rm -rf img

mv -f tmp/* .
cp -R src/ js/
rm -rf tmp

