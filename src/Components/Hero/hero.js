import './hero.css'

const Hero = () => {
    return(
      <>
     <section className='hero'>
      <div className="container">
        <div className="roww ">
        <div id='heading'>
        <h1><span className='text-black'>Grow</span> your skills,</h1>
        <h3>Build <span className='text-black'>your</span> future</h3>
    </div>
           <p className='title'>We collaborate to ensure every student achieves academic, social, and emotional success by working together and providing comprehensive support.</p>
           <div className="button">
            <button className="primary-btn " id='btn-green'>GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i></button>
            <button className="primary-btn">View Course<i className="fa fa-long-arrow-alt-right"></i></button>

           </div>
        </div>
      </div>
     </section>
     <div className="marginn"></div>
     </>
    )
}

export default Hero;