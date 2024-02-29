import Doct from './images/doctor.png'
import Hos from './images/hospital.png'
import Lab from './images/lab.png'
import Heart from './images/heart.png'
import Neuro from './images/s3.jpg'
import Neuro1 from './images/s1.jpg'
import Neuro2 from './images/s2.jpg'
import Neuro3 from './images/s4.jpg'
import Doc1 from './images/dr1.jpeg'
import Doc2 from './images/dr2.jpg'



function Home(){
    return(
<>
< div className='header'>
<div className="container h-100">
      <div className="row m-0 w-100">
        <div className="col-12   align-items-center justify-content-center ms-0 ms-sm-0 mt-5">
          <h1 className="text-capitalize "> Welcome to the <br/><span className="text-danger custom-text-shadow">ORBIT</span> HealthCare Facuilty </h1>

          <p>Orbit HealthCare Facuilty is best in the town </p>
          <p>We have bestest Doctors in your hospital </p>
          


        
       
     
     <a href='/Signup'> <button class="btn btn-info btn-lg " type="submit"  >RegisterYourself</button></a>
    
           
        
        </div>
       
      </div>



      {/* <div className=" container mt-5">
        <div className="row">
    
            <div className="col-3 bg-info ">
make an appointment 

            </div>
            <div className="col-6 ">
            <form className="row">
              <div className='col-4 '>
        <input type="text"  id="name" placeholder="Name*" className='m-2 'required /><br/>
        <input type="email"  id="name" placeholder="email*" className='m-2'required />
        </div>
              <div className='col-4 '>
              <input type="text"  id="name" placeholder="Name*"className='m-2' required /><br/>
        <input type="email"  id="name" placeholder="email*" className='m-2'required />
              </div>
              <div className='col-4 '>
              <input type="text"  id="name" placeholder="Name*" className='m-2'required /><br/>
        <input type="email"  id="name" placeholder="email*" className='m-2'required />
              </div>
         

    </form>



            </div>
            <div className='col-3'>
        <button type="submit" className='btn btn-info w-100 h-100'>submit</button>

            </div>
            
            </div>
         
        </div> */}
      </div>
     
    </div>


    {/* this is we are one section */}
    <div className="container py-5 text-center">
<h1 className='text-info' >Who We Are</h1>
<p>We are members and partner organisations jave insured more than 167,000 perviously uninsured childrens through locally funded &<br/>
administered Healthy Kids programs</p>

<div className="row g-4  text-center">
<div className="col-3 align-items-center  p-4">
     <img src={Heart} alt='Doctor ' className='w-25 '/>
     
        <h5 className="text-info">Health Care</h5>
        <p class=" mb-1">
       Be Healthy Be Happy
        </p>
  </div>
  <div className="col-3 align-items-center  p-4">
     <img src={Lab} alt='Doctor ' className='w-25 '/>
     
        <h5 className="text-info">Reasearch Lab</h5>
        <p class=" mb-1">
        Orbit Reasearch Lab
        </p>
  </div>
  <div className="col-3 align-items-center  p-4">
     <img src={Hos} alt='Doctor ' className='w-25 '/>
     
        <h5 className="text-info">Great Cabinets</h5>
        <p class=" mb-1">
         Total 500 Cabinets
        </p>
  </div>
  <div className="col-3 align-items-center  p-4">
     <img src={Doct} alt='Doctor ' className='w-25 '/>
     
        <h5 className="text-info">Doctors 24x7</h5>
        <p class=" mb-1">
         Availablity 365 days
        </p>
  </div>
 
      
    </div>
  </div>


  {/* our services */}

  <div className="container mt-3">
        <div className="row">
          <div className="col-md-6   d-flex">
            <div className="col-md-6">
            <a href='/Neuro' >   <img src={Neuro} alt="Doctor" className="w-100 imgcard" />
            </a>           </div>
            <div className="col-md-6 information">
              <h1>Neurologist</h1> 
              <p>Neurologists are medical professionals who specialize in conditions that affect the nervous system.</p>
            </div>
          </div>
          <div className="col-md-6  d-flex">
            <div className="col-md-6">
            <a href='/cardiology' > <img src={Neuro2} alt="Doctor" className="w-100 imgcard" /></a> 
            </div>
           <div className="col-md-6 information">
              <h1>Cardiology</h1> {/* Corrected heading */}
              <p>
                 Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. </p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 d-flex">
            <div className="col-md-6">
            <a href='/Ortho' >      <img src={Neuro3} alt="Doctor" className="w-100 imgcard" />
           </a> </div>
            <div className="col-md-6 information">
              <h1>Orthopedic </h1> {/* Corrected heading */}
              <p>Orthopedic surgery or orthopedics is the branch of surgery concerned
                 with conditions involving the musculoskeletal system.</p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="col-md-6">
              <img src={Neuro1} alt="Doctor" className="w-100 imgcard" />
            </div>
            <div className="col-md-6 information">
              <h1>Neurologist</h1> {/* Corrected heading */}
              <p>niasdkfagsdnk</p>
            </div>
          </div>
        </div>
      </div>
  
        

 {/* doctors */}

 <div className="container py-5 text-center">
  <h1>Meet With Our Doctors</h1>
  <p>
    At ORBIT Health Cares, we have the best team of experts, including great Greek Doctors and the little things we can't.
  </p>

  <div className="row">
    <div className="card col m-1">
      <img className="card-img-top" src={Doc1} alt="Cardimagecap" />
      <div className="card-title"><h1>Dr.xyz</h1>
      <div className="card-body">
        <p className="card-text">
          He is best doctor for Cardiology. Dr.xyz is top class doctor in whole asia
        </p>
      </div>
      </div>
    </div>
    <div className="card col m-1">
      <img className="card-img-top" src={Doc2} alt="Cardimagecap" />
      <div className="card-title"><h1>Dr.Anamika</h1>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      </div>
    </div>
    <div className="card col m-1">
      <img className="card-img-top" src={Doc2} alt="Cardimagecap" />
      <div className="card-title"><h1>Dr.Anamika</h1>

      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      </div>
    </div>
    <div className="card col m-1">
      <img className="card-img-top" src={Doc1} alt="Cardimagecap" />
      <div className="card-title"><h1>Dr.Bhavesh</h1>

      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      </div>
    </div>
  </div>
</div>




{/* pape */}

<div className='container-fluid bg-info p-5'>
  <div className='container bg-light'>
   
<ul  className="nav nav-tabs  bg-warning  p-3">
<li className="nav-item me-5">
  <a href="#a" className="nav-link bg-danger text-light radius" data-bs-toggle="tab">Surgery</a>
</li>
<li className="nav-item me-5">
  <a href="#b" className="nav-link" data-bs-toggle="tab">b</a>
</li>
<li className="nav-item me-5 ms-5">
  <a href="#c" className="nav-link" data-bs-toggle="tab">c</a>
</li>
<li className="nav-item">
  <a href="#d" className="nav-link" data-bs-toggle="tab">d</a>
</li>

</ul>


<div className="tab-content p-3">
<div className="tab-pane " id="a">
<h1 >SURGERY</h1>
<p>
Surgery is a medical specialty that uses manual and/or instrumental techniques to physically reach into a subject's body in order to investigate or treat pathological conditions such as a disease or injury, to alter bodily functions (e.g. bariatric surgery such as gastric bypass), to improve appearance (cosmetic surgery), or to remove/replace unwanted tissues (body fat, glands, scars or skin tags) or foreign bodies. The subject receiving the surgery is typically a person 
(i.e. a patient), but can also be a non-human animal (i.e. veterinary surgery).
<div className='row mt-3'>
<ul className='pane col-3 text-center' ><li>nikki</li><li>nikki</li><li>nikki</li></ul>
<ul className='pane col-3 text-center' ><li>nikki</li><li>nikki</li><li>nikki</li></ul>
<ul className='pane col-3 text-center' ><li>nikki</li><li>nikki</li><li>nikki</li></ul>

</div>
</p>
</div>
<div className="tab-pane  " id="b">
kakakk</div>
<div className="tab-pane " id="c">
iwirriw
</div>
<div className="tab-pane " id="d">
iiwriiwi
</div>

</div>
</div>

</div>


















</>




    )
}


export default Home