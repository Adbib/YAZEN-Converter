
import React from 'react';
import './Loader.css'

 const Preloader = (props) => {

  const { show } = props;

  return (
    <div className='loader loader1' style={{display:show ? " " : "none"}}>
  <div>
    <div>
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Preloader