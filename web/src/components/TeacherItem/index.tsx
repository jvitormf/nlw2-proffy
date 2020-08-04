import React from 'react';

// import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/4220066?s=460&u=9ac72d63ca16bb1555e682cb85ee93d6a40d1b72&v=4" alt="João Vitor"/>
        <div>
          <strong>João Vitor</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel elementum lacus, in tincidunt enim. Etiam vestibulum tempus feugiat. Proin dignissim venenatis ullamcorper. Sed sed diam quis eros varius vehicula ac at sapien. Phasellus imperdiet, diam sed laoreet rhoncus, neque risus faucibus leo, eu mattis ante ante nec arcu. Fusce cursus pellentesque arcu sed commodo. Maecenas porta massa libero, non ultricies augue elementum et. Fusce vehicula nulla nec metus ultrices molestie. Praesent finibus feugiat accumsan.
        <br /> <br />
        Mauris ornare mattis lectus semper convallis. Nullam dolor nisi, ornare blandit finibus in, scelerisque ut nibh. Nam dictum tristique lacus, sit amet tempus orci lacinia sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent rutrum vel diam a tincidunt. Fusce sit amet cursus nunc. Cras viverra diam eget turpis scelerisque, ut interdum ex tempus.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;