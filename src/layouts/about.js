import React from 'react'
import { renderRoutes } from 'react-router-config'

export const AboutLayout = (props) => {
    return(
        <div>
            {renderRoutes(props.route.routes)}
        </div>
    )
}
