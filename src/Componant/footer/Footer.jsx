function Footer() {
    return ( 
        <>
        <footer className="py-5 bg-black">
        <div className="container text-white text-center my-4">
            <div className="row gap-5 gap-md-0">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="info text-white text-center">
                        <h4>Contact Us</h4>
                        <div className="contanct d-flex flex-column gap-2"> 
                        <a href="#" className="text-white text-decoration-none"><i className="fa-solid fa-location-dot me-2"></i><span>location</span></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-solid fa-phone me-2"></i><span>Call +01 1234567890</span></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-solid fa-envelope me-2"></i><span>ahmedabdodev@gmail.com</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <div className="info text-white text-center">
                        <h4>Feane</h4>
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                        <div className="contanct justify-content-center d-flex gap-3"> 
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-solid fa-envelope me-2"></i>
                        </div>
                </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <div className="info text-white text-center">
                        <h4>Opening Hours</h4>
                        <p>Everyday</p>
                        <p>10.00 Am -10.00 Pm</p>
                </div>
                </div>
            </div>
            <div className="Rights mt-5">
                <p>© 2024 All Rights Reserved By Free Html Templates</p>
            </div>
        </div>
    </footer>
        </>
     );
}

export default Footer;