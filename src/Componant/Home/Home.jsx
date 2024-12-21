import React from "react";
import hederimage from '../../assets/hero-bg.jpg';
import imagebox1 from '../../assets/o1.jpg';
import imagebox2 from '../../assets/o2.jpg';

import './home.css'
import Menu from "../Menu/Menu";
import About from "../About/About";
import Book from "../Book/Book";
function Home() {
    return ( 
    <>
    <section style={{height:'100vh', backgroundImage: `url(${hederimage})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div id="carouselExampleIndicators" data-bs-ride="carousel" data-bs-interval="4000" className="container carousel slide d-flex align-items-center h-100 ">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner text-white ">
            <div className="carousel-item active ">
                <div className="info">
                    <h1>Fast Food Restaurant</h1>
                    <p className="w-50 my-4">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. 
                        Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                    <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Order Online</button>
                </div>
            </div>
            <div className="carousel-item">
            <div className="info">
                    <h1>Fast Food Restaurant</h1>
                    <p className="w-50 my-4">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. 
                        Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                    <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Order Online</button>
                </div>
            </div>
            <div className="carousel-item">
            <div className="info">
                    <h1>Fast Food Restaurant</h1>
                    <p className="w-50 my-4">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. 
                        Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                    <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Order Online</button>
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className="py-4">
        <div className="offer_section my-5">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-6 col-lg-6 my-4 my-md-0">
                        <div className="box bg-secondary d-flex align-items-center rounded-3 gap-3 p-3">
                            <div className="image w-25 border border-warning rounded-circle border-3 overflow-hidden">
                                <img src={imagebox1} alt="imagebox1" className="w-100 rounded-circle"/>
                            </div>
                            <div className="info text-white">
                                <h5>Tasty Thursdays</h5>
                                <h6 className="my-2"><span className="fs-1 me-1">20%</span>Off</h6>
                                <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Order Online <i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                    <div className="box bg-secondary d-flex align-items-center rounded-3 gap-3 p-3">
                            <div className="image w-25 border border-warning rounded-circle border-3  overflow-hidden">
                                <img src={imagebox2} alt="imagebox1" className="w-100 rounded-circle"/>
                            </div>
                            <div className="info text-white">
                                <h5>Tasty Thursdays</h5>
                                <h6 className="my-2"><span className="fs-1 me-1">20%</span>Off</h6>
                                <button className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Order Online <i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Menu></Menu>
    <About></About>
    <Book></Book>


    </> 
    );
}

export default Home;