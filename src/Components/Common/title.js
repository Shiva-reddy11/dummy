

const Title = ({ subtitle, title }) => {
    return (
      <>
        <div id='heading'>
          <p className="h6">{subtitle} </p>
          <p className="h4">{title} </p>
        </div>
      </>
    )
  }
  
  export default Title