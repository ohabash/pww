#!/bin/bash

FILES=$(find ./templates -name "*.html")
for file in $FILES
do 
    echo $file
    sed -i '' '/<!-- BCFIND file start/d' $file
done