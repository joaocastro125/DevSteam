import Image from "next/image"
import sytles from './logo.module.css'
export default function logo(){
    return(
       
    
          <div className={sytles.logo}>
          <h1>devteam</h1>
        <Image src= '/logo.svg' width={60} height={60}/>

    </div>
    )
  
}