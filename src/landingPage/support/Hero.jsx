function Hero() {
    return ( 
        <section className="container-fluid" id="support">
            <div className="p-5" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="">Track Tickets</a>
            </div>
            <div className="row m-3" id="helllo">
                <div className="col-6 p-3">
                    <h1 className="fs-3 mb-2">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg. how do I ctivate F&O"/> <br />
                    <a href="">Track account opening </a> 
                    <a href="">Track segment activation </a>
                    <a href="">Intraday margins </a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 ps-3">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a href="">BSE StAR Mutual Fund platform downtime</a></li>
                        <li><a href="">Surveillance measure on scrips - June 2024</a></li>
  
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;