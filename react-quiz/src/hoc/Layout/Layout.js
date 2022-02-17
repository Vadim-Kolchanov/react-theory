import React, {Component} from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState(prevState => {
            return {
                menu: !prevState.menu
            };
        });
    };

    render() {
        return (
            <div className={classes.Layout}>

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;