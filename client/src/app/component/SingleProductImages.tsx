import React,{useState,useEffect} from 'react'

const SingleProductImages = ({images}: any) => {

    const [selectedImage, setselectedImage] = useState("")
   
    useEffect(() => {
     if(images !==undefined && images.length !==0){
        setselectedImage(images[images.length-1])
     }
    }, [])
    

    if(images !==undefined && images.length !==0 && images[0]){
        return (
            <div>
                <div className='grid grid-cols-12 py-24'>
                    <div className='col-span-3'>
                        <div className=''>
                        {
                           images.map((curElem:any,index:number)=>{
                                return <img src={curElem} key={index} className='h-24 w-24 mx-auto my-6 rounded-lg' onClick={()=>setselectedImage(curElem)}></img>
                            })
                        }
                        </div>
                        
                    </div>
                    <div className='col-span-9 h-full'>
                        <img src={selectedImage} className='h-[785px] w-[520px] mx-auto rounded-lg'></img>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default SingleProductImages