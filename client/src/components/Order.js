import React from 'react'
import cart from '../images/cross.png'

const Order = () => {
  return (
    // <div className='container'>
    //   <h3 className='order_heading'>Orders</h3>
    //   <div className='container'>
    //     <img src={cart} style={{"height":"100px"}}></img>
    //     <span>Biryani</span>
    //   </div>
    // </div>
    <div className='container'>
    <h3 className='order-heading'>Orders</h3>
   <section className="vh-100 gradient-custom-2">
  <div className="container ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-10 col-lg-8 col-xl-6">
        <div className="card card-stepper" style={{"borderRadius": "16px"}}>
          <div className="card-header p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">1222528743</span></p>
                <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">12,March 2019</span> </p>
              </div>
              
            </div>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-row mb-4 pb-2">
              <div className="flex-fill">
                <h5 className="bold">Headphones Bose 35 II</h5>
                <p className="text-muted"> Qt: 1 item</p>
                <h4 className="mb-3"> $ 299 <span className="small text-muted"> via (COD) </span></h4>
                <div>
                <h6 className="mb-0"> <a href="#">View Receipt</a> </h6>
              </div>
              </div>
              <div>
                <img className="align-self-center img-fluid"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp" style={{"width":"250px"}} />
              </div>
            </div>
        
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section> 
</div>
  )
}

export default Order