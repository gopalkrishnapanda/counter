const count = document.getElementById('count');
const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const res = document.getElementById("res");
var flag = 0;

dec.addEventListener("click",function(){
    flag = flag - 1;
    count.innerHTML = `${flag}` ;
})
inc.addEventListener("click",function(){
    flag = flag + 1;
    count.innerHTML = `${flag}`  ;
})
res.addEventListener("click",function(){
    flag = 0;
    count.innerHTML = `${flag}`  ;
})
