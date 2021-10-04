import React from 'react'
import '../Contact/contact.css'
export default function Contact() {
    return (
        <div className="contactWrapper">
            <div className='contactTitle'><h2>Get in Touch</h2></div>
            <div className="contactForm">
                <form action="handler.php">
                    <textarea
                        placeholder='Enter Message'

                    />
                    <div className='contactFormInput'>
                        <input type='name' placeholder='Enter your name' />
                        <input type='email' placeholder='Enter email address' />
                    </div>

                </form>
                <div className='sendFormBtn'>send massage</div>

            </div>
            <div className='contactFormRight'>
                <div className="contactEmail">
                    <div><img src='http://s1.iconbird.com/ico/2013/8/429/w256h2561377938363185038homehousestreamline2.png' alt='1' /></div>
                    <div><p>Buttonwood, California.<br />Rosemead, CA 91770</p></div>
                </div>
                <div className="contactEmail">

                    <div><img src='https://cdn.icon-icons.com/icons2/1674/PNG/512/phonecall_110970.png' alt='2' /></div>
                    <div><p> 00 (440) 9865 562<br />Mon to Fri 9am to 6pm</p></div>
                       
                </div>
                <div className="contactEmail">
                <div><img src='https://image.flaticon.com/icons/png/512/2089/2089181.png' alt='3'/></div>
                    <div><p>support@colorlib.com2<br />Send us your query anytime!</p></div>
                </div>
            </div>
        </div>
    )
}
