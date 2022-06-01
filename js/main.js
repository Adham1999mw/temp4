let ul_ac = document.querySelectorAll(".menu ul a")
let land_page= document.getElementsByClassName("landpage")[0]
let st_back=document.querySelectorAll(".random-ul .random-li")

ul_ac.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        ul_ac[0].classList.remove("active")
        ele.classList.add("active")
    })
    ele.addEventListener("mouseleave",function(){
        ele.classList.remove("active")
        ul_ac[0].classList.add("active")

    })
})



let yes =document.querySelector("[data-info='yes']") 
let no =document.querySelector("[data-info='no']") 
function change_bc(){

    let all_ph = ["7d98840fdff1b2e7cd508cc7f3a17403","pexels-s-migaj-747964","pexels-benjamin-suter-3617500","pexels-sachin-c-nair-954929","pexels-benjamin-suter-3617500"]
    let bc_ph= Math.floor(Math.random()*all_ph.length)
    land_page.style.backgroundImage=`url('img/${all_ph[bc_ph]}.jpg')`;

}
let con = true;
let m;
st_back.forEach(function(ell){

    
    if(ell.classList.contains("ran-active")){
        m=  setInterval(change_bc,3000)
    }

})
st_back.forEach(function(ele){
    
    ele.addEventListener("click",function(){
        
            if(ele.getAttribute("data-info")==="yes"){
                con=true
                m=  setInterval(change_bc,3000)
            
            }else{
                con=false
                clearInterval(m)
                st_back.forEach(function(ele){
                    ele.classList.remove("ran-active")
                })
            }
            
        
        
        
    })

})









// setInterval(change_bc,1000)
// yes.addEventListener("click",function(){
//   m=  setInterval(change_bc,1000)
// })
// no.addEventListener("click",function(){
//     clearInterval(m)
// })


// turn gear
let gear = document.getElementsByClassName("turn")[0]
let options= document.getElementsByClassName("options")[0]

gear.addEventListener("click",function(){
    
    gear.classList.toggle("turnplus")
    options.classList.toggle("aa")
})
//colors

let lis = document.querySelectorAll(".opd .co-ul .co-li")
if(window.localStorage.getItem("color-temp4")){
    document.documentElement.style.setProperty("--yello",window.localStorage.getItem("color-temp4"))
    let y = window.localStorage.getItem("color-temp4")
    document.querySelector(`[data-color="${y}"]`).style.opacity=1
    console.log(document.querySelector(`[data-color="${y}"]`))    
    
}
lis.forEach(function(ele){

    ele.addEventListener("click",function(){
    document.documentElement.style.setProperty("--yello",ele.getAttribute("data-color"))
    lis.forEach(function(e){
        e.style.opacity=.5
    })
    ele.style.opacity=1
    window.localStorage.setItem("color-temp4",ele.getAttribute("data-color"))
})
})

// backgrounds



st_back.forEach(function(ele){
    ele.addEventListener("click",function(e){
        st_back.forEach(function(ele){
            ele.classList.remove("ran-active")

        })
        ele.classList.add("ran-active")
             
    })
})


let up = document.getElementsByClassName("up")[0]
window.addEventListener("scroll",function(e){
    if(this.scrollY >=150){
        up.style.visibility="visible"
    }else{
        up.style.visibility="hidden"

    }
})

up.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
      
    
})

let linec =document.getElementsByClassName("linec")[0]
let lineh =document.getElementsByClassName("lineh")[0]
let linej =document.getElementsByClassName("linej")[0]
let lines =document.getElementsByClassName("lines")[0]
let liner =document.getElementsByClassName("liner")[0]




window.addEventListener("scroll",function(){
    if(window.scrollY>=908  ){
        linec.classList.add("line-movc")
        lineh.classList.add("line-movh")
        linej.classList.add("line-movj")
        lines.classList.add("line-movs")
        liner.classList.add("line-movr")


    }
    
    
    
})


//gallery

let gal = document.querySelectorAll(".gallery img")
let popp =document.createElement("div")
let allgpho=document.createElement("div")
allgpho.classList.add("allgpho")





gal.forEach(function(ele){
    ele.addEventListener("click",function(){
        let overlay = document.createElement("div")
        overlay.classList.add("overlay")    
        document.body.appendChild(overlay)
        let gpho = document.createElement("div")
        let photo =document.createElement("img")
        console.log(ele.src)
        photo.src=ele.src
        gpho.classList.add("gpho")
        popp.classList.add("pop")
        gpho.appendChild(photo)
        gpho.append(popp)
        allgpho.appendChild(gpho)
        document.body.appendChild(allgpho)
        popp.addEventListener("click",function(e){
            allgpho.remove()
            overlay.classList.remove("overlay")
            // overlay.remove()
        })
    })

    
})
let polone =document.querySelectorAll(".polone")
let poldiv =document.createElement("div")
poldiv.classList.add("poldiv")

polone.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        ele.appendChild(poldiv)
        ele.addEventListener("mouseleave",function(){
            poldiv.remove()
        })

    })
})


let polno = document.getElementsByClassName("polno")[0]
let polletsetting = document.querySelectorAll(".pblock div")
let pollet= document.getElementsByClassName("pollet")[0]
if(window.localStorage.getItem("data-saw")){
    if(window.localStorage.getItem("data-saw")==="no"){
        polletsetting.forEach(function(ele){
            ele.classList.remove("polactive")
        })
        polno.classList.add("polactive")
        pollet.style.display="none"

    }

}
polletsetting.forEach(function(ele){
    ele.addEventListener("click",function(){
        if(ele.getAttribute("data-saw")==="yes"){
                polletsetting.forEach(function(el){
                    el.classList.remove("polactive")
                    window.localStorage.setItem("data-saw","yes")
                })
            ele.classList.add("polactive")
            pollet.style.display="block"

        }else {
            polletsetting.forEach(function(el){
                el.classList.remove("polactive")
            })
            ele.classList.add("polactive")
            pollet.style.display="none"
            window.localStorage.setItem("data-saw","no")


        }
    })

})


