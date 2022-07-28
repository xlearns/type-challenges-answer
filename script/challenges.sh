#!/bin/bash
log(){
    echo "\e[36m $1 \e[0m"
}
wfile(){
   touch test-cases.ts
   touch template.ts
}

clear
read -p "请输入文件名：" name
cd packages/type-challenges
mkdir ${name}
cd ${name}
wfile  
log "创建完成！"

