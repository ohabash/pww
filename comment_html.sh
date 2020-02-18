#!/bin/bash
FILES=$(find ./templates -name "*.html")
for file in $FILES
do 
    sed -i '' '/<!-- BCFIND file start/d' $file
    content=$(<$file)
    echo "<!-- BCFIND file start :: $file -->" > $file
    echo "$content" >> $file;
done