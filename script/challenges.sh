#!/bin/bash
log(){
    # echo "\e[36m $1 \e[0m"
    echo "$1"
}

sh_file(){
   touch test-cases.ts
   touch template.ts
   echo "import type { Equal, Expect } from '@type-challenges/utils'" >> test-cases.ts
}

clear

read -p "请输入文件名：" name

cd packages/type-challenges

mkdir ${name}

cd ${name}

sh_file

log "创建完成！"

