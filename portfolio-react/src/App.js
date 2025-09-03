// import React, { useEffect, useState } from 'react';
// import { createIcons } from 'lucide';

// const Project = ({ title, img, tech, description, link, linkText, borderColor, delay }) => {
//  const isGif = img.endsWith('.gif');
//  return (
//  <div
//  className={`bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-${borderColor}-500 hover:scale-105 transition-all duration-300 card animate-on-scroll`}
//  style={{ animationDelay: `${delay}s` }}
//  >
//  <img src={img} alt={`${title} image`} className="w-full rounded-xl mb-4" />
//  <h4 className="text-2xl font-semibold text-white mb-2">{title}</h4>
//  <p className="text-sm font-light text-gray-400 mb-4">{tech}</p>
//  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
//  {description.map((item, index) => (
//  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
//  ))}
//  </ul>
//  <a href={link} target="_blank" rel="noopener noreferrer" className={`text-${borderColor}-400 hover:text-${borderColor}-500 transition-colors duration-300 flex items-center space-x-2`}>
//  <i className="icon" data-lucide={linkText === 'Project Link' ? 'link' : 'github'}></i>
//  <span>{linkText}</span>
//  </a>
//  </div>
//  );
// };

// const ProjectSection = ({ projects, id, active }) => (
//  <div id={id} className={`project-section space-y-12 ${!active && 'hidden'}`}>
//  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//  {projects.map((project, index) => (
//  <Project
//  key={project.title}
//  title={project.title}
//  img={project.img}
//  tech={project.tech}
//  description={project.description}
//  link={project.link}
//  linkText={project.linkText}
//  borderColor={project.borderColor}
//  delay={index * 0.2}
//  />
//  ))}
//  </div>
//  </div>
// );

// const Portfolio = () => {
//  const [showFullAbout, setShowFullAbout] = useState(false);
//  const [activeTab, setActiveTab] = useState('all-projects');

