function Hero() {
    return ( 
        <div className="conatiner p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image"  style={{width: "60%", display:"block",margin:"0 auto"}}/>
                <h1 className="mt-5">Invest in everything</h1>
                <p className="fs-4 mt-3">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="btn btn-primary p-2 mt-4 fs-5 mb-5" style={{width: "10%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;