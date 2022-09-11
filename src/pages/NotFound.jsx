import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
       <div className="NotFound">
        <img src="data:image/png;base64,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" alt="" />
        <h1 id="NotFound"> ¡Oh no! ¡Página no encontrada!</h1>
       </div>
       
       
    );
}    

export default NotFound; 