//  const projectsData = {
//  'all-projects': [
//  {
//  title: 'Semantic Book Recommender System 📚',
//  img: 'src/webpage.png',
//  tech: 'Gradio, LangChain, ChromaDB, Hugging Face',
//  description: [
//  '<strong>Text Processing & Semantic Search:</strong> Developed a book recommendation system using Hugging Face embeddings, processing content descriptions, categories, and emotional tones for accurate suggestions.',
//  '<strong>Database Optimization & Search Efficiency:</strong> Implemented ChromaDB for efficient semantic search and optimized data chunking and database queries to ensure scalability and performance.',
//  '<strong>User Interface Design:</strong> Created an intuitive Gradio dashboard that allows users to filter book recommendations by category and emotional tone.'
//  ],
//  link: 'https://github.com/HarishSingaravelan',
//  linkText: 'GitHub Link',
//  borderColor: 'purple',
//  },
//  {
//  title: 'Diabetics Analysis, Prediction & Deployment',
//  img: 'src/diabetics.png',
//  tech: 'Sklearn, Pandas, Numpy, Flask',
//  description: [
//  '<strong>Data Analysis & Optimization:</strong> Analyzed diabetes dataset and optimized multiple classifiers (Hist Gradient Boosting, Logistic Regression, Random Forest, KNN) using a pipeline and grid search.',
//  '<strong>Prediction & Deployment:</strong> Achieved an F1 score of 82% for predicting diabetes and deployed the model in a Flask server.'
//  ],
//  link: '#',
//  linkText: 'Project Link',
//  borderColor: 'red',
//  },
//  {
//  title: 'DocuPal - PDF Chat QA',
//  img: 'src/ui.gif',
//  tech: 'Ollama, LangChain, ChromaDB, Streamlit',
//  description: [
//  '<strong>PDF Processing & Indexing:</strong> Uploadable PDF files are parsed with PyMuPDF, text is chunked and embedded using Ollama embeddings, and stored in ChromaDB for fast semantic search.',
//  '<strong>RAG Workflow:</strong> Questions are embedded and matched against PDF chunks via ChromaDB; retrieved content is used as context for Ollama’s LLM to generate accurate, grounded answers.',
//  '<strong>Dockerized Web App:</strong> A Streamlit front-end provides an intuitive chat interface. The application is containerized with Docker, enabling seamless local or cloud deployment.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/DocuPal',
//  linkText: 'GitHub Link',
//  borderColor: 'indigo',
//  },
//  {
//  title: 'Streaming with Airflow & Kafka',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q3enZ6dG5hNGg0c3JtMXRjYjZlMmcwN2w5dWU1M2J3NzkwcWcxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T237g1X8fI2d2d85nS/giphy.gif',
//  tech: 'Kafka, Airflow, Docker, MySQL',
//  description: [
//  '<strong>Schedules Data Fetching:</strong> An Airflow DAG triggers a task that calls the randomuser.me API to generate fake user data at regular intervals.',
//  '<strong>Streams Data to Kafka:</strong> Fetched user data is sent to a Kafka topic, acting as a real-time message queue.',
//  '<strong>Consumes & Stores Data:</strong> A Kafka consumer reads messages from the topic and stores them in MySQL.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Streaming-with-Airflow-Kafka',
//  linkText: 'GitHub Link',
//  borderColor: 'yellow',
//  },
//  {
//  title: 'ETL Pipeline for Retail Analytics',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqbmZ5Z254NmVmd3N1em1kdW96dWFzcjA4amc1c2s1MWx4eDh3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1x01a4w93LwXyWc233/giphy.gif',
//  tech: 'Apache Spark, Apache Airflow, MongoDB, MySQL',
//  description: [
//  '<strong>ETL & Data Integration:</strong> Designed and implemented an ETL pipeline for large-scale retail transactions from multiple sources.',
//  '<strong>Batch Processing & Optimization:</strong> Developed a Spark-based workflow to optimize inventory tracking, sales forecasting, and order management.',
//  '<strong>Workflow Automation:</strong> Automated daily data processing tasks using Apache Airflow.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Retail-Analytics-ETL',
//  linkText: 'GitHub Link',
//  borderColor: 'orange',
//  },
//  {
//  title: 'Global Agricultural Production Analysis & Visualization',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtoc3ZpazJrbXhveDRyeXJucjdxYXJ6eGdtY2J6NG1icnBsdDRkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MylF6O949fG4uSA/giphy.gif',
//  tech: 'Tableau',
//  description: [
//  '<strong>Data Visualization & Dashboarding:</strong> Designed an interactive Tableau dashboard to analyze global agricultural production trends from 1960 to 2021.',
//  '<strong>Data Integration & Transformation:</strong> Processed and normalized agricultural production data from multiple sources to ensure consistency.',
//  '<strong>Interactive Filtering & Insights:</strong> Implemented dynamic filters for farm produce and countries, allowing users to gain granular insights.'
//  ],
//  link: 'https://public.tableau.com/app/profile/harish.singaravelan/viz/Book1_17436107066220/Dashboard1',
//  linkText: 'Project Link',
//  borderColor: 'blue',
//  },
//  {
//  title: 'Loan Approval Analysis using SQL',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXV6azg0cGxmcjVsdzRzcjQ1ZHV2OWE3c2p4emZ0Z2gyMG16Z3NlMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpPj2X83Xn8bQ7S/giphy.gif',
//  tech: 'SQL',
//  description: [
//  '<strong>Data Exploration:</strong> Performed data exploration using SQL queries to examine loan data structure and contents.',
//  '<strong>Statistical Analysis:</strong> Analyzed loan approval rates based on key factors like credit history and marital status.',
//  '<strong>Financial Metrics:</strong> Calculated key financial metrics, including average loan amount and loan amount frequency.',
//  '<strong>Approval Percentage:</strong> Determined the total count and percentage of approved loans within the dataset.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Loan-Approval-Analysis-using-SQL',
//  linkText: 'GitHub Link',
//  borderColor: 'teal',
//  },
//  {
//  title: 'COVID-19 EDA using SQL',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXg0enZidTN3d3R6aXJydnBldDhrZW42Z2d2NnFxYnJ6c2J0aW9uYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d1zT1u5f9B65j2o/giphy.gif',
//  tech: 'SQL',
//  description: [
//  '<strong>Data Exploration:</strong> Explored COVID-19 data to analyze total cases, total deaths, and population by location and date.',
//  '<strong>Death & Infection Rates:</strong> Calculated the percentage of total deaths per total cases and the percentage of infected people per population.',
//  '<strong>Global Analysis:</strong> Analyzed death counts and infection rates by country and continent to identify key trends.',
//  '<strong>Vaccination Tracking:</strong> Tracked the rolling total of vaccinated people by location.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/COVID-EDA-using-SQL',
//  linkText: 'GitHub Link',
//  borderColor: 'green',
//  },
//  ],
//  'data-science-projects': [
//  {
//  title: 'Semantic Book Recommender System 📚',
//  img: 'src/webpage.png',
//  tech: 'Gradio, LangChain, ChromaDB, Hugging Face',
//  description: [
//  '<strong>Text Processing & Semantic Search:</strong> Developed a book recommendation system using Hugging Face embeddings, processing content descriptions, categories, and emotional tones for accurate suggestions.',
//  '<strong>Database Optimization & Search Efficiency:</strong> Implemented ChromaDB for efficient semantic search and optimized data chunking and database queries to ensure scalability and performance.'
//  ],
//  link: 'https://github.com/HarishSingaravelan',
//  linkText: 'GitHub Link',
//  borderColor: 'purple',
//  },
//  {
//  title: 'Diabetics Analysis, Prediction & Deployment',
//  img: 'src/diabetics.png',
//  tech: 'Sklearn, Pandas, Numpy, Flask',
//  description: [
//  '<strong>Data Analysis & Optimization:</strong> Analyzed diabetes dataset and optimized multiple classifiers (Hist Gradient Boosting, Logistic Regression, Random Forest, KNN) using a pipeline and grid search.',
//  '<strong>Prediction & Deployment:</strong> Achieved an F1 score of 82% for predicting diabetes and deployed the model in a Flask server.'
//  ],
//  link: '#',
//  linkText: 'Project Link',
//  borderColor: 'red',
//  },
//  {
//  title: 'DocuPal - PDF Chat QA',
//  img: 'src/ui.gif',
//  tech: 'Ollama, LangChain, ChromaDB, Streamlit',
//  description: [
//  '<strong>PDF Processing & Indexing:</strong> Uploadable PDF files are parsed with PyMuPDF, text is chunked and embedded using Ollama embeddings, and stored in ChromaDB for fast semantic search.',
//  '<strong>RAG Workflow:</strong> Questions are embedded and matched against PDF chunks via ChromaDB; retrieved content is used as context for Ollama’s LLM to generate accurate, grounded answers.',
//  '<strong>Dockerized Web App:</strong> A Streamlit front-end provides an intuitive chat interface. The application is containerized with Docker, enabling seamless local or cloud deployment.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/DocuPal',
//  linkText: 'GitHub Link',
//  borderColor: 'indigo',
//  },
//  ],
//  'data-engineering-projects': [
//  {
//  title: 'Streaming with Airflow & Kafka',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q3enZ6dG5hNGg0c3JtMXRjYjZlMmcwN2w5dWU1M2J3NzkwcWcxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/T237g1X8fI2d2d85nS/giphy.gif',
//  tech: 'Kafka, Airflow, Docker, MySQL',
//  description: [
//  '<strong>Schedules Data Fetching:</strong> An Airflow DAG triggers a task that calls the randomuser.me API to generate fake user data at regular intervals.',
//  '<strong>Streams Data to Kafka:</strong> Fetched user data is sent to a Kafka topic, acting as a real-time message queue.',
//  '<strong>Consumes & Stores Data:</strong> A Kafka consumer reads messages from the topic and stores them in MySQL.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Streaming-with-Airflow-Kafka',
//  linkText: 'GitHub Link',
//  borderColor: 'yellow',
//  },
//  {
//  title: 'ETL Pipeline for Retail Analytics',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVqbmZ5Z254NmVmd3N1em1kdW96dWFzcjA4amc1c2s1MWx4eDh3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1x01a4w93LwXyWc233/giphy.gif',
//  tech: 'Apache Spark, Apache Airflow, MongoDB, MySQL',
//  description: [
//  '<strong>ETL & Data Integration:</strong> Designed and implemented an ETL pipeline for large-scale retail transactions from multiple sources.',
//  '<strong>Batch Processing & Optimization:</strong> Developed a Spark-based workflow to optimize inventory tracking, sales forecasting, and order management.',
//  '<strong>Workflow Automation:</strong> Automated daily data processing tasks using Apache Airflow.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Retail-Analytics-ETL',
//  linkText: 'GitHub Link',
//  borderColor: 'orange',
//  },
//  ],
//  'data-analytics-projects': [
//  {
//  title: 'Global Agricultural Production Analysis & Visualization',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtoc3ZpazJrbXhveDRyeXJucjdxYXJ6eGdtY2J6NG1icnBsdDRkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MylF6O949fG4uSA/giphy.gif',
//  tech: 'Tableau',
//  description: [
//  '<strong>Data Visualization & Dashboarding:</strong> Designed an interactive Tableau dashboard to analyze global agricultural production trends from 1960 to 2021.',
//  '<strong>Data Integration & Transformation:</strong> Processed and normalized agricultural production data from multiple sources to ensure consistency.',
//  '<strong>Interactive Filtering & Insights:</strong> Implemented dynamic filters for farm produce and countries, allowing users to gain granular insights.'
//  ],
//  link: 'https://public.tableau.com/app/profile/harish.singaravelan/viz/Book1_17436107066220/Dashboard1',
//  linkText: 'Project Link',
//  borderColor: 'blue',
//  },
//  {
//  title: 'Loan Approval Analysis using SQL',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXV6azg0cGxmcjVsdzRzcjQ1ZHV2OWE3c2p4emZ0Z2gyMG16Z3NlMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2SpPj2X83Xn8bQ7S/giphy.gif',
//  tech: 'SQL',
//  description: [
//  '<strong>Data Exploration:</strong> Performed data exploration using SQL queries to examine loan data structure and contents.',
//  '<strong>Statistical Analysis:</strong> Analyzed loan approval rates based on key factors like credit history and marital status.',
//  '<strong>Financial Metrics:</strong> Calculated key financial metrics, including average loan amount and loan amount frequency.',
//  '<strong>Approval Percentage:</strong> Determined the total count and percentage of approved loans within the dataset.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/Loan-Approval-Analysis-using-SQL',
//  linkText: 'GitHub Link',
//  borderColor: 'teal',
//  },
//  {
//  title: 'COVID-19 EDA using SQL',
//  img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXg0enZidTN3d3R6aXJydnBldDhrZW42Z2d2NnFxYnJ6c2J0aW9uYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d1zT1u5f9B65j2o/giphy.gif',
//  tech: 'SQL',
//  description: [
//  '<strong>Data Exploration:</strong> Explored COVID-19 data to analyze total cases, total deaths, and population by location and date.',
//  '<strong>Death & Infection Rates:</strong> Calculated the percentage of total deaths per total cases and the percentage of infected people per population.',
//  '<strong>Global Analysis:</strong> Analyzed death counts and infection rates by country and continent to identify key trends.',
//  '<strong>Vaccination Tracking:</strong> Tracked the rolling total of vaccinated people by location.'
//  ],
//  link: 'https://github.com/HarishSingaravelan/COVID-EDA-using-SQL',
//  linkText: 'GitHub Link',
//  borderColor: 'green',
//  },
//  ],
//  };

