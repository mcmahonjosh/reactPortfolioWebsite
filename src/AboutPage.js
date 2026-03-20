import imageSrc2 from './img/selfphotoflowers.jpg';

const AboutPage = () => {
  return (
    <div className="aboutPage section-block">
      <h1 className="slideheaders">About</h1>

      <div className="about-card">
        <img src={imageSrc2} alt="Joshua McMahon" className="profileimage" />

        <div className="slidebody about-text">
          <p>
            Hello, My name is Joshua McMahon! I am from Los Angeles, California and I am currently studying Computer
            Science at Cornell University.
          </p>

          <p>
            My technical skills include front-end development languages and frameworks such as HTML and CSS as well as ReactJS.
            I also have experience in iOS development and have worked on multiple apps with Swift. In addition I have back-end
            experience with non SQL databases such as Google Cloud Firestore and am currently using Firestore in my role as a
            back-end developer on the project team Engineers Without Borders at Cornell. Finally, I am fluent in C++, Java,
            and Python.
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