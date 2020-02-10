#!/bin/bash

FILES=$(find . -name "*.html")
for file in $FILES
do 
    sed -n -e '/<!-- file/,/html -->/p' $file
    # grep -v 'file Start' $file
    # sed -n -e "/\b\(file\|Start\)\b/d"
    content=$(<$file)
    echo "<!-- file Start :: $file -->" > $file
    echo "$content" >> $file;
done