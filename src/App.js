import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import TimerWrapper from "./components/timer_wrapper/timerWrapper";


const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  
  const handleResize = () => {
    setScreenWidth(window.screen.width);
    console.log(screenWidth); 
  }
  
  window.addEventListener('resize', handleResize);

  return(
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        {screenWidth >= 800 && <Banner/>}
      </div>
      <TimerWrapper/>
        {screenWidth < 800 && <Banner/>}
      <p className={styles.copyright}>Copyright @ 2020 by Jekb2020</p>
    </div>);
};

export default App;
