import React from 'react'

const Footer = () => {
  return (
    <footer id="footer"  class="footer">
    <div class="container">
        <div class="footer-menu">
               <div class="row">
                   <div class="col-sm-3">
                        <div class="navbar-header">
                        <a class="navbar-brand" href="index.html">list<span>race</span></a>
                    </div>
                   </div>
                   <div class="col-sm-9">
                       <ul class="footer-menu-item">
                        <li class="scroll"><a href="/">Home</a></li>
                        <li class="scroll"><a href="/#history">History </a></li>
                        <li class="scroll"><a href="/#reviews">Reviews</a></li>
                    </ul>
                   </div>
           </div>
        </div>
        <div class="hm-footer-copyright">
            <div class="row">
                <div class="col-sm-5">
                    <p>

                    </p>
                </div>
                <div class="col-sm-7">
                    <div class="footer-social">
                        <span><i class="fa fa-phone"> +1  (222) 777 8888</i></span>
                        <a href="#"><i class="fa fa-facebook"></i></a>	
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    {/* <div id="scroll-Top">
        <div class="return-to-top">
            <i class="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
        </div>
        
    </div> */}
    
</footer>
  )
}

export default Footer