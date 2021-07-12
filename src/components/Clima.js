import React from 'react';
import propTypes from 'prop-types';

const Clima = ({response}) => {
    //Extraer valores
    const{name,main}=response;

    if(!name) return null;
    
    return (  
        <div className="card-panel white col s12 ">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {main.temp}<span>&#x2103;</span>
                </p>
                <p>Temperatura Maxima:&nbsp; 
                    {main.temp_max}<span>&#x2103;</span>
                </p>
                <p>Temperatura Minima:&nbsp;
                    {main.temp_min}<span>&#x2103;</span>
                </p>    
            </div>            
        </div>
    );
}

Clima.prototype={
    response:propTypes.object.isRequired
}
export default Clima;