import imageSrc2 from './img/selfphotoflowers.jpg';

const AboutPage = () => {
  return (
    <div className="aboutPage section-block">
      <h1 className="slideheaders">About</h1>

      <div className="about-card">
        <img src={imageSrc2} alt="Joshua McMahon" className="profileimage" />

        <div className="slidebody about-text">
          <p>
            Hi, I'm Joshua McMahon! I am from Los Angeles, California and I am currently a senior studying <strong>Computer
            Science</strong> at <strong>Cornell University</strong>.
          </p>

          <p>
            My technical experience spans front-end, back-end, and mobile development. 
            I have worked with <strong>HTML, CSS, JavaScript, TypeScript</strong>, and <strong>ReactJS</strong> for building user-facing applications, and I also have experience developing mobile apps with <strong>Swift, React Native</strong>, and Expo. 
            On the back end, I have worked with <strong>APIs, Firebase,</strong> and <strong>PostgreSQL</strong>, including in my role on the Engineers Without Borders project team at Cornell. 
            I am also proficient in <strong>Python, Java, and C++</strong>, which have strengthened my foundation in software engineering across a range of projects.
          </p>

          <p>
            Apart from academics I am part of the Cornell Taekwondo Sport Club team. Additionally some of my favorite hobbies
            are to work out, play basketball, play piano, and learn languages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;