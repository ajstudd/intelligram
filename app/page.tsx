import Image from 'next/image'

import classes from './homepage.module.scss'
export default function Home() {
  return (
    <div className={`${classes.mainBackground } flex flex-col min-w-screen min-h-screen`}>
    <div className={classes.mainHeader}>
      Main header bro
    </div> 
    <div className={classes.glassBox2}>
    Data
    </div>
    </div>
  )
}
