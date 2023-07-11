const About = () => {
  return (
    <div className="bg-slate-400">
      <div>
        <h2 className=" font-bold text-5xl text-center mb-8">Know Me More</h2>
      </div>
      <div>
        <div className="md:mx-72 mx-8 my-8 md:my-16">
          <p>
            I am Sohag Hossain and I am a React Developer. I have a strong
            passion for web development and creating interactive and
            user-friendly experiences for users.I pursued my education at
            Manarat International University where I studied Computer Science
            and Engineering.
          </p>
        </div>
        <div className="text-center pb-20">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Projects</div>
              <div className="stat-value">50+</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">React</div>
              <div className="stat-value text-secondary">30+</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">HTML,CSS</div>
              <div className="stat-value">20+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
