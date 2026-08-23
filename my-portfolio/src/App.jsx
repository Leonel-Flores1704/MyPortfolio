import './App.css'
import { useState, useEffect } from 'react'
import educationImage from './assets/images/ImagenUni.png';
import imageWeb from './assets/images/ImageWeb.png';
import imageDataAnalysis from './assets/images/AnalisisDatos4.png';
import imageWebMR from './assets/images/imageWebmy.png';
import imageWebVentas from './assets/images/Ecomerce.png';
import imageModeloPrediccion from './assets/images/ModeloPrediccion.png';
import imgchat from './assets/images/chatbotIMG.jpg';
import imageSoftwareEngineering from './assets/images/imagenProgr.png';
import ImageJuego from './assets/images/imagenJuego.png';
/* --- CERTIFICATION IMPORTS --- */
import certCloudArch from './assets/certifications/aws/aws-academy-graduate-cloud-architecting-training-ba.png';
import certCloudFound from './assets/certifications/aws/aws-academy-graduate-cloud-foundations-training-bad.png';
import certDataEng from './assets/certifications/aws/aws-academy-graduate-data-engineering-training-badg.png';
import certNLP from './assets/certifications/aws/aws-academy-graduate-machine-learning-for-natural-l.png';
import certMLFound from './assets/certifications/aws/aws-academy-graduate-machine-learning-foundations-t.png';
import certAIFoundations from './assets/certifications/sas/ai-foundations-knowledge-badge.png';
import certGenAISas from './assets/certifications/sas/generative-ai-using-sas.png';
import certDataScienceStats from './assets/certifications/sas/introduction-to-data-science-statistical-methods.png';
import certResponsibleAI from './assets/certifications/sas/responsible-innovation-and-trustworthy-ai.png';
import cvFile from './assets/cv/Leonel_flores_CV.pdf';

const awsCertifications = [
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'AWS Academy',
    image: certCloudArch,
    url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-cloud-architecting-training-ba',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    image: certCloudFound,
    url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-cloud-foundations-training-bad',
  },
  {
    title: 'AWS Academy Data Engineering',
    issuer: 'AWS Academy',
    image: certDataEng,
    url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-data-engineering-training-badg',
  },
  {
    title: 'AWS Academy Machine Learning for NLP',
    issuer: 'AWS Academy',
    image: certNLP,
    url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-machine-learning-for-natural-l',
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Academy',
    image: certMLFound,
    url: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-machine-learning-foundations-t',
  },
];

const sasCertifications = [
  {
    title: 'AI Foundations Knowledge Badge',
    issuer: 'SAS',
    image: certAIFoundations,
    url: 'https://www.credly.com/org/sas/badge/ai-foundations-knowledge-badge',
  },
  {
    title: 'Generative AI Using SAS',
    issuer: 'SAS',
    image: certGenAISas,
    url: 'https://www.credly.com/org/sas/badge/generative-ai-using-sas',
  },
  {
    title: 'Introduction to Data Science Statistical Methods',
    issuer: 'SAS',
    image: certDataScienceStats,
    url: 'https://www.credly.com/org/sas/badge/introduction-to-data-science-statistical-methods',
  },
  {
    title: 'Responsible Innovation and Trustworthy AI',
    issuer: 'SAS',
    image: certResponsibleAI,
    url: 'https://www.credly.com/org/sas/badge/responsible-innovation-and-trustworthy-ai',
  },
];

const techStackTop = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JS' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'GDScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS' },
];

