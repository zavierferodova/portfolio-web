import React from 'react'
import './Home.css'
import SkillItem from '../components/skill-item'
import CertificateCard from '../components/certificate-card'
import CertificateData from '../constant/certificate-data'
import MediaQuery from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faMicrochip, faMobile } from '@fortawesome/free-solid-svg-icons'

// Image Import
import topBackground from '../images/top-background.png'
import topBackgroundLanscape from '../images/top-background-lans.png'
import laptopIcon from '../images/Laptop-Icon.png'
import developerImage from '../images/developer-image.jpg'
import creativeThinkImage from '../images/undraw_creative_thinking.png'
import learnedLanguageImage from '../images/Lang-Image.png'
import threeCircle from '../images/Three-Circle.png'
import footerBackground from '../images/footer-background.png'

function Home () {
  return (
    <div>
      {/* Header Content */}
      <div className="h-screen">
        <div className="absolute px-6 mt-5">
          <div className="font-mirza text-white text-4xl lg:text-5xl font-bold">Profile</div>
        </div>
        <div className="absolute h-screen w-full flex justify-center items-center">
          <div style={{ transform: 'translateY(-20%)' }} className="w-11/12 flex items-center">
            <div className="w-full md:w-2/4 text-center md:text-left">
              <div className="font-rubik developer-name text-4xl lg:text-5xl leading-tight font-black">
                <span className="text-white">ZAVIER</span> FERODOVA AL FITROH
              </div>
              <div className="font-ruda text-white font-bold text-lg mt-5">
                Full Stack Web Developer | Android Developer
              </div>
            </div>
            <div className="w-2/4 hidden md:block">
              <img className="w-full h-full object-contain" src={laptopIcon}/>
            </div>
          </div>
        </div>
        <MediaQuery minWidth={1024}>
          <img className="object-fill h-full w-full" src={topBackground}/>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <img className="object-fill h-full w-full" src={topBackgroundLanscape}/>
        </MediaQuery>
      </div>

      {/* Developer Content */}
      <div className="mt-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 h-auto">
          <MediaQuery maxWidth={449}>
            <div style={{ height: '24rem' }} className="developer-image col-span-1 md:col-span-2 rounded-3xl overflow-hidden">
              <img className="object-cover w-full h-full" src={developerImage}/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={450} maxWidth={640}>
            <div style={{ height: '24rem' }} className="developer-image col-span-1 md:col-span-2 rounded-3xl overflow-hidden mx-16">
              <img className="object-cover w-full h-full" src={developerImage}/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={641} maxWidth={767}>
            <div style={{ height: '28rem' }} className="developer-image col-span-1 md:col-span-2 rounded-3xl overflow-hidden mx-28">
              <img className="object-cover w-full h-full" src={developerImage}/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1023} >
            <div style={{ height: '25rem' }} className="developer-image col-span-1 md:col-span-2 rounded-3xl overflow-hidden">
              <img className="object-cover w-full h-full" src={developerImage}/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <div style={{ height: '30rem' }} className="developer-image col-span-1 md:col-span-2 rounded-3xl overflow-hidden">
              <img className="object-cover w-full h-full" src={developerImage}/>
            </div>
          </MediaQuery>
          <div className="col-span-1 sm:col-span-3 md:ml-14 lg:ml-24 mt-12 flex flex-col justify-center h-full transform -translate-y-6">
            <div className="font-ramabhadra text-big-color text-3xl sm:text-4xl">Hello !</div>
            <p className="font-ramabhadra text-normal-color mt-5 text-lg sm:text-xl">
              I am Zavier, 18 y.o student and developer. I have skills to develop website and android app. I so interested with technology especially about Artficial Intelligence. And for now I started to learn about Machine Learning with Python.
            </p>
          </div>
        </div>
      </div>

      {/* Skill Content */}
      <div className="mt-52">
        <div className="font-ramabhadra text-big-color text-center text-4xl sm:text-4xl mb-10 sm:mb-14">My Skill</div>
        <div className="grid md:grid-cols-2 mx-6 lg:mx-12">
          <div className="col-span-1 p-4">
            <img className="object-cover" src={creativeThinkImage}/>
          </div>
          <div className="col-span-1 flex flex-col justify-center mt-6 md:mt-0 md:ml-2 items-center">
            <SkillItem
              name={'Web Development'}
              percentage={90}
              icon={faGlobe} />
            <SkillItem
              name={'Android Development'}
              percentage={75}
              icon={faAndroid} />
            <SkillItem
              name={'Machine Learning'}
              percentage={25}
              icon={faMicrochip} />
            <SkillItem
              name={'UI Design'}
              percentage={65}
              icon={faMobile} />
          </div>
        </div>
      </div>

      {/* Learned Language Content */}
      <div className="mt-32 sm:mt-52 flex">
        <div className="card-learned-language w-full lg:w-2/3 p-5 py-8 sm:p-12 pl-20 sm:pl-32 rounded-3xl transform -translate-x-14 sm:-translate-x-24">
          <div className="font-ramabhadra text-white text-2xl sm:text-3xl mb-8">Learned Language</div>
          <div className="flex justify-center p-3 md:p-10">
            <img className="object-cover w-full h-full" src={learnedLanguageImage}/>
          </div>
        </div>
        <div className="w-1/3 hidden sm:flex items-center">
          <img className="ml-2 md:ml-5 relative transform -translate-x-12 xl:translate-x-0" src={threeCircle}/>
        </div>
      </div>

      {/* Certificates Content */}
      <div className="mt-32 sm:mt-52">
        <div className="font-ramabhadra text-big-color px-4 md:px-8 mb-12 text-4xl sm:text-5xl">Certificates</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-10">
          {
            CertificateData.map((certificate, index) =>
              <CertificateCard key={index} className="col-span-1"
                name={certificate.name}
                level={certificate.level}
                provider={certificate.provider}
                icon={certificate.icon}
                link={certificate.link} />
            )
          }
        </div>
      </div>

      <div className="h-screen mt-52 pt-14 px-20"
        style={{
          background: `url('${footerBackground}')`
        }}>
          <div className="font-mirza text-right text-white text-6xl font-bold mt-28">Profile</div>
          <div className="text-right mt-16">
            <div className="inline-block mr-14">

              <div className="flex text-white items-center mb-4 hover:text-blue-600 cursor-pointer">
                <div className="text-6xl">
                  <FontAwesomeIcon icon={faInstagram}/>
                </div>
                <div className="font-ramabhadra text-3xl ml-6">@zavierferodova</div>
              </div>

              <div className="flex text-white items-center mb-4 hover:text-blue-600 cursor-pointer">
                <div className="text-6xl">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </div>
                <div className="font-ramabhadra text-3xl ml-6">Zavier Ferodova Al Fitroh</div>
              </div>

              <div className="flex text-white items-center mb-4 hover:text-blue-600 cursor-pointer">
                <div className="text-6xl">
                  <FontAwesomeIcon icon={faGithub}/>
                </div>
                <div className="font-ramabhadra text-3xl ml-6">zavierferodova</div>
              </div>

            </div>
            <div className="bg-white h-1 mt-20"></div>
            <div className="font-ramabhadra text-center text-white mt-2">&copy; 2021</div>
          </div>
      </div>
    </div>
  )
}

export default Home
