var c = 300

if (true){
    let a = 10
    const b = 20
    var c = 30
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two()
}

one()


// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addtwo = function(num){
    return num + 2
}

addtwo(5)