import React, { useState, useEffect } from 'react';
import './styles.css';

import { Card } from '../../components/Card/';

export function Home() {
  const [user, setUser] = useState({ name: '', avatar: '', bio: '', location: '', company: '', login: '',});

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/An4lu')
      const data = await response.json();

      setUser({
        name: data.name,
        avatar: data.avatar_url,
        bio: data.bio,
        location:data.location,
        work:data.company,
        login:data.login,
      });
    }

    fetchData();
  }, []);

  return(
  <div>
  <body class="scrollreavel-animation">
    <main>
      <aside>
        <div class="perfil">
          <div class="perfil__imagem">
            <img src={user.avatar}
              alt="Foto de perfil de Ana Luíza"
            />
          </div>

          <h1>{user.name}</h1>
          <span>{user.bio}</span>
        </div>

        <div class="info" role="list">
          <div role="item" class="info__item">
            <img src="/src/assets/svg/icons/map-pin.svg" alt="Mapa" />

            <span>{user.location}</span>
          </div>

          <a
            role="item"
            href="https://lab2dev.com/"
            rel="noreferrer noopener"
            target="_blank"
            title="Ir para o site da Lab2Dev"
            class="info__item"
          >
            <img src="/src/assets/svg/icons/briefcase.svg" alt="Trabalho" />
            <span>{user.work}</span>
          </a>

          <a
            role="item"
            href="https://github.com/an4lu"
            rel="noreferrer noopener"
            title="Ir para a página do GitHub de Ana Luíza"
            target="_blank"
            class="info__item"
          >
            <img src="/src/assets/svg/icons/github.svg" alt="Github" />
            <span>{user.login}</span>
          </a>

          <a
            role="item"
            href="https://www.linkedin.com/in/ana-dourado/"
            rel="noreferrer noopener"
            target="_blank"
            title="Ir para a página do Linkedin de Ana Luíza"
            class="info__item"
          >
            <img src="/src/assets/svg/icons/linkedin.svg" alt="Linkedin" />
            <span>ana-dourado</span>
          </a>

          <a
            role="item"
            href="mailto:anabluoliveira@outlook.com"
            rel="noreferrer noopener"
            target="_blank"
            title="Enviar e-mail para Ana Luíza"
            class="info__item"
          >
            <img src="/src/assets/svg/icons/mail.svg" alt="E-mail" />
            <span class="email">anabluoliveira@outlook.com</span>
          </a>
        </div>

        <div class="tecnologias">
          <h2>Tecnologias</h2>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>C#</li>
            <li>C+</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>Figma</li>
            <li>PHP</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div class="experiencia">
          <h2>Experiências</h2>

          <ul>
            <li>
              <strong>Lab2Dev</strong>
              <span>2022 — Atualmente</span>
              <p>Front End Developer</p>
            </li>
          </ul>
        </div>

        <div class="educacao">
          <h2>Educação</h2>

          <ul>
            <li>
              <strong>Batista Cepelos</strong>
              <span>2017 — 2020</span>
              <p>Ensino Fundamental</p>
            </li>
            <li>
              <strong>ETEC de Cotia</strong>
              <span>2021 — Atualmente</span>
              <p>Ensino Médio</p>
            </li>
          </ul>
        </div>
      </aside>

      <section>
        <div class="projetos">
          <strong>Meus projetos</strong>
          <a
            href="https://github.com/an4lu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            title="Veja todos os projetos">
            Ver tudo
          </a>
        </div>
        
        <Card>
        </Card>

      </section>
    </main>

    <footer class="footer">
      Feito com <span>&#9829;</span> por
      <a
        href="https://github.com/an4lu"
        rel="noreferrer noopener"
        target="_blank"
        > Ana Luíza</a>
    </footer> 

  </body>
    </div>
  )
}