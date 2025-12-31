
// src/components/Footer.tsx
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
       

      
        <div className="footer-socials">
          <a href="mailto:youremail@example.com" aria-label="Email">📧</a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" aria-label="GitHub">💻</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">🔗</a>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;

