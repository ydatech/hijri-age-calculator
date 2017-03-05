import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Menu = (props) => {
    const { handleUpdateState, menuOpen } = props
    const actions = [
        <FlatButton
            label="Close"
            primary={true}
            onTouchTap={() => handleUpdateState({ menuOpen: false })}
        />
    ];

    return (


        <Dialog
            title="Software Information"
            actions={actions}
            modal={false}
            open={menuOpen}
            onRequestClose={() => handleUpdateState({ menuOpen: false })}
        >
            Hijri Age Calculator Version 2.0. Developed By <a href="https://github.com/ydatech" target="_blank">ydatech</a>.
        </Dialog>

    );
}

export default Menu