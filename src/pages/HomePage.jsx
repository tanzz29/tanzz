// // src/pages/HomePage.jsx
// const HomePage = () => {
//   return (
//     <div className="page-container" style={{overflow:"auto"}}>
//       <h1>Welcome to Vivekanand College!</h1>
//       <p>
//         **Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
//       </p>
//       <p>
//         At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
//       </p>
//       <h2>Why Choose Vivekanand College?</h2>
//       <ul>
//         <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
//         <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
//         <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
//         <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
//         <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
//       </ul>
//       <div className="call-to-action">
//         <p>Ready to start your journey with us?</p>
//         <a href="/admission" className="btn">Apply Now!</a> {/* Assuming an /admission route or link */}
//       </div>
//     </div>
//   );
// }
// export default HomePage;


// / src/pages/HomePage.jsx
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import CollegeBanner from '../assets/images/college-banner.png';
import StudentsStudying from '../assets/images/students-studying.jpeg';
import CampusLife from '../assets/images/campus-life.jpg';
// Add more image imports if needed
function HomePage() {
  return (
    <div className="page-container" style={{overflow:"auto"}}>
      {/* Hero/Banner Section with Image */}
      <div className="hero-section">
        <img src={CollegeBanner} alt="Vivekanand College Campus" className="hero-banner-image" />
        <div className="hero-overlay-text">
          <h1>Welcome to Vivekanand College!</h1>
          <p>Your journey to excellence starts here.</p>
          <Link to="/admissions" className="btn hero-btn">Apply Now!</Link> {/* Updated link */}
        </div>
      </div>
      <p>
        <b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
      </p>
      <p>
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
        <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
        <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
      </ul>
      {/* Image Gallery Section */}
      <h2>Campus Life & Facilities</h2>
      <div className="image-gallery">
        <img src={StudentsStudying} alt="Students studying in library" />
        <img src={CampusLife} alt="Students on campus ground" />
        {/* Add more <img> tags for other images if you have them */}
      </div>
      <p>
        Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
      </p>
      <div className="call-to-action">
        <p>Ready to explore our courses?</p>
        <Link to="/courses" className="btn">Explore Courses</Link> {/* Linked to /courses */}
      </div>
    </div>
  );
}
export default HomePage;