import React from "react";

const Hello1 = ()=>{
    return(
        <div className = 'col-2' id = 'class'>
            <h1>Hello Tharu Pathi</h1>  
        </div>
        //jsx format
        
    )

    //apita react wldi classname kiyna eka explisively use krnna ba mokda component wla clss kiyna key word eka use wena hinda
    //div class ='colll-2' => div className='col-2'

    // return React.createElement(
    //     'div',
    //     {id:'hello', className:'col-md'},
    //     React.createElement('h1',null,'Tharusa')
    //normal js version
    //);

        // cannot use class name in null section in react directly

}

export default Hello1;