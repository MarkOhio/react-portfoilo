import "../styles/stats.css";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";

const statsData = [ 
  { number: "3+", label: "Years Experience" }, 
  { number: "20+", label: "Technologies Used" },
];

function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="stats-container">
        <VideoPlayer/>
        {statsData.map((stat, index) => (
          <div className="stat-box" key={index}>
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}

        <Footer/>
      </div>
    </section>
  );
}

export default Stats;

