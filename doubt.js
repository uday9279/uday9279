console.log("Approach two")
for(row = 1;row <= 5;row++){
    row_content = ""
    for(col =1;col <= 5;col++){
        row_content = row_content + "*"
    }
     console.log(row_content)
}
for(row = 1;row <=5;row++){
    for(col = 1;col <=5;col++){
      process.stdout.write("*")
    }
    console.log()
}