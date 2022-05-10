console.log("Working...");

let str = new Set();
str.add("a");
str.add("b");
str.add("c");
str.add("d");
str.add("e");
str.add("e");
str.add("c");
str.add("f");
str.add("b");
for(let keys of str.values()){
    console.log(keys);
}


var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();   

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  console.log( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);

