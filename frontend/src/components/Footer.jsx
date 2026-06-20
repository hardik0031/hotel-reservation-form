import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
            <div className="left">Venezia Delights</div>
            <div className='right'>
                <p>Zone-6 S V Road, kandivali (West)</p>
                <p>Open: 10:00 AM - 10:00 PM</p>
                <p>Phone No : 9999999999 </p>
            </div>
        </div>
        <div className="banner">
            <div className="left">
                <p>Developed By Hardik</p>
            </div>
            <div className="right">
            <div className="text-center text-sm text-gray-500 mt-4 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} venezia delights. All rights reserved.
      </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