//  useEffect(() => {
//  // Initialize Lucide icons on component mount
//  createIcons();

//  // Intersection Observer for scroll-triggered animations
//  const observer = new IntersectionObserver((entries, obs) => {
//  entries.forEach(entry => {
//  if (entry.isIntersecting) {
//  entry.target.classList.add('visible');
//  obs.unobserve(entry.target);
//  }
//  });
//  }, { threshold: 0.1 });

//  document.querySelectorAll('.animate-on-scroll').forEach(section => {
//  observer.observe(section);
//  });

//  return () => observer.disconnect();
//  }, [activeTab]);

//  const handleTabChange = (tab) => {
//  setActiveTab(tab);
//  };

//  const activeClass = (tab) =>
//  `project-btn px-6 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
//  activeTab === tab
//  ? 'active-btn text-white bg-gray-700'
//  : 'text-gray-400 hover:text-white hover:bg-gray-700'
//  }`;

//  return (
//  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//  <header className="text-center md:text-left mb-12 flex flex-col items-center md:flex-row md:justify-between">
//  <div>
//  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 rounded-lg section-title">
//  Harish Singaravelan
//  </h1>
//  <p className="text-xl md:text-2xl font-medium text-gray-400 mb-6 section-title" style={{ animationDelay: '0.2s' }}>Data Scientist & Full Stack Developer</p>
//  <div className="flex flex-col md:flex-row items-center md:justify-start space-y-3 md:space-y-0 md:space-x-8 text-gray-400 section-title" style={{ animationDelay: '0.4s' }}>
//  <a href="https://www.linkedin.com/in/harish-singaravelan-b4b4b4b4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300 flex items-center space-x-2">
//  <i className="icon" data-lucide="linkedin"></i>
//  <span>LinkedIn</span>
//  </a>
//  <a href="https://github.com/harish-singaravelan" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300 flex items-center space-x-2">
//  <i className="icon" data-lucide="github"></i>
//  <span>Github</span>
//  </a>
//  <a href="mailto:harishsingaravelan990@gmail.com" className="hover:text-teal-500 transition-colors duration-300 flex items-center space-x-2">
//  <i className="icon" data-lucide="mail"></i>
//  <span>harishsingaravelan990@gmail.com</span>
//  </a>
//  <a href="tel:+15854398914" className="hover:text-orange-500 transition-colors duration-300 flex items-center space-x-2">
//  <i className="icon" data-lucide="phone"></i>
//  <span>+1 (585) 439-8914</span>
//  </a>
//  </div>
//  </div>
//  <div className="mt-8 md:mt-0 md:ml-12 card">
//  <img src="https://placehold.co/150x150/111827/4b5563?text=Profile" alt="Harish Singaravelan Profile" className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg" />
//  </div>
//  </header>

