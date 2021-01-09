import React, { useState } from 'react';
import TimerWrapper from '../timer_wrapper/timerWrapper';
import SettingWindow from '../setting_window/settingWindow';

const ContentWrapper = (props) => {
    return (
        <div>
            <TimerWrapper/>
            <SettingWindow/>
            {/* {settingWindowOpen && 
                <SettingWindow
                    service={props.service}
                    handleClickSound={props.soundBox.makeClickSound}
                    handleSettingWindowClose={handleSettingWindowClose}
                    handleSettingWindowOK={handleSettingWindowOK}/>
            } */}
        </div>
    );
};

export default ContentWrapper;