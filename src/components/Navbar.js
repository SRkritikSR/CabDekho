import React from 'react'

const Navbar = () => {
  return (
    <section class="top-area">
			<div class="header-area">
				{/* <!-- Start Navigation --> */}
			    <nav class="nav navbar navbar-default bootsnav  navbar-sticky"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

			        <div class="container d-flex" >

			            {/* <!-- Start Header Navigation --> */}
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i class="fa fa-bars"></i>
			                </button>
			                <a class="navbar-brand" href="index.html">Cab<span style={{color: "#fb9403"}}>Dekho</span></a>

			            </div>

			            <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                    <li class=" scroll active"><a href="/">Home</a></li>
			                    <li class="scroll"><a href="/#history">History</a></li>
			                    <li class="scroll"><a href="/#reviews">Review</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
                <div class="clearfix"></div>
			    {/* <!-- End Navigation --> */}
			</div>


		</section>
  )
}

export default Navbar