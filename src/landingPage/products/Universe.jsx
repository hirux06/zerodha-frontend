function Universe() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p >Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4  p-3">
                    <img src="media/images/smallcase.png"  />
                    <p className="text-small text-muted">Thematic Investment Platform</p>
                </div>
                <div className="col-4  p-3">
                    <img src="media/images/streak.png" style={{width:"40%"}} />
                    <p className="text-small text-muted">Algo & stratergy platform</p>
                </div>
                <div className="col-4  p-3">
                    <img src="media/images/sensibull.svg"  />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4  p-3 mt-5">
                    <img src="media/images/zerodhafundhouse.png" style={{width:"50%"}} />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4  p-3 mt-5">
                    <img src="media/images/tijori.svg" style={{width:"40%"}} />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>
                <div className="col-4  p-3 mt-5">
                    <img src="media/images/ditto.png" style={{width:"30%"}}  />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button className="btn btn-primary p-2 mt-4 fs-5 mb-5" style={{width: "10%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;