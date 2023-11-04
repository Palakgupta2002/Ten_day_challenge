import React from 'react'
import "../Components/Page7.css"

const Page7 = () => {
  return (
    <div className='Page7'>
       <div style={{color:"white",marginLeft:"170px"}}><span>Questions? Call 000-800-919-1694</span></div>
      <div className='ulList'>
      <div>
        <ul>
          <li> FAQ</li>
          <li>Help Centre</li>
          <li>Speed Test</li>
          <li>Investor Relations</li>
          <li><div  >
              <select className='SelectLang'>
                <option>English</option>
                <option>हिंदी</option>
              </select>
            </div></li>
          <li>Netflix india</li>
        
        </ul>
      </div>
      <div>
        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div>
      <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <div> <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul></div>  
    </div>
    </div>
  )
}

export default Page7;