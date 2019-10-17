import React from 'react';
const styles = {
    div: {
        marginLeft: '40%'
    },
    a: {

        position: 'absolute',
        marginTop: '-2%',
        cursor: 'pointer'

    },


}
export const Header = props => (
    <div style={styles.div}>
        <h1 >Finding Falcone!</h1>
        <a onClick={props.onResetHandler} style={{...styles.a, marginLeft: '40%'}}>Reset</a>
        <p style={{...styles.a, marginLeft: '44%'}}>|</p>
        <a onClick={props.onResetHandler} style={{...styles.a, marginLeft: '46%'}}>Geek Trust Home</a>
    </div>
);