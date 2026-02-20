function stringTest(text) {
    let indexarray = []
    let finalname = []
    let physicianName = ""
    let newText = text.replace(/\s+/g, "");
    
    for (let i = 0; i < newText.length; i++) {
        
        if (newText[i] == newText[i].toUpperCase()){
            indexarray.push(i)
        }
    }
    for (let index = 0; index < indexarray.length; index++) {
        
        finalname.push(newText.slice(indexarray[index],indexarray[index+1]))
    }
    
    
    if (finalname.length == 2){
        let physicianName = finalname[0].concat(" ",finalname[finalname.length - 1]);
        return physicianName
        
    } else {
        let physicianName = finalname[0].concat(" ",finalname[finalname.length - 2]," ",finalname[finalname.length - 1])
        return physicianName
        
    }
    
}



const test_text = stringTest('N a t h a n P a r k e r J r')
console.log(test_text)