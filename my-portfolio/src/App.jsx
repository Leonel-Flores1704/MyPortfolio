import './App.css'
import { useState, useEffect } from 'react'
import educationImage from './assets/images/ImagenUni.png';
import imageWeb from './assets/images/ImageWeb.png';
import imageDataAnalysis from './assets/images/AnalisisDatos4.png';
import imageWebMR from './assets/images/imageWebmy.png';
import imgchat from './assets/images/chatbotIMG.jpg';
import imageSoftwareEngineering from './assets/images/imagenProgr.png';
import ImageJuego from './assets/images/imagenJuego.png';
/* --- IMPORTS DE  CERTIFICACIONES --- */
import certCloudArch from './assets/badges/aws-academy-graduate-cloud-architecting-training-ba.png';
import certCloudFound from './assets/badges/aws-academy-graduate-cloud-foundations-training-bad.png';
import certDataEng from './assets/badges/aws-academy-graduate-data-engineering-training-badg.png';
import certNLP from './assets/badges/aws-academy-graduate-machine-learning-for-natural-l.png';
import certMLFound from './assets/badges/aws-academy-graduate-machine-learning-foundations-t.png';
import cvFile from './assets/cv/Leonel_flores_CV.pdf';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {

      const sections = document.querySelectorAll('section[id], div[id="home"]');

      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId); 
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);


  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-brand">
          LEONEL FLORES
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-right-side ${menuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>Projects</a>
            <a href='#Education' className={`nav-link ${activeSection === 'Education' ? 'active' : ''}`}>Education</a>
            <a href='#contact' className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>

          <a
            href={cvFile}             
            download="Leonel_Flores_CV.pdf" 
            className="btn-nav-resume"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* --- SECCIÓN 1: HERO (PORTADA) --- */}
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1>LEONEL FLORES</h1>
          <h2>INGENIERO DE SOFTWARE</h2>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/Leonel-Flores1704"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://wa.me/526182910092"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          {" | "}
          <a href="mailto:leoflrs73@gmail.com">
            Email
          </a>
        </div>
      </div>

      {/* --- SECCIÓN 2: ABOUT ----*/}
      <section id="about" className="section dark-bg">
        <div className="content-wrapper about-container">

          <div className="about-text-content">
            <h5 className="accent-text">Hola, soy</h5>
            <h3 className="about-name">Leonel Flores</h3>
            <h4 className="about-title">Ingeniero de Software</h4>
            <p>
              Soy estudiante de Ingeniería de Software enfocado en el análisis y la resolución de problemas.
              Mi objetivo es identificar ineficiencias en procesos manuales y desarrollar herramientas digitales
              prácticas que los optimicen y reduzcan errores operativos, transformando problemas en soluciones digitales que ayudan a mejorar procesos.
              <br /><br />
              Transformo ideas en realidades digitales
            </p>

            <div className="about-actions">
              <a href="#contact" className="btn btn-accent">Hablemos</a>
            </div>
          </div>

          <div className="about-image-placeholder">
            <div className="placeholder-box">
              <span>[ ESPACIO PARA FOTO ]</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 3: SKILLS --- */}
      <section id="skills" className="section darker-bg">
        <div className="content-wrapper">
          <h3 className="section-title">Skills</h3>
          <div className="skills-category">
            <h4>Stack Tecnológico</h4>
            <div className="tech-grid">
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                <span>JavaScript</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                <span>C++</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                <span>PHP</span>
              </div>
              <div className="tech-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg" alt="GDScript" />
                <span>GDScript</span>
              </div>

              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                <span>Laravel</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                <span>Bootstrap</span>
              </div>

              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                <span>SQL</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <span>GitHub</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="tech-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender" />
                <span>Blender</span>
              </div>

            </div>
          </div>
          <div className="skills-category" style={{ marginTop: '80px' }}>
            <h4 style={{ marginBottom: '60px' }}>Competencias Profesionales</h4>

            <div className="knowledge-blocks-container">
              <div className="knowledge-block">
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Desarrollo Web & APIs</h5>
                  <p className="knowledge-description">
                    Creación de interfaces dinámicas y comunicación robusta entre cliente y servidor.
                  </p>
                  <ul className="knowledge-list">
                    <li>Consumo de APIs REST (Fetch/Axios)</li>
                    <li>Manejo de respuestas JSON & Postman</li>
                    <li>Debugging & Chrome DevTools</li>
                    <li>Manejo de errores y Logs HTTP</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageWeb}
                    alt="Desarrollo Web y Código"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

              <div className="knowledge-block reversed">
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Bases de Datos & Análisis</h5>
                  <p className="knowledge-description">
                    Estructuración, diseño y creación de base de datos así como análisis de la información y extracción de valor mediante análisis de datos.
                  </p>
                  <ul className="knowledge-list">
                    <li>Diseño y Normalización de BD</li>
                    <li>Modelado Entidad–Relación</li>
                    <li>Análisis de datos con Python</li>
                    <li>Procesamiento estadístico</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageDataAnalysis}
                    alt="Desarrollo Web y Código"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

              <div className="knowledge-block">
                {/* Texto */}
                <div className="knowledge-text">
                  <h5 className="knowledge-title"> Programación</h5>
                  <p className="knowledge-description">
                    Aplicación de buenas prácticas, patrones de diseño y metodologías para construir software.
                  </p>
                  <ul className="knowledge-list">
                    <li>Programación Orientada a Objetos (POO)</li>
                    <li>Control de Versiones (Git)</li>
                    <li>Diseño de Interfaces (UI/UX)</li>
                    <li>Metodologías Ágile(Scrum)</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageSoftwareEngineering}
                    alt="Trabajo en equipo e Ingeniería"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN 4: PROYECTOS --- */}
      <section id="portfolio" className="section dark-bg">
        <div className="content-wrapper">

          <div className="section-header-center">
            <h3 className="section-title">Projects</h3>
            <div className="title-underline"></div>
          </div>

          <div className="projects-grid">

            {/* PROYECTO 1: LARAVEL */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imageWebMR} alt="App Laravel" />
              </div>
              <div className="project-content">
                <h4>Aplicación Web con Laravel</h4>
                <p>
                  Plataforma web MyReport desarrollada en Laravel
                  (PHP) con base de datos MySQL, interfaz responsiva
                  con Bootstrap y carga dinámica de contenido
                  para la gestión y visualización de reportes.
                </p>
                <div className="project-tags">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>Boostrap</span>
                </div>
              </div>
            </div>

            {/* PROYECTO 2: CHATBOT WHATSAPP */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imgchat} alt="Chatbot WhatsApp" />
              </div>
              <div className="project-content">
                <h4>Chatbot para WhatsApp</h4>
                <p>
                  Bot integrado con la API de WhatsApp Business. Capaz de responder
                  automáticamente consultas de clientes, gestionar pedidos y enviar información en tiempo real ayudando el las comptras basicas de un usuario.
                </p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>WhatsApp API (meta)</span>
                  <span>JavaScript</span>
                  <span>API REST</span>
                  <span>PHP</span>
                </div>
              </div>
            </div>

            {/* PROYECTO 3: VIDEOJUEGO GODOT */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={ImageJuego} alt="Juego Godot" />
              </div>
              <div className="project-content">
                <h4>Videojuego en Godot</h4>
                <p>
                  Videojuego 2D desarrollado con Godot Engine. Implementa mecánicas de física personalizadas,
                  diseño de niveles interactivos y enemigos mortales.
                </p>
                <div className="project-tags">
                  <span>Godot</span>
                  <span>GDScript</span>
                  <span>2D Game</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- SECCIÓN 5: EDUCATION --- */}
      <section id="Education" className="section dark-bg">
        <div className="content-wrapper">
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Education</h3>

          <div className="education-card-full">

            <div className="edu-banner-container">
              <img src={educationImage} alt="Banner Universidad" className="edu-banner-img" />
            </div>

            <div className="edu-content-box">

              <div className="edu-header-row">
                <span className="edu-subtitle-icon">Ingeniería en Software</span>
              </div>

              <h2 className="edu-university">Universidad Politécnica de Durango</h2>

              <div className="edu-meta-row">
                <div className="meta-item">
                  <span>BIS Universities Sustainable</span>
                </div>
                <div className="meta-item green-text">
                  <span className="meta-icon">📅</span>
                  <span>Septiembre 2023 - Abril 2027 (Estimado)</span>
                </div>
              </div>

              <p className="edu-description">
                Formación especializada en desarrollo de software, arquitectura de sistemas y metodologías ágiles.
                Enfoque bilingüe y sustentable.
              </p>

              <div className="edu-tags-container">
                <span className="edu-tag">Desarrollo de Software</span>
                <span className="edu-tag">Arquitectura de Sistemas</span>
                <span className="edu-tag">Metodologías Ágiles</span>
                <span className="edu-tag">Enfoque Bilingüe</span>
                <span className="edu-tag">Innovación Tecnológica</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* --- SECCIÓN 6: CERTIFICACIONES --- */}
      <section id="certifications" className="section darker-bg">
        <div className="content-wrapper">

          {/* Título Principal de la Sección */}
          <div className="section-header-center">
            <h3 className="section-title">Certificaciones</h3>
            <div className="title-underline"></div>
          </div>

          {/* ==================== BLOQUE AWS ==================== */}

          {/* ENCABEZADO AWS */}
          <div className="cert-simple-header">
            <h4>AWS Academy</h4>
          </div>

          {/* GRID DE AWS */}
          <div className="certs-grid-aws">
            {/* --- AWS --- */}
            <div className="aws-card">
              <div className="aws-card-top"><img src={certCloudArch} alt="Badge" className="aws-badge-img" /><span className="aws-badge-label">Badge de Certificación</span></div>
              <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>AWS Academy Cloud Architecting</h4><p>AWS Academy</p></div></div>
            </div>
            <div className="aws-card">
              <div className="aws-card-top"><img src={certCloudFound} alt="Badge" className="aws-badge-img" /><span className="aws-badge-label">Badge de Certificación</span></div>
              <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>AWS Academy Cloud Foundations</h4><p>AWS Academy</p></div></div>
            </div>
            <div className="aws-card">
              <div className="aws-card-top"><img src={certDataEng} alt="Badge" className="aws-badge-img" /><span className="aws-badge-label">Badge de Certificación</span></div>
              <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>AWS Academy Data Engineering</h4><p>AWS Academy</p></div></div>
            </div>
            <div className="aws-card">
              <div className="aws-card-top"><img src={certNLP} alt="Badge" className="aws-badge-img" /><span className="aws-badge-label">Badge de Certificación</span></div>
              <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>AWS Academy Machine Learning for NLP</h4><p>AWS Academy</p></div></div>
            </div>
            <div className="aws-card">
              <div className="aws-card-top"><img src={certMLFound} alt="Badge" className="aws-badge-img" /><span className="aws-badge-label">Badge de Certificación</span></div>
              <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>AWS Academy Machine Learning Foundations</h4><p>AWS Academy</p></div></div>
            </div>
          </div>


          {/* ==================== BLOQUE CISCO ==================== */}

          <div style={{ height: '50px' }}></div>

          {/* ENCABEZADO CISCO */}
          <div className="cert-simple-header">
            <h4>Cisco Networking Academy</h4>
          </div>

          {/* GRID DE CISCO */}
          <div className="certs-grid-cisco">
            <div className="cisco-card">
              <div className="cisco-card-top">
                <svg className="cisco-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5zM6.75 10.5h.008v.008h-.008V10.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 16.5v.75m6-.75v.75m-6-3.75h6" /></svg>
                <span className="cisco-badge-label">Badge de Certificación</span>
              </div>
              <div className="cisco-card-bottom">
                <div className="cisco-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div className="cisco-card-text"><h4>Fundamentals of Switching, Routing, and Wireless Networking</h4><p>Cisco Networking Academy</p></div>
              </div>
            </div>

            <div className="cisco-card">
              <div className="cisco-card-top">
                <svg className="cisco-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5zM6.75 10.5h.008v.008h-.008V10.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 16.5v.75m6-.75v.75m-6-3.75h6" /></svg>
                <span className="cisco-badge-label">Badge de Certificación</span>
              </div>
              <div className="cisco-card-bottom">
                <div className="cisco-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div className="cisco-card-text"><h4>Introduction to Networks</h4><p>Cisco Networking Academy</p></div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* --- SECCIÓN 6: CONTACTO --- */}
      <section id="contact" className="section dark-bg">
        <div className="content-wrapper contact-container">
          <h3 className="section-title">Contact me</h3>
          <p className="contact-text">
            ¿Tienes un proyecto en mente o quieres colaborar? <br />
            ¡Estoy disponible para nuevas oportunidades!
          </p>

          <div className="contact-buttons-grid">

            {/* Botón 1: Correo */}
            <a href="mailto:leoflrs73@gmail.com" className="btn btn-accent">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mail.png"
                alt="Email"
                className="btn-icon"
              />
              Enviar Correo
            </a>

            {/* Botón 2: LinkedIn */}
            <a href="https://www.linkedin.com/in/leonel-d-l-cruz-flores/" target="_blank" className="btn btn-accent">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="LinkedIn"
                className="btn-icon"
              />
              LinkedIn
            </a>

            {/* Botón 3: WhatsApp */}
            <a href="https://wa.me/526182910092" target="_blank" className="btn btn-accent">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/whatsapp--v1.png"
                alt="WhatsApp"
                className="btn-icon"
              />
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="site-footer">
        <div className="footer-inner content-wrapper">
          <div className="footer-left">
            <p>© {new Date().getFullYear()} Leonel Flores. Todos los derechos reservados.</p>
          </div>

          <div className="footer-right">
            <a href="https://github.com/Leonel-Flores1704" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/leonel-d-l-cruz-flores/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="leoflrs73@gmail.com">Email</a>
          </div>
        </div>
      </footer>

    </div>



  )
}

export default App