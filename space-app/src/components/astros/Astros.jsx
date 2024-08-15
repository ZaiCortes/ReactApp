import { useState, useEffect } from 'react';
import './Astros.css';
import CircularProgress from '@mui/material/CircularProgress';
function Astros(){
    const API_URL = "http://api.open-notify.org/astros.json";
    const [astros, setAstros] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await fetch(API_URL);
            const res = await data.json();
            console.log(res.people);
            setAstros(res.people);
        };
        fetchData().catch((err) => console.log(err));
    }, []);

    return(
        <div className='astros-container'>
            
            {! astros ?(
                <CircularProgress sx={{color: "#271884"}} />):(
             
                astros.map((astro,idx) => (
                <div key={idx} className='card'>
                    <h3 className='astro-name'>{astro.name}</h3>
                    <p className='astro-craft'>{astro.craft}</p>
                </div>
            ))
        )}
        </div>
    );
}

export default Astros;