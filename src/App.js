import React,{Fragment,useState,useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {

  //State Formulario
   const[busqueda,setBusqueda] = useState({
    ciudad:'',
    pais:'' 
    })
    
  //State que Consulta API
    const[request,setRequest]=useState(false)
  
  //State de respuesta por  API
    const[response,setResponse]=useState({});
  
   //State que valida errores en consulta
    const[error,setError]=useState(false);      
  
  //Extraccion de datos de busqueda
    const{ciudad,pais}=busqueda; 
  
   //UseEffect
    useEffect(() => {
      const apiRequest = async () => {
      
      if(request){  
        //API key
        const appId = '2ba48dd1249a828eae23b8d87ebc5ff0'
      
        //url 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${appId}`
        
        //Respues de API
        const response = await fetch(url);
        const result = await response.json();
        
        //Funcion que almacena respuesta de API
        setResponse(result);
        //Funcion que reinicia State de consulta
        setRequest(false);

        //verifica si hubo error en consulta
          if(result.cod==='404'){
            setError(true)
          }else{
            setError(false)
          }
          }  
      }
      apiRequest();
    }, [request,ciudad,pais])

    let componente
    if(error){
      componente = <Error mensaje="No hay resultados" />
    }else{
      componente =<Clima response={response} />
    }
  return (
    <Fragment>
      <Header
        titulo="Clima App React"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setRequest={setRequest}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
