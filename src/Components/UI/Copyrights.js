import "./Copyrights.css"

function Copyrights (){

    return(
        <div className="copyright-div">
            <div className="direct-contact-container">
                <p className="contact-text">Lesly Williams</p>
                <ul className="social-media-list">
                    <li><a href="https://github.com/Lwilliams002" target="_blank" className="contact-icon">
                        <i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://github.com/Lwilliams002" target="_blank" className="contact-icon">
                        <i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div className="copyright">
                    &copy; ALL OF THE RIGHTS RESERVED
                </div>

            </div>
        </div>

    )
}
export default Copyrights;