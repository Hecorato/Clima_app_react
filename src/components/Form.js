import React,{useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form  = ({busqueda,setBusqueda,setRequest}) => {

   
    //State Error
    const[error,setError]=useState(false);

    //Extraer ciudad y pais
    const{ciudad,pais} = busqueda;

    //Coloca elementos de state
    const handleChange = e => {
        //actualizar state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Evento Submit
    const handleSubmit = e =>{
        e.preventDefault();

        //Validacion
            if(ciudad.trim()===''|pais.trim()===''){
                setError(true)
                return;
            }
            setError(false);
        //Gardar en componente
            setRequest(true)
    } 

    

    return ( 
        <form
            onSubmit={handleSubmit}
        >
          {error ? <Error mensaje="Ambos campos son obligatorios"/>:null}    
            <div className="input-field col s12">
            <input
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
            />
            <label htmlFor="ciudad">Ciudad: </label>
            </div>
            
            <div className="input-field col s12">
            <select
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
            >
                <option value="">-- Seleccione un Pais --</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="pais">Pais : </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
     );
}

Form.propTypes ={
    busqueda:PropTypes.object.isRequired,
    setBusqueda:PropTypes.func.isRequired,
    setRequest:PropTypes.func.isRequired
}
export default Form ;