//  <section id="about" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">About Me</h2>
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl animate-on-scroll">
//  <p id="about-me-short" className="text-lg text-gray-300">
//  A highly motivated and results-driven Data Scientist and Full Stack Developer with a strong foundation in both machine learning and web technologies. I hold a Master's degree in Data Science from Rochester Institute of Technology and a Bachelor's in Computer Science and Engineering from Anna University.
//  </p>
//  <div id="about-me-full" className={showFullAbout ? '' : 'hidden'}>
//  <p className="text-lg text-gray-300 mt-4">
//  My expertise lies in building end-to-end data-driven solutions, from designing robust ETL pipelines with Apache Spark and Airflow to developing intelligent applications with LangChain and Streamlit. My projects, such as the Semantic Book Recommender System and Diabetics Analysis, Prediction and Deployment, demonstrate my ability to apply machine learning and data analysis techniques to solve real-world problems.
//  </p>
//  <p className="text-lg text-gray-300 mt-4">
//  As a Full Stack Intern at Hyundai Motors, I developed RESTful APIs using Node.js and MongoDB, which significantly improved operational efficiency. I am proficient in a wide range of technologies, including Python, SQL, Docker, and Tableau, and I am passionate about leveraging my skills to create innovative solutions that drive business value.
//  </p>
//  </div>
//  <a href="#!" onClick={(e) => { e.preventDefault(); setShowFullAbout(!showFullAbout); }} className="text-sm font-semibold text-teal-400 hover:text-teal-300 mt-4 inline-block">
//  {showFullAbout ? 'Show Less' : 'Show More'}
//  </a>
//  </div>
//  </section>

