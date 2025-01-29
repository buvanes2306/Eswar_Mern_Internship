import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>My name is Buvanes and I'm a computer science engineer.</p>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm Buvanes, a passionate computer science engineer with expertise in Artificial intelligence. 
        I love creating impactful projects that solve real-world problems.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>Project 1</h3>
            <p>A brief description of the project. Include features or technologies used.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>A brief description of the project. Include features or technologies used.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>A brief description of the project. Include features or technologies used.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to email me at <a href="mailto:youremail@example.com">youremail@example.com</a> or connect on <a href="#" target="_blank">LinkedIn</a>.</p>
      </section>
    </div>
  );
}

export default App;