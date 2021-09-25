Learned today:
    -How to send files to frontend.
    -


__dirname:
    -global variable provided by node
    -jahan pe use karoge, wahan tak ka path mil jayega.
    -jab bhi andar ke folders me kuch karna ho to easy ho jata hai wo kaam, especially during deployment.

path.join():
    -path package me hota hai;provided by node.
    -concates to path(string concatenation jaisa kaam karta hai, bas path pe).

res.sendFile("./public/Hello.txt", "test.txt");
    -sendFile() is used to send file to frontend
    -"./public/Hello.txt" file ka naam in system jise uthana hai.
    -"test.txt" file ka naam front end pe.
    -Now, front end ko "./" ka matlab nahi pata, use pura path dena padega. Hence we need __dirname, and we use "path.join()" function to concatenate path of current folder of "index.js" file to location path(basically "./" ki jagah jo aana tha wo path.join() le ke aa jata hai).