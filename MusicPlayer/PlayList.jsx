import React, { useState } from 'react'
import "./PlayList.css"
import PlayListNav from './PlayListNav'
import MusicJson from "./Music.json"
import Gana from "../MusicPlayer/Assest/Audio.mp3"
import Bolna from "./Assest/Bolna.jpg"
import Aditi from "./Assest/AgarTumSath.jpg"
import Bekhayali from "./Assest/Bekhayali.jpg"
import Bekhayali1 from "./Assest/Bekhayali1.jpg"
import Chaiya from "./Assest/Chaiya.jpg"
import Duniya from "./Assest/Duniya.jpg"
import Galliyaan from "./Assest/Galliyaan.jpg"
import Gerua from "./Assest/Gerua.jpg"
import HasiBan from "./Assest/HasiBan.jpg"
import janam from "./Assest/Janam.jpg"
import JeeneLaga from "./Assest/JeeneLaga.jpg"
import Kabira from "./Assest/Kabira.jpg"
import Lambiyaan from "./Assest/Lambiyaan.jpg"
import Muskurane from "./Assest/Muskurane.jpg"
import Pal from "./Assest/Pal.jpg"
import Rabta from "./Assest/Rabta.jpg"
import Rabta1 from "./Assest/Rabta1.jpg"
import SunSathiya from "./Assest/SunSathiya.jpg"
import TeraGhata from "./Assest/TeraGhata.jpg"
import TeraBan from "./Assest/TeraBan.jpg"
import TeraHoneLaga from "./Assest/TeraHoneLaga.jpg"
import TeraMeraRishta from "./Assest/TeraMeraRishta.jpg"
import TeraZikr from "./Assest/TeraZikr.jpg"
import TujheKitana from "./Assest/TujheKitana.jpg"
import TumHiHo from "./Assest/TumHiHo.jpg"
import TumHiHoBan from "./Assest/TumHiHoBan.jpg"
import TumJoMile from "./Assest/TumJoMile.jpg"
import TumMile from "./Assest/TumMile.jpg"
import TumMileDil from "./Assest/TumMileDil.jpg"
import TumSeHi from "./Assest/TumSeHi.jpg"
import Vaste from "./Assest/Vaste.jpg"
import Zehanaseeb from "./Assest/Zehanaseeb.jpg"
import { HeartOutlined } from '@ant-design/icons'





