import aboutimage from '../../assets/about-img.png'
function About() {
    return ( 
    <>
        <section className="py-4 bg-secondary">
        <div className="container py-4">
            <div className="row gap-md-0 gap-5">
                <div className="col-12 col-md-6 order-1 order-md-0">
                    <div className="image text-center">
                        <img src={aboutimage} alt="about image" className="w-75 "/>
                    </div>
                </div>
                <div className="col-12 col-md-6  d-flex align-items-center">
                    <div className="info text-white">
                        <h2>We Are Feane</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, 
                            you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                            <div className="buttonens">
                                <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Read More</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>  
    );
}

export default About;