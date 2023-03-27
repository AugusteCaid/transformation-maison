import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import avant from '../public/images/avant.png'
import apres from '../public/images/apres.png'
import image1 from '../public/images/renova.png'
import image2 from '../public/images/renovb.png'
import image3 from '../public/images/renovc.png'
import image4 from '../public/images/renovd.png'
import image5 from '../public/images/renove.png'
import image6 from '../public/images/renovf.png'



const Home: NextPage = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <div className="title py-12 text-center bg-blue-200">
          <h1 className=' w-[100%] text-5xl font-bold uppercase'>Travaux de renovation</h1>

        </div>

        <div className="home w-full h-screen flex justify-center items-center ">
          <div className="avant  w-[100%] ">
            <div className="before w-[75%] h-[60%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
              2xl:
              xl:w-1/5">
              <Image className='rounded-2xl ' 
              src={avant}
              alt="une pièce avant la renovation"></Image>
            </div>
            <br />
            <h3 className='w-2/4 text-center text-center bg-blue-500 text-white m-auto rounded-2xl
              xl:w-1/5'>
              Avant
            </h3>                
            <br />
          </div>

          <div className="twobloc">
            <div className=" overflow-hidden m-auto w-[100%*6] w-[45%] h-[40%]  rounded-2xl shadow-[10px_10px_101px_0_rgb(0,0,0)]">

              <div className="slides  flex shadow-[10px_10px_101px_0_rgb(0,0,0)] animate-animate">

                <Image className='w-[100%] slide float-left text-center'
                  src={image1} alt="première diapo de la carrousel"></Image>
                  
                <Image className='w-[100%] slide float-left'
                  src={image2} alt="deuxième diapo de la carrousel"></Image>
                <Image className='w-[100%] slide float-left'
                  src={image3} alt="troisième diapo de la carrousel"></Image>
                <Image className='w-[100%] slide float-left'
                  src={image4} alt="quatrième diapo de la carrousel"></Image>
                <Image className='w-[100%] slide float-left'
                  src={image5} alt="cinquième diapo de la carrousel"></Image>
                <Image className='w-[100%] slide float-left'
                  src={image6} alt="sixième diapo de la carrousel"></Image>
                <Image className='w-[100%] slide float-left'
                  src={image1} alt="retour à la première diapo"></Image>

              </div>
            </div>
            <br /><br />           
              
                <div className="carrousel text-center font-[30px] leading-[45px] ">
                  {/* <div className="pretxt h-[5px] w-1/2 text-blue-500 font-bold shadow-black uppercase ">je vous présente :</div> */}
                  <div className="changetxt text-center h-[45px] overflow-hidden ">
                    <div className="content font-bold font- uppercase animate-carrousel">
                      <div className="element">Peinture chambre 1</div>
                      <div className="element">Préparation de bande de protection</div>
                      <div className="element">Pose de placo salon</div>
                      <div className="element">Pièce de stockage de matériels</div>
                      <div className="element">Ponçage du plafond</div>
                      <div className="element">Chambre 2 en travaux</div>
                      <div className="element">Peinture chambre 1</div>
                    </div>
                  </div>
                </div>
            
          </div>

          <div className="apres w-[100%] ">
            <div className="after w-[75%] h-[60%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
              xl:w-1/5">
              <Image className='rounded-2xl ' 
              src={apres} alt="une pièce avant la renovation"></Image>
            </div>
            <br />
            <h3 className='w-2/4 text-center text-center  bg-blue-500 text-white m-auto rounded-2xl
              xl:w-1/5'>
              Apres
            </h3>                
            <br />
          </div>

        </div> 
        </main>



  
        </div>


    )
  }
  
  export default Home