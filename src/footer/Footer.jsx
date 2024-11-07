import { useEffect, useState } from "react";
import './Footer.css'

function Footer(){
      const [isHour, setIsHour] = useState(new Date().getHours())
      const [isMinute, setIsMinute] = useState(new Date().getMinutes())
      const [isSecond, setIsSecond] = useState(new Date().getSeconds())

   
      const Hour = (isHour/30).toLocaleString().padStart(2, 0)
      const Minute = (isMinute/6).toLocaleString().padStart(2, 0)
      const Second = (isSecond/6).toLocaleString().padStart(2, 0)
      
      useEffect(()=>{
            setInterval(()=>setIsSecond(new Date().getSeconds()*6,1000))
            setInterval(()=>setIsMinute(new Date().getMinutes()*6,6000))
            setInterval(()=>setIsHour(new Date().getHours()* 30,6000))
      },[])

    
      return(
            <div>
                  <h1>Footer</h1>
                  <div id="clock">
                        <div id="second-pointer" style={{transform: "rotate("+ isSecond + "deg)"}}></div>
                        <div id="minute-pointer" style={{transform: "rotate("+ isMinute + "deg)"}}></div>
                        <div id="hour-pointer" style={{transform: "rotate("+ isHour + "deg)"}}></div>
                        <div className="pin-center"></div>
                  </div>
                        <div className="digit-clock">
                              <div className="digit">{Hour}:{Minute}:{Second}</div>
                        </div>

            </div>
      )
}
export default Footer;