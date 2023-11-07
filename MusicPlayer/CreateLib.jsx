import React from 'react'
import {ArrowRightOutlined, BookOutlined, PlusOutlined} from "@ant-design/icons"

const CreateLib = () => {
  return (
    <div className='CreateLabBox'>
        <h3 style={{display:"flex",columnGap:"30px"}}>
            <div><BookOutlined /></div>
            <div>Your Libarary</div>
            <div><PlusOutlined></PlusOutlined></div>
            <div><ArrowRightOutlined/></div>
        </h3>
        <div className='Createlabcon' style={{color:"white"}}>
            <div><h3>Create Your PlayList</h3></div>
            <div><h5>it's Easy we will help you</h5></div>
            <div><button className='CreateListButton'>Create Playlist</button></div>
        </div>
    </div>
  )
}

export default CreateLib