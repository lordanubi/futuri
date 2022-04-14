import React from 'react'
function Define({component}) {
    //load css of the component
    return component.css ? <style>{component.css}</style> : null
}

export default Define