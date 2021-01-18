import {useState } from 'react';
import styles from './app.module.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import ContentWrapper from'./components/content_wrapper/contentWrapper';
import TaskTrackerWrapper from './components/task_tracker_wrapper/taskTrackerWrapper';

const App = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleResize = () => {
    setScreenWidth(window.screen.width);
  }
  window.addEventListener('resize', handleResize);

  // Console debugger - only for development purposes
  // const serviceDebug = () => {
  //   props.timerService.debug();
  // }

  return(
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        {screenWidth >= 800 && <Banner/>}
      </div>
      {/* <button onClick={serviceDebug}>Service DEBUG</button> */}
      <ContentWrapper timerService={props.timerService} soundBox={props.soundBox} fastForwardTime={props.fastForwardTime} fastBackwardTime={props.fastBackwardTime}/>
      {screenWidth < 800 && <Banner/>}
      <TaskTrackerWrapper className={styles.task_tracker_wrapper}/>
      <footer>
        <p className={styles.copyright}>&#169;2020 Study Cycle. All Rights Reserved</p>
      </footer>
    </div>);
};

export default App;