//  <section id="skills" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">Technical Skills</h2>
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl animate-on-scroll">
//  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//  <div className="card">
//  <h3 className="text-xl font-semibold text-teal-300 mb-2">Languages</h3>
//  <ul className="list-disc list-inside space-y-1 text-gray-300">
//  <li>Python</li>
//  <li>Java</li>
//  <li>C++</li>
//  <li>SQL</li>
//  </ul>
//  </div>
//  <div className="card" style={{ animationDelay: '0.2s' }}>
//  <h3 className="text-xl font-semibold text-teal-300 mb-2">Web & Cloud</h3>
//  <ul className="list-disc list-inside space-y-1 text-gray-300">
//  <li>HTML, CSS, JavaScript</li>
//  <li>Flask, Node.js, Express.js</li>
//  <li>Docker, Kubernetes</li>
//  </ul>
//  </div>
//  <div className="card" style={{ animationDelay: '0.3s' }}>
//  <h3 className="text-xl font-semibold text-teal-300 mb-2">Frameworks & Tools</h3>
//  <ul className="list-disc list-inside space-y-1 text-gray-300">
//  <li>PyTorch, Scikit-learn, Pandas, NumPy</li>
//  <li>MongoDB, Git, GitHub, GitLab CI/CD</li>
//  </ul>
//  </div>
//  <div className="card" style={{ animationDelay: '0.4s' }}>
//  <h3 className="text-xl font-semibold text-teal-300 mb-2">Data & Analytics</h3>
//  <ul className="list-disc list-inside space-y-1 text-gray-300">
//  <li>MySQL, Apache Spark, PySpark</li>
//  <li>ETL/ELT</li>
//  <li>Tableau, Power BI, Excel</li>
//  </ul>
//  </div>
//  <div className="card" style={{ animationDelay: '0.5s' }}>
//  <h3 className="text-xl font-semibold text-teal-300 mb-2">Operating Systems</h3>
//  <ul className="list-disc list-inside text-gray-300">
//  <li>Linux</li>
//  </ul>
//  </div>
//  </div>
//  </div>
//  </section>

