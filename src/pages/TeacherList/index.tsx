import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
            <div>
              <strong>Diego Fernandes</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atraves de experiências. Mais de 2000 pessoas ja passaram pelas minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00 </strong>
            </p>
            <button type="button" >
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>

    </div>
  )
}

export default TeacherList;