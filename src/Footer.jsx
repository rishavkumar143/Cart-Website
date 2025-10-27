import './Footer.css';

function Footer(){
    return(
        <>
            <div className="Footer">
              <h3>Cart WebPage</h3>
              <p>Stay updated with accurate and real-time weather updates worldwide.</p>
              <h4>© {new Date().getFullYear()} Weather App. All rights reserved.</h4>
            </div>
        </>
    )
}
export default Footer