import React from 'react';
import timerImage from '../utils/images/clock.jpg';
import getTotalTime from '../utils/helper';
const styles = {
    div: {
        position: 'absolute',
        width: '20%',
        marginTop: '4%'
    },
    img: {
        width: '50%',
        marginTop: '17%',
        marginLeft: '6%'
    },
    p: {
        fontWeight: 'bolder',
        fontSize: '30px',
        marginLeft: '4%'

    }
}

export const TimerComponent = props => (
    <div style={styles.div}>
        <img style={styles.img} src={timerImage} />
        <p style={styles.p}>{`Time Taken : ${getTotalTime(props.selectedValues)}`}</p>
    </div>
)