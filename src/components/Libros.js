import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Libros = () => {
    
    const [libros, setLibros] = useState([]);

    useEffect( async() =>{
       try {
            const response = await axios.get('http://localhost:3005/libro');
            console.log(response);
            if(!response.data || response.data?.length == 0)
              return;
            setLibros(response.data);          
        } 
        catch (error) {
           console.log(error);
       }


    }, []);

   

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      libros.map(unLibro => {
                          <tr>{unLibro.nombre_libro}</tr>
                      })
                    }
                </tbody>
            </table>
        </>

    );
}

export default Libros;