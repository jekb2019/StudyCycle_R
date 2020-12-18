import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import SettingWindow from './components/setting_window/settingWindow';
import TimerWrapper from "./components/timer_wrapper/timerWrapper";
import clickSoundDir from "./sounds/click.wav";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [settingWindowOpen, setSettingWindowOpen] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
  }

  const handleSettingClick = () => {
    settingWindowOpen ? setSettingWindowOpen(false) : setSettingWindowOpen(true);
  }
  
  // Handler when x button in the setting window is clicked
  const handleSettingWindowClose = () => {
    setSettingWindowOpen(false);
  }

  // Handler when OK button in the setting window is clicked
  const handleSettingWindowOK = () => {
    setSettingWindowOpen(false);   
  }



  // Make click sound when suitable button is clicked
  const clickSound = new Audio(clickSoundDir);
  const makeClickSound = () => {
    clickSound.play();
  }

  window.addEventListener('resize', handleResize);

  return(
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        {screenWidth >= 800 && <Banner/>}
      </div>
      <TimerWrapper handleSettingClick={handleSettingClick} handleClickSound={makeClickSound}/>
        {screenWidth < 800 && <Banner/>}
      <p className={styles.copyright}>Copyright @ 2020 by Jekb2020</p>
      {settingWindowOpen && 
      <SettingWindow
       handleClickSound={makeClickSound}
       handleSettingWindowClose={handleSettingWindowClose}
       handleSettingWindowOK={handleSettingWindowOK}/>}
    </div>);
};

export default App;
