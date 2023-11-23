import React from 'react';
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate();
    return <button onClick={()=>navigate('/detail')}>detail로 이동</button>
}

export default Main;