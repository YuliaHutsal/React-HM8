import React from 'react';
import { Menu } from '../Menu';

export const MainLayout = props => {
    return (
        <div>
            <aside>
                <nav><Menu /></nav>
            </aside>
            <main> {renderRoutes(props.route.routes)}</main>
        </div>
    )
}
