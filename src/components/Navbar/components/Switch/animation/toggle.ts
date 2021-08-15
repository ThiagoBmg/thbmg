export const switchColorhandler = (event:any)=>{
    let toggle  = document.getElementById("Toggle"),
        toggleImage = document.getElementById("ToggleImage"),
        switchContext = document.getElementById("SwitchColorContext")
    /*  */
    function getMoon ():void{
        toggle!.style.transform = "translateX(35.5px)"
        toggle!.style.background= "#012840"
        switchContext!.style.backgroundColor = "#55ACAC"
        toggleImage!.setAttribute("src", "./images/sun.svg")
    }
    /*  */
    function getSun():void{
        toggle!.style.transform = "translateX(-1px)"
        toggle!.style.backgroundColor="#7ED9D9"
        switchContext!.style.backgroundColor = "#005A92"
        toggleImage!.setAttribute("src", "./images/moon.svg")
    }
    /*  */
    if(!toggle?.style.transform) return getSun()
    if(toggle?.style.transform == 'translateX(-1px)') return getMoon()
    if(toggle?.style.transform == 'translateX(35.5px)')  return getSun()
}