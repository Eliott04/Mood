
import { useState } from 'react';
import ListeMessages from './ListeMessages';

function TimeLine(props){
    //états

    //comportement
    
    return (
        <div>
            <p>Timeline de l'utilisateur : {props.user.login}</p>
            <input id="search"/>
            <button type="submit">Rechercher</button>
            <nav id = "liste_message"> 
                <ListeMessages user = {props.user} />  
            </nav>
        </div>
    );
}

export default TimeLine;