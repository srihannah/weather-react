import React from 'react'

const Last = ({error,loading,cityNot}) => {
  return (
    <div>
      {loading && <div className='load-msg'>Loading...</div>}
    { error && <div className='error-msg'>{error}</div>}
    {cityNot &&  <div className='city-not'>City Not Found</div>}
    </div>
  )
}

export default Last
