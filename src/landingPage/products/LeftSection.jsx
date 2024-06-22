function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={imageURL}  />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo   &nbsp;<i className="fa fa-long-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More &nbsp;<i className="fa fa-long-arrow-right"></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={tryDemo}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={learnMore}><img src="media/images/appStoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;