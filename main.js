let display = document.getElementById("display")
        calc=(reqem) =>{
            display.innerHTML += reqem
        }
         backspace =()=> {
            display.innerHTML =display.innerHTML.slice(0,-1)
          console.log= ("1 - 1 backspace");
        }
         cleardisplay =()=>{
            display.innerHTML = ""
            console.log("temizleyir");
        }
        hesabla =()=>{   
            let cem = eval(display.innerHTML)
            display.innerHTML = cem
        }
       