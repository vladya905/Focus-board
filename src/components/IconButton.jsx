import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ children, onClick, ...allProps }) =>(
    <button className="btn-base m-0 p-2  inline-flex items-center justify-center"
            type="button"
            onClick={onClick}
            {...allProps}>
        {children}
    </button>
)

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
}

IconButton.propTypes ={
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
}

export default IconButton