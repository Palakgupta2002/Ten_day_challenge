import React, { useState } from 'react'
import "../Components/Page6.css"
import {PlusOutlined}  from "@ant-design/icons"
import { CloseOutlined  } from '@ant-design/icons';
import {RightOutlined} from "@ant-design/icons"


const Page6 = () => {
  const [faqIcons, setFaqIcons] = useState(Array(6).fill(false));
  const toggleIcon=(index)=>{
    const updatedIcons = [...faqIcons];
    updatedIcons[index] = !faqIcons[index];
    setFaqIcons(updatedIcons);

  }
  const faqData = [
    { question: 'What is Netflix?',
  Answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!" },
    { question: 'How much does Netflix cost?',
    Answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts." },
    { question: 'Where can I watch?',
    Answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
    { question: 'How do I cancel?',
    Answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
    { question: 'What can I watch on Netflix?',
    Answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
    { question: 'Is Netflix good for kids?',
    Answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
    
  ];
 
  return (
    <div className='Page6Gridient'>
      <div>
        <div>
          <h1 style={{fontSize:"50px"}}>Frequently Asked Questions</h1>
        </div>

        {faqData.map((faq, index) => (
          <>
          <div className='InfoBox'  key={index}>
            <div  >
              <h2>{faq.question}</h2>
            </div>
            <div>
              <button className='buttondesign' onClick={() => toggleIcon(index)}>
                {faqIcons[index] ? (
                  <CloseOutlined  style={{ color: 'white', fontSize: '40px' }} />
                ) : (
                  <PlusOutlined style={{ color: 'white', fontSize: '40px' }} />
                )}
              </button>
            </div>

          </div>
          {faqIcons[index] ?
          <div  className='InfoAnswer'>
                
              <h2 >{faq.Answer}</h2>
              
                
              </div>
              :""
}
          </>
        ))}
      </div>
      <div>
        <button style={{marginTop:"40px",fontSize:"30px",padding:"8px"}} className='Button'>Finish Sign Up<RightOutlined/></button>
      </div>
    </div>
  );
};

export default Page6