import styles from './app.module.css';
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import TimerWrapper from "./components/timer_wrapper/timerWrapper";


const App = () => (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header/>
        <Banner/>
      </div>
      <TimerWrapper/>
      <p>Copyright @ 2020 by Jekb2020</p>
    </div>
);

export default App;
