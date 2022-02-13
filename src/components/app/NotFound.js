import '../../assets/css/notFound.css';

const NotFound = () => {
    return (
        <>
        <h1>Ooops!!! Something go wrong!!</h1>
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
            <a referrerPolicy="no-referrer" href="/" className="more-link">Go Home</a>
        </div>
        </>
    )
}

export default NotFound;