const PlayList = () => {
  const [likeArray,SetlikeArray]=useState([]);
  const [HeartLiked,setHeartliked]=useState(<HeartOutlined style={{color:"red",fontSize:"20px"}}/>)
  const handleLikeArray=(index)=>{
    
  }
  const music = [
    {
      "song_name": "Tum Hi Ho",
      "artist_name": "Arijit Singh",
      "movie_name": "Aashiqui 2",
      "song_link": Gana,
      "image_link": TumHiHo
    },
    {
      "song_name": "Chaiyya Chaiyya",
      "artist_name": "Sukhwinder Singh",
      "movie_name": "Dil Se",
      "song_link": Gana,
      "image_link": Chaiya
    },
    {
      "song_name": "Tera Ban Jaunga",
      "artist_name": "Akhil Sachdeva, Tulsi Kumar",
      "movie_name": "Kabir Singh",
      "song_link": Gana,
      "image_link": Kabira
    },
    {
      "song_name": "Jeene Laga Hoon",
      "artist_name": "Atif Aslam",
      "movie_name": "Ramaiya Vastavaiya",
      "song_link": Gana,
      "image_link": JeeneLaga
    },
    {
      "song_name": "Muskurane Ki Wajah Tum Ho",
      "artist_name": "Arijit Singh",
      "movie_name": "Citylights",
      "song_link": Gana,
      "image_link": Muskurane
    },
    {
      "song_name": "Tum Mile",
      "artist_name": "Neeraj Shridhar",
      "movie_name": "Tum Mile",
      "song_link": Gana,
      "image_link": TumMile
    },
    {
      "song_name": "Raabta",
      "artist_name": "Arijit Singh, Nikhita Gandhi",
      "movie_name": "Agent Vinod",
      "song_link": Gana,
      "image_link": Rabta
    },
    {
      "song_name": "Gerua",
      "artist_name": "Arijit Singh, Antara Mitra",
      "movie_name": "Dilwale",
      "song_link": Gana,
      "image_link": Gerua
    },
    {
      "song_name": "Tum Jo Aaye",
      "artist_name": "Rahat Fateh Ali Khan, Tulsi Kumar",
      "movie_name": "Once Upon a Time in Mumbaai",
      "song_link": Gana,
      "image_link": TumJoMile
    },
    {
      "song_name": "Agar Tum Saath Ho",
      "artist_name": "Arijit Singh, Alka Yagnik",
      "movie_name": "Tamasha",
      "song_link": Gana,
      "image_link": Aditi
    },
    {
      "song_name": "Tum Se Hi",
      "artist_name": "Mohit Chauhan",
      "movie_name": "Jab We Met",
      "song_link": Gana,
      "image_link": TumSeHi
    },
    {
      "song_name": "Janam Janam",
      "artist_name": "Arijit Singh, Antara Mitra",
      "movie_name": "Dilwale",
      "song_link": Gana,
      "image_link": janam
    },
    {
      "song_name": "Sun Saathiya",
      "artist_name": "Priya Saraiya, Divya Kumar",
      "movie_name": "ABCD 2",
      "song_link": Gana,
      "image_link": SunSathiya
    },
    {
      "song_name": "Tum Mile Dil Khile",
      "artist_name": "Kumar Sanu, Alka Yagnik",
      "movie_name": "Criminal",
      "song_link": Gana,
      "image_link": TumMileDil
    },
    {
      "song_name": "Tum Jo Mil Gaye Ho",
      "artist_name": "Mohammed Rafi",
      "movie_name": "Hanste Zakhm",
      "song_link": Gana,
      "image_link": TumJoMile
    },
    {
      "song_name": "Hasi Ban Gaye",
      "artist_name": "Ami Mishra",
      "movie_name": "Hamari Adhuri Kahani",
      "song_link": Gana,
      "image_link": HasiBan
    },
    {
      "song_name": "Tera Mera Rishta",
      "artist_name": "Mustafa Zahid",
      "movie_name": "Awarapan",
      "song_link": Gana,
      "image_link": TeraMeraRishta
    },
    {
      "song_name": "Tera Hone Laga Hoon",
      "artist_name": "Atif Aslam, Alisha Chinai",
      "movie_name": "Ajab Prem Ki Ghazab Kahani",
      "song_link": Gana,
      "image_link": TeraHoneLaga
    },
    {
      "song_name": "Kabira",
      "artist_name": "Tochi Raina, Rekha Bhardwaj",
      "movie_name": "Yeh Jawaani Hai Deewani",
      "song_link": Gana,
      "image_link": Kabira
    },
    {
      "song_name": "Tum Hi Ho Bandhu",
      "artist_name": "Neeraj Shridhar, Kavita Seth",
      "movie_name": "Cocktail",
      "song_link": Gana,
      "image_link": TumHiHoBan
    },
    {
      "song_name": "Tum Hi Ho Bandhu (Remix)",
      "artist_name": "Neeraj Shridhar, Kavita Seth",
      "movie_name": "Cocktail",
      "song_link": Gana,
      "image_link": Kabira
    },
    {
      "song_name": "Bolna",
      "artist_name": "Arijit Singh, Asees Kaur",
      "movie_name": "Kapoor & Sons",
      "song_link": Gana,
      "image_link": Bolna
    },
    {
      "song_name": "Kabhi Kabhi Aditi",
      "artist_name": "Benny Dayal",
      "movie_name": "Jaane Tu Ya Jaane Na",
      "song_link": Gana,
      "image_link": Aditi
    },
    {
      "song_name": "Zehnaseeb",
      "artist_name": "Shekhar Ravjiani, Chinmayi Sripada",
      "movie_name": "Hasee Toh Phasee",
      "song_link": Gana,
      "image_link": Zehanaseeb
    },
    {
      "song_name": "Raabta (Female)",
      "artist_name": "Arijit Singh, Shreya Ghoshal",
      "movie_name": "Agent Vinod",
      "song_link": Gana,
      "image_link": Rabta1
    },
    {
      "song_name": "Galliyan",
      "artist_name": "Ankit Tiwari",
      "movie_name": "Ek Villain",
      "song_link": Gana,
      "image_link": Galliyaan
    },
    {
      "song_name": "Tum Mile (Love Reprise)",
      "artist_name": "Javed Ali",
      "movie_name": "Tum Mile",
      "song_link": Gana,
      "image_link": TumMile
    },
    {
      "song_name": "Bol Do Na Zara",
      "artist_name": "Armaan Malik",
      "movie_name": "Azhar",
      "song_link": Gana,
      "image_link": Bolna
    },
    {
      "song_name": "Tera Ghata",
      "artist_name": "Gajendra Verma",
      "movie_name": "Single",
      "song_link": Gana,
      "image_link": TeraGhata
    },
    {
      "song_name": "Lambiyaan Si Judaiyaan",
      "artist_name": "Arijit Singh",
      "movie_name": "Raabta",
      "song_link": Gana,
      "image_link": Lambiyaan
    },
    {
      "song_name": "Tera Zikr",
      "artist_name": "Darshan Raval",
      "movie_name": "Single",
      "song_link": Gana,
      "image_link": TeraZikr
    },
    {
      "song_name": "Bekhayali",
      "artist_name": "Arijit Singh",
      "movie_name": "Kabir Singh",
      "song_link": Gana,
      "image_link": Bekhayali
    },
    {
      "song_name": "Pal",
      "artist_name": "Arijit Singh, Shreya Ghoshal",
      "movie_name": "Jalebi",
      "song_link": Gana,
      "image_link": Pal
    },
    {
      "song_name": "Duniyaa",
      "artist_name": "Akhil, Dhvani Bhanushali",
      "movie_name": "Luka Chuppi",
      "song_link": Gana,
      "image_link": Duniya
    },
    {
      "song_name": "Vaaste",
      "artist_name": "Dhvani Bhanushali, Nikhil D'Souza",
      "movie_name": "Single",
      "song_link": Gana,
      "image_link": Vaste
    },
    {
      "song_name": "Tujhe Kitna Chahne Lage",
      "artist_name": "Arijit Singh",
      "movie_name": "Kabir Singh",
      "song_link": Gana,
      "image_link": TujheKitana
    },
    {
      "song_name": "Bekhayali (Arijit Singh Version)",
      "artist_name": "Arijit Singh",
      "movie_name": "Kabir Singh",
      "song_link": Gana,
      "image_link": Bekhayali
    }
  ]


  const [data, setData] = useState(MusicJson); // Initialize the state with the imported data
  console.log(data.songs.song_name)
  return (
    <div style={{ marginTop: "25px" }}>
      <div ><PlayListNav /></div>
      <div className='MusicPage'>
        {Array.isArray(music) && music.map((ele, index) => (
          <div className='MusicCard' key={index}>
            <img  width={"200px"} height={"180px"} src={ele.image_link} alt='Something goes wrong' />
            <audio style={{width:"200px",height:"100px"}} src={ele.song_link} controls/>
            <h4 style={{ color: "white" }}>Song Name:{ele.song_name}</h4>
            <h4 style={{ color: "white" }}>Movie:-{ele.movie_name}</h4>
            <div style={{display:'flex',marginTop:'-20px',justifyContent:"space-around",marginLeft:"-25px"}}>
            <h4>Artist:-{ele.artist_name}</h4>
            <button onClick={()=>handleLikeArray(index)} style={{background:"none",border:"none"}}>{HeartLiked }</button>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default PlayList