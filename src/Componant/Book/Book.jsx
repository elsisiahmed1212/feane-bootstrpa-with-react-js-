import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
function Book() {


    function handelform(value) {
        console.log(value);
    }

    let validate = Yup.object({
        name: Yup.string()
            .min(6, 'Name must be at least 6 characters')
            .max(15, 'Name must not exceed 15 characters')
            .required('Name is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must contain only digits')
            .required('Phone number is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        persons: Yup.string()
            .oneOf(['1', '2', '3'], 'Please select a valid number of persons')
            .required('Number of persons is required'),
        date: Yup.date()
            .typeError('Invalid date format')
            .required('Date is required'),
    });
    
    let formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            persons:'',
            date:''
        },
        validationSchema:validate,
        onSubmit:handelform
    })
    return ( 
    <>
        <section className="py-4 my-5">
        <div className="container my-5">
            <div className="titel">
                <h2>Book A Table</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="input my-3">
                        {formik.errors?.name && formik.touched.name ?<div className="alert alert-danger" role="alert">{formik.errors?.name}</div>:''}
                            <input type="text" className="form-control" name="name" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Your Name"/>
                        </div>
                        <div className="input my-3">
                        {formik.errors?.phone && formik.touched.phone ?<div className="alert alert-danger" role="alert">{formik.errors?.phone}</div>:''}
                        <input type="phone" className="form-control" name="phone" value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange}  placeholder="Your Phone"/>
                        </div>
                        <div className="input my-3">
                        {formik.errors?.email && formik.touched.email ?<div className="alert alert-danger" role="alert">{formik.errors?.email}</div>:''}
                            <input type="email" className="form-control" name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  aria-describedby="emailHelp" placeholder="Your Email"/>
                        </div>
                        <div className="input my-3">
                        {formik.errors?.persons && formik.touched.persons ?<div className="alert alert-danger" role="alert">{formik.errors?.persons}</div>:''}
                            <select className="form-select" value={formik.values.persons} name="persons" onBlur={formik.handleBlur} onChange={formik.handleChange}  aria-label="Default select example">
                                <option selected>How many Persons ?</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="input my-3">
                        {formik.errors?.date && formik.touched.date ?<div className="alert alert-danger" role="alert">{formik.errors?.date}</div>:''}
                            <input type="date" className="form-control" value={formik.values.date} name="date" onBlur={formik.handleBlur} onChange={formik.handleChange}  aria-describedby="emailHelp"/>
                        </div>
                        <div className="">
                            <button  type="submit" className="btn bg-warning rounded-full text-white rounded-5 px-4 but"> Book Now</button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68561.0923304025!2d31.308075293642!3d30.058813444762354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e0eaa32b1ad%3A0x542a30c365560378!2zRWwgRGFoYW4gLSDYp9mE2K_Zh9in2YYg2KfZhNij2LXZhCDYqNiq2KfYuSDYstmF2KfZhiAxOTU1NA!5e1!3m2!1sar!2seg!4v1734448893139!5m2!1sar!2seg"
                        style={{ width: "100%", height: "270px", border: "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>

                    </div>
                </div>
            </div>
        </div>
        </section>
    </> 
    );
}

export default Book;