import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Navbar = (props) => {
    const { handleToggle } = props
    return (
        <AppBar
            style={{ position: 'fixed', justifyContent: 'center' }}
            titleStyle={{ flex: '0 1 auto' }}
            iconStyleLeft={{ marginLeft: -75 }}
            title="Hijri Age Calculator"
            iconElementLeft={<IconButton onTouchTap={handleToggle}><NavigationMenu /></IconButton>}
        />

    )
}

export default Navbar;