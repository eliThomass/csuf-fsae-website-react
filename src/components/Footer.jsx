import '../App.css';

function Footer() {
    return (
        <footer>
            <div className="footer-column">
                <h3>Titan Racing</h3>
                <p>Founded in 2001, Titan Racing is CSUF's Premier Formula SAE Organization focused on the unification of talented individuals in pursuit of speed.</p>
                <p className="copyright">©2025 by Titan Racing</p>
            </div>

            <div className="footer-column">
                <h3>Contact</h3>
                <span>California State University, Fullerton</span>
                <span>800 N. State College Blvd.</span>
                <span>Fullerton, CA 92831-3599</span>
                <a href="mailto:titanracingformula@gmail.com">titanracingformula@gmail.com</a>
            </div>

            <div className="footer-column">
                <h3>Socials</h3>
                <a href="https://www.youtube.com/@csuffsae7107" target="_blank" rel="noreferrer">Youtube</a> <br />
                <a href="https://www.instagram.com/csuf_fsae/?hl=en" target="_blank" rel="noreferrer">Instagram</a> <br />
            </div>
        </footer>
    );
}

export default Footer;
