import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../../redux/adviceRedux/advice.actions'
import {ADVICE_KEY} from '../../redux/adviceRedux/advice.reducer'


const AdviceApp = () => {

    // initialize dispatch
    let dispatch = useDispatch()

// handle btn
let clickBtn = () =>{
    dispatch(loadData())
}

// view data from store
let viewAdvice = useSelector((state) =>{
return state[ADVICE_KEY]
})

    return (
        <React.Fragment>
           {/* <pre> {JSON.stringify(viewAdvice)}</pre> */}
          <div className='row mt-5'>
              <div className='col-md-3'></div>
              <div className='col-md-6'>
                  <div className='card text-center mt-5'>
                    <div className='card-header'>
                        <h5 className='font-weight-bold'>RANDOM ADVICE APP WITH JSON API</h5>
                    </div>


                    {/* body section or region*/}
                    <div className='card-body'>
                        <div className='adviceContainer centered'>
                            <p>
                                <i className='fa fa-quote-left'></i>
                               {viewAdvice.data.advice}
                                <i className='fa fa-quote-right'></i>
                                </p>
                        </div>
                    </div>

                    {/* button section */}
                    <div className='btnContainer'>
                        <button className='btn btn-sm btn-success' onClick={clickBtn}>Next Advice</button>
                    </div>
                  </div>
              </div>
          </div>
        </React.Fragment>
            
    
    )
}

export default AdviceApp
