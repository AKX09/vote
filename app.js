// let key = prompt("Enter key")
// let value = prompt("Enter value")

// localStorage.setItem(key,value)

// console.log(key +'people are'+ localStorage.getItem(key))

const store = ["mia.jpg","sj.jpg","wanda.jpg"]
const store2 = ["MIA KHALIFA","BLACK WIDOW","WANDAMAXIMOFF"]
var x = 0;

let sj = document.getElementById("sj")
let wanda = document.getElementById("wanda")

const leftid = document.getElementById("leftid")
const rightid = document.getElementById("rightid")

const leftimg = document.getElementById("leftimage")
const rightimg = document.getElementById("rightimage")

var l = 0;
var r = 0;

var state = 1;


function left(){
    if(state == 1){
        if(x==store.length){
            leftid.innerHTML = "WINNER"
            state=0;
        }
        else{
            l+=1;
            leftid.innerHTML = l;
            rightimg.src = store[x];
            x+=1
            r=0;
            rightid.innerHTML = r
        }
        
    }


}
function right(){
    if(state==1){
        if(x==store.length){
            rightid.innerHTML = "WINNER"
            state=0;
    
        }
        else{
            r+=1;
            rightid.innerHTML = r;
            leftimg.src = store[x];
            x+=1;
            l=0;
            leftid.innerHTML = l;
        }
    }


}