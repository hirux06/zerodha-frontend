function Hero() {
    return (  
        <div className="container border-bottom ">
            <div className="row text-center mt-5 p-5 border-bottom">
                <h1 className="mt-5">Pricing</h1>
                <h3 className="mt-3 text-muted fs-4">Free equity investments and flat ₹20 intraday and F&O trades</h3>
            </div>

            <div className="row text-center p-5 mb-5">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:"70%"}}/>
                    <h3 className="mt-3">Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrade.svg"style={{width:"70%"}}/>
                    <h3 className="mt-3">Intraday and F&O trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" style={{width:"70%"}}/>
                    <h3 className="mt-3">Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

            
        </div>
    );
}

export default Hero;