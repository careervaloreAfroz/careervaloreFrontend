"use client"
import React from 'react'

const api =[
    {
        id:1,
        name:"phot01",
        photourl:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
    },
    {
        id:2,
        name:"phot2",
        photourl:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
    },
    {
        id:3,
        name:"phot3",
        photourl:"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg"
    }
]


function page() {
    function popup(url){
        console.log(url)

    }
  return (
    <div >
            <ul  style={{position:"relative"}}>
                {api.map((e)=>(
                        <li key={e.id} onClick={()=>popup(e.id)}>
                            { e.name}
                        </li>
                    ))}
    
            </ul>
            <div style={{width:"800px",height:"800px",backgroundColor:"black",position:"absolute"}}>

            </div>
        

    </div>
  )
}

export default page