const techStackBottom = [
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Jetpack Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg' },
  { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

function TechCard({ tech, copyIndex }) {
  return (
    <div className="tech-card" aria-hidden={copyIndex > 0 ? 'true' : undefined}>
      <img src={tech.icon} alt={copyIndex > 0 ? '' : tech.alt || tech.name} />
      <span>{tech.name}</span>
    </div>
  );
}

function TechCarousel({ technologies, direction }) {
  return (
    <div className={`tech-marquee tech-marquee-${direction}`}>
      <div className="tech-track">
        {[0, 1].map((copyIndex) => (
          <div className="tech-track-group" key={copyIndex}>
            {technologies.map((tech, itemIndex) => (
              <TechCard
                key={`${tech.name}-${copyIndex}-${itemIndex}`}
                tech={tech}
                copyIndex={copyIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const scrollToTop = () => {
    setMenuOpen(false);
    setActiveSection('home');
    const scrollingElement = document.scrollingElement || document.documentElement;
    const homeSection = document.getElementById('home');

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    scrollingElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.scrollTo?.({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'portfolio', 'Education', 'contact'];
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);
    let ticking = false;

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const activationLine = navbarHeight + 120;
      let currentSection = sections[0]?.id || 'home';
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - activationLine);

        if (rect.top <= activationLine && rect.bottom > activationLine) {
          currentSection = section.id;
          closestDistance = 0;
          break;
        }

        if (distance < closestDistance) {
          closestDistance = distance;
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScrollSpy = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    document.addEventListener('scroll', handleScrollSpy, { passive: true, capture: true });
    window.addEventListener('resize', handleScrollSpy);
    window.addEventListener('wheel', handleScrollSpy, { passive: true });
    window.addEventListener('touchmove', handleScrollSpy, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      document.removeEventListener('scroll', handleScrollSpy, { capture: true });
      window.removeEventListener('resize', handleScrollSpy);
      window.removeEventListener('wheel', handleScrollSpy);
      window.removeEventListener('touchmove', handleScrollSpy);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById('home');

    const updateBackTopVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setShowBackTop(scrollTop > 360);
    };

    const observer = homeSection
      ? new IntersectionObserver(
          ([entry]) => {
            setShowBackTop(!entry.isIntersecting);
          },
          {
            threshold: 0.08,
            rootMargin: '-80px 0px 0px 0px',
          }
        )
      : null;

    if (homeSection && observer) {
      observer.observe(homeSection);
    }

    updateBackTopVisibility();
    window.addEventListener('scroll', updateBackTopVisibility, { passive: true });
    document.addEventListener('scroll', updateBackTopVisibility, { passive: true, capture: true });
    window.addEventListener('resize', updateBackTopVisibility);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', updateBackTopVisibility);
      document.removeEventListener('scroll', updateBackTopVisibility, { capture: true });
      window.removeEventListener('resize', updateBackTopVisibility);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(`
      .about-text-content,
      .section-title,
      .skills-category,
      .tech-carousel-stage,
      .knowledge-block,
      .section-header-center,
      .project-card,
      .education-card-full,
      .cert-simple-header,
      .aws-card,
      .sas-card,
      .cisco-card,
      .contact-text,
      .contact-buttons-grid
    `);

    const revealVariants = ['reveal-up', 'reveal-right', 'reveal-left', 'reveal-zoom', 'reveal-tilt'];

    revealElements.forEach((element, index) => {
      const variant = revealVariants[index % revealVariants.length];
      element.classList.add('reveal', variant);
      element.style.setProperty('--reveal-order', index % 6);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let animationFrame;
    let fadeTimer;

    const syncClouds = (isScrolling = false) => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / maxScroll;
      const wave = Math.sin(progress * Math.PI * 5) * 18;
      const opacity = isScrolling ? 0.48 : 0.08;
      const shiftY = progress * 240 + wave;
      const shiftX = Math.sin(progress * Math.PI * 2) * 56;

      root.style.setProperty('--cloud-opacity', opacity.toFixed(2));
      root.style.setProperty('--cloud-shift-y', `${shiftY}px`);
      root.style.setProperty('--cloud-shift-x', `${shiftX}px`);
    };

    const handleCloudScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => syncClouds(true));

      window.clearTimeout(fadeTimer);
      fadeTimer = window.setTimeout(() => syncClouds(false), 650);
    };

    syncClouds(false);
    window.addEventListener('scroll', handleCloudScroll, { passive: true });
    window.addEventListener('resize', handleCloudScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fadeTimer);
      window.removeEventListener('scroll', handleCloudScroll);
      window.removeEventListener('resize', handleCloudScroll);
    };
  }, []);

  useEffect(() => {
    const knowledgeBlocks = document.querySelectorAll('.knowledge-block');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-focused', entry.isIntersecting);
        });
      },
      {
        threshold: 0.45,
        rootMargin: '-18% 0px -30% 0px',
      }
    );

    knowledgeBlocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="portfolio-container">
      <div className="gradient-clouds" aria-hidden="true">
        <div className="gradient-cloud gradient-cloud-home"></div>
        <div className="gradient-cloud gradient-cloud-about"></div>
        <div className="gradient-cloud gradient-cloud-skills"></div>
        <div className="gradient-cloud gradient-cloud-projects"></div>
        <div className="gradient-cloud gradient-cloud-certs"></div>
        <div className="gradient-cloud gradient-cloud-contact"></div>
      </div>

      <nav className="navbar">
        <button className="nav-brand" type="button" onClick={scrollToTop} aria-label="Back to top">
          LEONEL FLORES
        </button>

        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-right-side ${menuOpen ? "open" : ""}`}>
          <div className="nav-links" onClick={closeMenu}>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Technologies I work with</a>
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

      {/* --- SECTION 1: HERO --- */}
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1>LEONEL FLORES</h1>
          <h2>SOFTWARE ENGINEER</h2>
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

      {/* --- SECTION 2: ABOUT ----*/}
      <section id="about" className="section dark-bg">
        <div className="content-wrapper about-container">

          <div className="about-text-content">
            <h5 className="accent-text">Hi, I'm</h5>
            <h3 className="about-name">Leonel Flores</h3>
            <h4 className="about-title">Software Engineer</h4>
            <p>
              I am a Software Engineering student focused on analysis and problem solving.
              My goal is to identify inefficiencies in manual processes and build practical digital tools
              that optimize workflows, reduce operational errors, and turn problems into digital solutions that improve processes.
              <br /><br />
              I turn ideas into digital experiences.
            </p>

            <div className="about-actions">
              <a href="#contact" className="btn btn-accent">Let's Talk</a>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: SKILLS --- */}
      <section id="skills" className="section darker-bg">
        <div className="content-wrapper">
          <h3 className="section-title">Technologies I work with</h3>
          <div className="skills-category">
            <div className="tech-carousel-stage">
              <TechCarousel technologies={techStackTop} direction="left" />
              <TechCarousel technologies={techStackBottom} direction="right" />
            </div>
          </div>
          <div className="skills-category" style={{ marginTop: '80px' }}>
            <h4 style={{ marginBottom: '60px' }}>Professional Competencies</h4>

            <div className="knowledge-blocks-container">
              <div className="knowledge-block">
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Web Development & APIs</h5>
                  <p className="knowledge-description">
                    Building dynamic interfaces and reliable client-server communication.
                  </p>
                  <ul className="knowledge-list">
                    <li>REST API consumption with Fetch and Axios</li>
                    <li>JSON response handling and Postman</li>
                    <li>Debugging & Chrome DevTools</li>
                    <li>Error handling and HTTP logs</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageWeb}
                    alt="Web development and code"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

              <div className="knowledge-block reversed">
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Databases & Analysis</h5>
                  <p className="knowledge-description">
                    Designing, structuring, and processing information to extract value through data analysis.
                  </p>
                  <ul className="knowledge-list">
                    <li>Entity-relationship schema design</li>
                    <li>Database normalization</li>
                    <li>Statistical processing</li>
                    <li>Data preparation and cleaning</li>
                    <li>Decision-oriented analysis</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageDataAnalysis}
                    alt="Data analysis dashboard"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

              <div className="knowledge-block">
                {/* Text */}
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Software Engineering & Architecture</h5>
                  <p className="knowledge-description">
                    Applying engineering principles to design, document, and build maintainable software.
                  </p>
                  <ul className="knowledge-list">
                    <li>Object-oriented programming (OOP)</li>
                    <li>Concurrent programming</li>
                    <li>Technical documentation</li>
                    <li>Requirements engineering</li>
                    <li>Agile methodologies</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageSoftwareEngineering}
                    alt="Teamwork and engineering"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

              <div className="knowledge-block reversed">
                <div className="knowledge-text">
                  <h5 className="knowledge-title">Architecture, Quality & Infrastructure</h5>
                  <p className="knowledge-description">
                    Designing robust solutions with a focus on quality, testing, observability, and core infrastructure.
                  </p>
                  <ul className="knowledge-list">
                    <li>Software architecture design</li>
                    <li>Advanced error handling</li>
                    <li>Debugging and observability</li>
                    <li>Automation and testing with Playwright</li>
                    <li>Basic Linux administration</li>
                  </ul>
                </div>
                <div className="knowledge-image">
                  <img
                    src={imageWeb}
                    alt="Architecture, quality, and infrastructure"
                    className="knowledge-img-styled"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: PROJECTS --- */}
      <section id="portfolio" className="section dark-bg">
        <div className="content-wrapper">

          <div className="section-header-center">
            <h3 className="section-title">Projects</h3>
            <div className="title-underline"></div>
          </div>

          <div className="projects-grid">

            {/* PROJECT 1: LARAVEL */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imageWebMR} alt="App Laravel" />
              </div>
              <div className="project-content">
                <h4>Laravel Web Application</h4>
                <p>
                  MyReport web platform developed with Laravel
                  (PHP), a MySQL database, a responsive Bootstrap interface,
                  and dynamic content loading for report management and visualization.
                </p>
                <div className="project-tags">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            {/* PROJECT 2: WEBVENTAS */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imageWebVentas} alt="WebVentas e-commerce" />
              </div>
              <div className="project-content">
                <h4>WebVentas E-commerce</h4>
                <p>
                  Online store for clothing and product sales, including catalog, cart,
                  users, sales generation, receipts, online payments with Conekta,
                  and a foundation prepared for invoicing and reporting.
                </p>
                <div className="project-tags">
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>PDO</span>
                  <span>JavaScript</span>
                  <span>Conekta</span>
                  <span>FastAPI</span>
                </div>
              </div>
            </div>

            {/* PROJECT 3: PREDICTION MODEL */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imageModeloPrediccion} alt="Apple price prediction model" />
              </div>
              <div className="project-content">
                <h4>Apple Pricing Prediction Model</h4>
                <p>
                  Web application that estimates Apple product prices in USD using
                  an MLP neural network trained with TensorFlow/Keras, a FastAPI REST API,
                  and a Next.js frontend to capture inputs and display predictions.
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>FastAPI</span>
                  <span>TensorFlow</span>
                  <span>Keras</span>
                  <span>Scikit-learn</span>
                </div>
              </div>
            </div>

            {/* PROJECT 4: WHATSAPP CHATBOT */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={imgchat} alt="Chatbot WhatsApp" />
              </div>
              <div className="project-content">
                <h4>WhatsApp Chatbot</h4>
                <p>
                  Bot integrated with the WhatsApp Business API. It can automatically
                  answer customer questions, manage orders, and send real-time information to support basic user purchases.
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

            {/* PROJECT 5: GODOT GAME */}
            <div className="project-card">
              <div className="project-img-container">
                <img src={ImageJuego} alt="Godot game" />
              </div>
              <div className="project-content">
                <h4>Godot Video Game</h4>
                <p>
                  2D video game developed with Godot Engine. It implements custom physics mechanics,
                  interactive level design, and deadly enemies.
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
      {/* --- SECTION 5: EDUCATION --- */}
      <section id="Education" className="section dark-bg">
        <div className="content-wrapper">
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Education</h3>

          <div className="education-card-full">

            <div className="edu-banner-container">
              <img src={educationImage} alt="University banner" className="edu-banner-img" />
            </div>

            <div className="edu-content-box">

              <div className="edu-header-row">
                <span className="edu-subtitle-icon">Software Engineering</span>
              </div>

              <h2 className="edu-university">Polytechnic University of Durango</h2>

              <div className="edu-meta-row">
                <div className="meta-item">
                  <span>BIS Universities Sustainable</span>
                </div>
                <div className="meta-item green-text">
                  <span className="meta-icon">📅</span>
                  <span>September 2023 - April 2027 (Expected)</span>
                </div>
              </div>

              <p className="edu-description">
                Specialized training in software development, systems architecture, and agile methodologies.
                Bilingual and sustainable approach.
              </p>

              <div className="edu-tags-container">
                <span className="edu-tag">Software Development</span>
                <span className="edu-tag">Systems Architecture</span>
                <span className="edu-tag">Agile Methodologies</span>
                <span className="edu-tag">Bilingual Focus</span>
                <span className="edu-tag">Technological Innovation</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* --- SECTION 6: CERTIFICATIONS --- */}
      <section id="certifications" className="section darker-bg">
        <div className="content-wrapper">

          {/* Main section title */}
          <div className="section-header-center">
            <h3 className="section-title">Certifications</h3>
            <div className="title-underline"></div>
          </div>

          {/* ==================== AWS BLOCK ==================== */}

          {/* AWS HEADER */}
          <div className="cert-simple-header">
            <h4>AWS Academy</h4>
          </div>

          {/* AWS GRID */}
          <div className="certs-grid-aws">
            {/* --- AWS --- */}
            {awsCertifications.map((cert) => (
              <a key={cert.title} href={cert.url} className="aws-card" target="_blank" rel="noreferrer">
                <div className="aws-card-top"><img src={cert.image} alt={cert.title} className="aws-badge-img" /><span className="aws-badge-label">Certification Badge</span></div>
                <div className="aws-card-bottom"><div className="aws-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div className="aws-card-text"><h4>{cert.title}</h4><p>{cert.issuer}</p></div></div>
              </a>
            ))}
          </div>

          <div style={{ height: '50px' }}></div>

          {/* ==================== SAS BLOCK ==================== */}

          {/* SAS HEADER */}
          <div className="cert-simple-header">
            <h4>SAS Academy</h4>
          </div>

          {/* SAS GRID */}
          <div className="certs-grid-sas">
            {sasCertifications.map((cert) => (
              <a key={cert.title} href={cert.url} className="sas-card" target="_blank" rel="noreferrer">
                <div className="sas-card-top">
                  <img src={cert.image} alt={cert.title} className="sas-badge-img" />
                  <span className="sas-badge-label">Certification Badge</span>
                </div>
                <div className="sas-card-bottom">
                  <div className="sas-check-icon">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="sas-card-text">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ==================== CISCO BLOCK ==================== */}

          <div style={{ height: '50px' }}></div>

          {/* CISCO HEADER */}
          <div className="cert-simple-header">
            <h4>Cisco Networking Academy</h4>
          </div>

          {/* CISCO GRID */}
          <div className="certs-grid-cisco">
            <div className="cisco-card">
              <div className="cisco-card-top">
                <svg className="cisco-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5zM6.75 10.5h.008v.008h-.008V10.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 16.5v.75m6-.75v.75m-6-3.75h6" /></svg>
                <span className="cisco-badge-label">Certification Badge</span>
              </div>
              <div className="cisco-card-bottom">
                <div className="cisco-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div className="cisco-card-text"><h4>Fundamentals of Switching, Routing, and Wireless Networking</h4><p>Cisco Networking Academy</p></div>
              </div>
            </div>

            <div className="cisco-card">
              <div className="cisco-card-top">
                <svg className="cisco-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5zM6.75 10.5h.008v.008h-.008V10.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 16.5v.75m6-.75v.75m-6-3.75h6" /></svg>
                <span className="cisco-badge-label">Certification Badge</span>
              </div>
              <div className="cisco-card-bottom">
                <div className="cisco-check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                <div className="cisco-card-text"><h4>Introduction to Networks</h4><p>Cisco Networking Academy</p></div>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* --- SECTION 6: CONTACT --- */}
      <section id="contact" className="section dark-bg">
        <div className="content-wrapper contact-container">
          <h3 className="section-title">Contact me</h3>
          <p className="contact-text">
            Have a project in mind or want to collaborate? <br />
            I'm available for new opportunities.
          </p>

          <div className="contact-buttons-grid">

            {/* Button 1: Email */}
            <a href="mailto:leoflrs73@gmail.com" className="btn btn-accent">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mail.png"
                alt="Email"
                className="btn-icon"
              />
              Send Email
            </a>

            {/* Button 2: LinkedIn */}
            <a href="https://www.linkedin.com/in/leonel-d-l-cruz-flores/" target="_blank" className="btn btn-accent">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                alt="LinkedIn"
                className="btn-icon"
              />
              LinkedIn
            </a>

            {/* Button 3: WhatsApp */}
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
            <p>© {new Date().getFullYear()} Leonel Flores. All rights reserved.</p>
          </div>

          <div className="footer-right">
            <a href="https://github.com/Leonel-Flores1704" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/leonel-d-l-cruz-flores/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="leoflrs73@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        className={`back-to-top ${showBackTop ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </a>

    </div>



  )
}

export default App
