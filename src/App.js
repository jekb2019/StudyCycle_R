import { useState } from 'react';
import styles from './app.module.css';
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import SettingWindow from './components/setting_window/settingWindow';
import TimerWrapper from "./components/timer_wrapper/timerWrapper";


const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [settingWindowOpen, setSettingWindowOpen] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
  }

  const handleSettingClick = () => {
    settingWindowOpen ? setSettingWindowOpen(false) : setSettingWindowOpen(true);
  }
  
  window.addEventListener('resize', handleResize);

  return(
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        {screenWidth >= 800 && <Banner/>}
      </div>
      <TimerWrapper handleSettingClick={handleSettingClick}/>
        {screenWidth < 800 && <Banner/>}
      <p className={styles.copyright}>Copyright @ 2020 by Jekb2020</p>
      {settingWindowOpen && <SettingWindow/>}
    </div>);
};

export default App;
