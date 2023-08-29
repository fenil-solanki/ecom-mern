import React from 'react'
import {BiLogoFacebook, BiLogoTwitter,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className=''>
    <div className='p-8 bg-[#3C4242]' style={{color:"white"}}>
        
            <div className='px-24 py-8 container mx-auto'>
                <div className='grid grid-cols-5'>
                    <div>
                        <h3 className='font-bold text-3xl'>Need Help</h3>
                        <ul>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Contact Us</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ&aposs</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>Company</h3>
                        <ul>
                            
                        <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Contact Us</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ&aposs</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                        </ul>

                    </div>
                    <div>
                        <h3 className='font-bold text-3xl'>More Info</h3>
                        <ul>
                        <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Track Order</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Returns & Refunds</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>FAQ&aposs</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Career</li>
                            </ul>
                    </div>
                    <div className='col-span-2'>
                    <h3 className='font-bold text-3xl'>Location</h3>
                        <ul>
                        <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>support@euphoria.in</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>Eklingpura Chouraha, Ahmedabad Main Road</li>
                            <li className="font-medium text-lg" style={{color:"#F6F6F6"}}>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
                            </ul>
                    </div>
                </div>

                    <div className='grid grid-cols-2'>
                        <div>
                            <button><BiLogoFacebook></BiLogoFacebook></button>
                            <button><BiLogoInstagram></BiLogoInstagram></button>
                            <button><BiLogoTwitter></BiLogoTwitter></button>
                            <button><BiLogoLinkedin></BiLogoLinkedin></button>
                        </div>
                        <div>
                                <h3>Download The App</h3>
                                <div className='grid grid-cols-2'>

                                </div>
                        </div>
                    </div>
            </div>

            <h3 className='font-bold text-lg text-center'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h3>
    </div>
</footer>
  )
}

export default Footer
