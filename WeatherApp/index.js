const api="http://api.weatherapi.com/v1/current.json?key=031b287ae82f49f988d164209231707&q="

async function report(country){
    const response=await fetch(api+country)
    const then=await response.json()
    return then
}


function populatedom(){
    const button=document.querySelector("button")
    const header=document.querySelector(".filler")
    const locDis=document.querySelector(".loc")
    const tempDis=document.querySelector(".temp")
    const feelDis=document.querySelector(".feel")
    const logo=document.querySelector(".logo")
    button.addEventListener("click",async ()=>{
        const input=document.querySelector("input")
        let userinput=input.value
        let result=await report(userinput)
        header.innerHTML=result.location.name+"'s Weather"
        locDis.innerHTML=result.location.country
        tempDis.innerHTML=result.current.temp_c+" C"
        feelDis.innerHTML=result.current.feelslike_c+" C"
        logo.replaceChildren("")
        checktemp(result.current.temp_c)
    })
}
function checktemp(weather){
    const logo=document.querySelector(".logo")
    let img=document.createElement("img")
    if (weather>26){    
        img.src="img/sun.png"
    }
    else(img.src="img/wind.png")

    logo.appendChild(img)
}

populatedom()