//  <section id="projects" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">Projects</h2>
//  <nav className="flex flex-wrap justify-center sm:justify-start gap-4 mb-8">
//  <button onClick={() => handleTabChange('all-projects')} className={activeClass('all-projects')}>All</button>
//  <button onClick={() => handleTabChange('data-science-projects')} className={activeClass('data-science-projects')}>Data Science</button>
//  <button onClick={() => handleTabChange('data-engineering-projects')} className={activeClass('data-engineering-projects')}>Data Engineering</button>
//  <button onClick={() => handleTabChange('data-analytics-projects')} className={activeClass('data-analytics-projects')}>Data Analytics</button>
//  </nav>
//  <div className="space-y-12 animate-on-scroll">
//  <ProjectSection
//  projects={projectsData[activeTab]}
//  id={activeTab}
//  active={true}
//  />
//  </div>
//  </section>

//  <section id="experience" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">Experience</h2>
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl animate-on-scroll">
//  <div className="flex flex-col md:flex-row justify-between mb-4">
//  <h3 className="text-2xl font-semibold text-white">Full Stack Intern at Hyundai Motors</h3>
//  <span className="text-lg text-gray-400">Feb 2023 | Chennai, India</span>
//  </div>
//  <ul className="list-disc list-inside text-gray-300 space-y-2">
//  <li>Developed RESTful APIs using Node.js and MongoDB to power the internal spare parts inventory portal.</li>
//  <li>Enabled the inventory team to check real-time availability of 1,000+ spare parts across multiple locations.</li>
//  <li>Reduced manual lookup time by 70% and minimized errors in stock tracking.</li>
//  </ul>
//  </div>
//  </section>

//  <section id="education" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">Education</h2>
//  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl card">
//  <div className="flex justify-between items-start mb-2">
//  <h3 className="text-2xl font-semibold text-white">Rochester Institute of Technology</h3>
//  <span className="text-lg text-gray-400">2024-2026</span>
//  </div>
//  <p className="text-lg text-gray-300">M.S., Data Science</p>
//  <p className="text-sm text-gray-400 mb-2">GPA: 3.94/4.0</p>
//  <p className="text-gray-300 font-medium">Relevant Coursework:</p>
//  <ul className="list-disc list-inside text-sm text-gray-400">
//  <li>Data Science and Data Analytics</li>
//  <li>Applied Statistics</li>
//  <li>Neural Networks</li>
//  <li>Software Construction</li>
//  </ul>
//  </div>
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl card" style={{ animationDelay: '0.2s' }}>
//  <div className="flex justify-between items-start mb-2">
//  <h3 className="text-2xl font-semibold text-white">Anna University</h3>
//  <span className="text-lg text-gray-400">2020-2024</span>
//  </div>
//  <p className="text-lg text-gray-300">B.E., Computer Science and Engineering</p>
//  <p className="text-sm text-gray-400 mb-2">GPA: 8.5/10</p>
//  <p className="text-gray-300 font-medium">Relevant Coursework:</p>
//  <ul className="list-disc list-inside text-sm text-gray-400">
//  <li>Artificial Intelligence</li>
//  <li>DBMS</li>
//  <li>Data Structures & Algorithms</li>
//  </ul>
//  </div>
//  </div>
//  </section>

//  <section id="achievements" className="mb-16">
//  <h2 className="text-4xl font-bold text-white mb-6 border-b-2 border-orange-500 pb-2 section-title">Achievements</h2>
//  <div className="bg-gray-800 p-8 rounded-2xl shadow-xl animate-on-scroll">
//  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//  <div className="card">
//  <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
//  <ul className="list-disc list-inside text-gray-300 space-y-2">
//  <li>Microsoft AI-900 (Azure AI Fundamentals)</li>
//  <li>IBM Data Science</li>
//  </ul>
//  </div>
//  <div className="card" style={{ animationDelay: '0.2s' }}>
//  <h3 className="text-xl font-semibold text-white mb-2">Awards</h3>
//  <ul className="list-disc list-inside text-gray-300 space-y-2">
//  <li>Winner, Smart India Hackathon (AICTE)</li>
//  <li>Runner-Up, Web Designing Competition</li>
//  </ul>
//  </div>
//  </div>
//  </div>
//  </section>

//  <footer className="text-center text-gray-500 text-sm mt-16">
//  <p>&copy; {new Date().getFullYear()} Harish Singaravelan. All Rights Reserved.</p>
//  </footer>
//  </div>
//  );
// };

// export default Portfolio;