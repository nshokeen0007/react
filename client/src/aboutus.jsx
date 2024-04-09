
import { MdAddCall } from "react-icons/md";
import { FaFacebook, FaInstagram, FaShareAlt, FaTwitter, FaYoutube } from "react-icons/fa";



function Aboutus() {
    return (
        <>

            <div className="banner">
                <div className="row justify-content-center">
                    <div className="col-11 py-5 my-4">
                        <div className="row justify-content-evenly">
                            <div className="col-4 p-4 rounded-5 border glass">

                                <div class="display-4 fw-bold py-3">Contact Details</div>
                                <div className="d-flex mt-2">  
                                <MdAddCall className="display-3 bg-light rounded-circle p-3" />
                               
                                    <div className="ps-4 pt-1 fw-bold">
                                        Phone Number <br /> <span className="text-light"> +91-890-439-5588</span> 
                                        </div>
                                </div>

<hr className="border-light"/>
<div className="d-flex mt-2">  


                                <FaShareAlt className="display-3 bg-light rounded-circle p-3" />
                               
                                    <div className="ps-4 pt-1 fw-bold">
                                    Follow us <br /> <FaInstagram className="text-light"/>
                                    <FaTwitter className="text-light mx-1"/>
                                    <FaFacebook  className="text-light mx-1"/>
                                    <FaYoutube className="text-light mx-1"/>
                                        </div>
                                </div>
                            

                            </div>
                            <div className="col-7 p-4 rounded-5 border glass ">

                                <div className="row">
                                    <div className="col-6 p-2">
                                        <label htmlFor="" className="fs-3 fw-semibold">Name*</label>
                                        <input type="text" className="cinput" placeholder="enter `your Name" />
                                    </div>
                                    <div className="col-6 p-2">
                                        <label htmlFor="" className="fs-3 fw-semibold">Email*</label>
                                        <input type="text" className="cinput" placeholder="enter `your Email" />
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6 p-2">
                                        <label htmlFor="" className="fs-3 fw-semibold">Mobile No.*</label>
                                        <input type="text" className="cinput" placeholder="enter `your Name" />
                                    </div>
                                    <div className="col-6 p-2">
                                        <label htmlFor="" className="fs-3 fw-semibold">Hospital *</label>
                                        <select type="text" className="cinput border-transparent " placeholder="enter `your Email">
                                            <option value="">delhi</option>
                                            <option value="">gurugram</option>
                                            <option value="">noida</option>
                                            <option value="">mere ghar</option>
                                            <option value="">tere gar</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 p-2">
                                    <label htmlFor="" className="fs-3 fw-semibold">Hospital *</label>
                                    <textarea name="" id="" cols="30" rows="10" placeholder="enter your text here" className="w-100 rounded-3 bg-transparent border-light border-2 text-light"></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>







        </>




    )
}


export default Aboutus