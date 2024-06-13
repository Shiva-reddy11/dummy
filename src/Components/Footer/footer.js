import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start space-y-6 md:space-y-0 m-5">
          <div className="flex flex-col items-center md:items-start">
            <p className="h-8 mb-6 text-4xl font-medium font-sans " >Elearning</p>
            <p className="text-center md:text-left w-96">is democratising education, making it accessible to all. Join the revolution, learn on India's largest learning platform.</p>
            
          </div>
          <div className="flex space-x-12">
            <div className="flex flex-col space-y-2">
              <h5 className="font-semibold text-white">Quick links</h5>
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Courses   </a>
              <a href="#" className="hover:text-white">About us  </a>
              <a href="#" className="hover:text-white">Contact us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-semibold text-white">Courses</h5>
              <a href="#" className="hover:text-white">Python</a>
              <a href="#" className="hover:text-white">Java</a>
              <a href="#" className="hover:text-white">React</a>
              <a href="#" className="hover:text-white">Devops</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h5 className="font-semibold text-white">Contact</h5>
              <a href="#" className="hover:text-white text-base"><i className="fab fa-facebook"> facebook</i></a>
              <a href="#" className="hover:text-white text-base"><i className="fab fa-instagram"> Instagram</i></a>
              <a href="#" className="hover:text-white text-base"><i className="fab fa-twitter"> Twitter</i></a>
              <a href="#" className="hover:text-white text-base"><i className="fab fa-youtube"> YouTube</i></a>
            </div>
            
          </div>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
