import React from 'react';
import SearchAppBar from "../components/Navbar";

// Define a generic type for props
type PropsWithChildren<P> = P & { children?: React.ReactNode };

// Define a function that takes a component and returns a new component with the Navbar
const NavbarHOC = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    // Define the component with the correct props
    const ComponentWithNavbar: React.FC<PropsWithChildren<P>> = (props) => {
        return (
            <>
                <SearchAppBar />
                <WrappedComponent {...props} />
            </>
        );
    };

    // Return the new component
    return ComponentWithNavbar;
};

export default NavbarHOC(
    (props) => <div className="app">{props.children}</div>
)