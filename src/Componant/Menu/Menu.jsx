import { useState } from 'react'
import pro1 from '../../assets/f1.png';
import pro2 from '../../assets/f4.png';
import pro3 from '../../assets/f6.png';
import pro4 from '../../assets/f7.png';
function Menu() {
    return ( 
    <>
        <section className="Portfolio overflow-hidden" id="Portfolio">
            <div className="container mt-5 pt-3">
                <div className="titel  d-flex justify-content-center mt-5">
                    <h2 className="display-5 position-relative">Our Menu</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 d-flex justify-content-center">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active fw-bold" id="pills-all-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all"
                                        aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold" id="pills-Brand-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Brand" type="button" role="tab" aria-controls="pills-Brand"
                                        aria-selected="false">Burger</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold" id="pills-Design-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Design" type="button" role="tab" aria-controls="pills-Design"
                                        aria-selected="false">Pizza</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link fw-bold" id="pills-Graphic-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Graphic" type="button" role="tab"
                                        aria-controls="pills-Graphic" aria-selected="false">Pasta
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab"
                        tabIndex="0">
                        <div className="container">
                            <div className="row g-4 my-5">
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro2} alt="perduct image" className="w-50 my-2 p-4"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pasta</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>70$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro3} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro1} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Brand" role="tabpanel" aria-labelledby="pills-Brand-tab"
                        tabIndex="0">
                        <div className="container">
                            <div className="row g-4 my-5">
                            <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro2} alt="perduct image" className="w-50 my-2 p-4"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pasta</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>70$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Design" role="tabpanel" aria-labelledby="pills-Design-tab"
                        tabIndex="0">
                        <div className="container">
                            <div className="row g-4 my-5">
                            <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro2} alt="perduct image" className="w-50 my-2 p-4"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pasta</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>70$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Graphic" role="tabpanel" aria-labelledby="pills-Graphic-tab"
                        tabIndex="0">
                        <div className="container">
                            <div className="row g-4 my-5">
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3  rounded-start-bottom-5 ">
                                        <img src={pro4} alt="perduct image" className="w-50  my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white ">
                                            <h5>Delicious Burger</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>15$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  col-lg-4">
                                    <div className="proudact bg-secondary rounded overflow-hidden">
                                        <div className="image text-center bg-light py-3 rounded-start-bottom-5">
                                        <img src={pro1} alt="perduct image" className="w-50 my-2"/>
                                        </div>
                                        <div className="info  p-4 text-white">
                                            <h5>Delicious Pizza</h5>
                                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                            <div className="cart d-flex justify-content-between">
                                                <h6>20$</h6>
                                                <a href="#"><i className="fa-solid fa-cart-shopping bg-warning p-2 text-white rounded-circle"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </> 
    );
}

export default Menu;