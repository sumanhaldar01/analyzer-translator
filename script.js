console.log("works")
uppercase.addEventListener("click",() => {
    console.log("Transformig to Uppercase")
    inptext.value=inptext.value.toUpperCase()
})

lowercase.addEventListener("click",() => {
    console.log("Transformig to Lowercase")
    inptext.value=inptext.value.toLowerCase()
})

removeextraspaces.addEventListener("click",() => {
    console.log("Removing Extra spaces...")
    // https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string
    inptext.value=inptext.value.replace(/\s+/g,' ').trim();
})

removeextranewlines.addEventListener("click",() => {
    console.log("Removing Extra lines...")
    inptext.value=inptext.value.replace(/\n+/g,'\n').trim();
})

inptext.addEventListener("input",() => {
    console.log("changed")
    charCount.innerText=inptext.value.length
    wordCount.innerText=inptext.value.trim().split(" ").length

    
})


