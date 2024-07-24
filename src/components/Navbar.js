import React from 'react'

const Navbar = () => {
  return (
    <section class="top-area">
			<div class="header-area">
				{/* <!-- Start Navigation --> */}
			    <nav class="navbar navbar-default bootsnav  navbar-sticky"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

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
			                    <li class=" scroll active"><a href="#home">home</a></li>
			                    <li class="scroll"><a href="#works">how it works</a></li>
			                    <li class="scroll"><a href="#explore">explore</a></li>
			                    <li class="scroll"><a href="#reviews">review</a></li>
			                    <li class="scroll"><a href="#blog">blog</a></li>
			                    <li class="scroll"><a href="#contact">contact</a></li>
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