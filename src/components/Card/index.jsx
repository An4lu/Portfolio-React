import React, { useState, useEffect } from 'react';
import './style.css';

export function Card(){
    const [rep, setRepository] = useState([]);

    useEffect(() => {
        async function fetchData(){
          const response = await fetch('https://api.github.com/users/An4lu/repos')
          const data = await response.json();
    
          setRepository(data);
        }
        fetchData();
      }, []);

    return(
        <div class="projetos__container">
        {
        rep.map(rep => {
            return(
                         <a href="#">
                             <div>
                             <h3>
                                 <img src="../assets/svg/icons/folder.png" alt="Pasta" />
                                 <strong>{rep.name}</strong>
                             </h3>
                         
                             <p>{rep.description}</p>
                         
                             <div class="infos">
                                 <div class="info">
                                 <div>
                                     <img src="../assets/svg/icons/star.svg" alt="Estrelas" />
                                     <span>{rep.stargazers_count}</span>
                                 </div>
                         
                                 <div>
                                     <img
                                     src="../assets/svg/icons/git-branch.svg"
                                     alt="Git Branch"
                                     />
                                     <span>{rep.forks}</span>
                                 </div>
                                 </div>
                         
                                 <div class="linguagem">
                                 <span class="dot javascript"></span>
                                 <span>{rep.language}</span>
                                 </div>
                             </div>
                             </div>
                         </a>
                     
             );
        })
    }
    </div> )
}