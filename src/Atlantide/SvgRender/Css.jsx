import React from 'react'
function Css({component}) {
    //load css of the component
    return component.css ? <style>{component.css}</style> : null
}

export default Css