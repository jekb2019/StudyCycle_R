import {useState } from 'react';
import styles from './app.module.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import ContentWrapper from'./components/content_wrapper/contentWrapper';

const App = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleResize = () => {
    setScreenWidth(window.screen.width);
  }
  window.addEventListener('resize', handleResize);


  return(
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        {screenWidth >= 800 && <Banner/>}
      </div>
      <ContentWrapper/>
      {screenWidth < 800 && <Banner/>}
      <p className={styles.copyright}>&#169;2020 Study Cycle. All Rights Reserved</p>
    </div>);
};

export default App;
