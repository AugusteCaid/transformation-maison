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
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className="title w-full flex justify-center items-center">
              <h1 className='uppercase font-bold text-6xl 
              2xl:h-
              xl:text-2xl'>galerie photos</h1>
            </div>
            
            <div className='home w-screen h-screen flex justify-around items-center m-0 p-0
              xl:block'>
              

              <div className="avant">
                <div className="before w-[70%] h-[60%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
                  xl:w-1/5">
                  <Image className='rounded-2xl ' 
                  src={avant} alt="une pièce avant la renovation"></Image>
                </div>
                <br />
                <h3 className='w-3/4 text-center text-center bg-blue-500 text-white m-auto
                  xl:w-1/5'>
                  Avant
                </h3>                
                <br />
              </div>
              
              <div>
                <div className="slider overflow-hidden m-auto w-[650px*7] w-[80%]  h-[40%] w-[650px*7] rounded-2xl shadow-  [10px_10px_101px_0_rgb(0,0,0)]"
                  // 3xl:w-[650px*7] 3xl:w-[650px] 3xl:h-[35%] 
                  // 2xl:w- 2xl:w-[71%] 2xl:h-[50%]
                  // xl:w-[650px*7] xl:w-[40%] m-auto
                  // lg:w-[650px*7] lg:w-[54.7%] "
                >
                  <div className="slides flex shadow-[10px_10px_101px_0_rgb(0,0,0)] animate-animate">

                    <Image className='w-full slide float-left text-center' 
                    src={image1} alt="première diapo de la carrousel"></Image>                  
                    <Image className='w-full slide float-left'
                    src={image2} alt="deuxième diapo de la carrousel"></Image>
                    <Image className='w-full slide float-left' 
                    src={image3} alt="troisième diapo de la carrousel"></Image>
                    <Image className='w-full slide float-left' 
                    src={image4} alt="quatrième diapo de la carrousel"></Image>
                    <Image className='w-full slide float-left' 
                    src={image5} alt="cinquième diapo de la carrousel"></Image>
                    <Image className='w-full slide float-left' 
                    src={image6} alt="sixième diapo de la carrousel"></Image>
                    <Image className='w-full slide float-left' 
                    src={image1} alt="retour à la première diapo"></Image>
                  </div>                
                </div>
                <br />

                <div className="slider overflow-hidden w-[80%]  h-[40%] w-[650px*7] rounded-2xl shadow-[10px_10px_101px_0_rgb(0,0,0)] m-auto"
                  // 3xl:w- 3xl:w-[72%] 3xl:h-[35%] 
                  // 2xl:w-[650px*7] 2xl:w-[60%] 2xl:h-[50%]
                  // xl:w-[650px*7] xl:w-[40.5%] xl:h-[40%] m-auto
                  // lg:w-[650px*7] lg:w-[55%] "
                >
                  <div className="slides w-[600%] text-center flex shadow-[10px_10px_101px_0_rgb(0,0,0)] animate-glisse
                    // 3xl:w-[700%] 
                    // 2xl:w- 2xl:w-[712%] 
                    // xl:w-[650px*7]  xl:w-[696%]
                    ">

                      <p className='w-[100%] slide ml-24 3xl:m-0 2xl:'>travaux 1er pièce
                      </p>
                      <p className='w-[100%] slide float-left 
                      
                      '>travaux 2ème pièce</p>
                      <p className='w-[100%] slide float-left
                      
                      '>travaux 4ème pièce</p>
                      <p className='w-[100%] slide float-left
                      
                      '>Pièce de stockage</p>
                      <p className='w-[100%] slide float-left
                      
                      '>Ponçage plafond</p>
                      <p className='w-[100%] slide float-left
                      
                      '>Préparation peinture</p>
                      <p className='w-[100%] slide float-left
                      
                      '>travaux 1er pièce</p>

                  </div>
                </div>
              </div>

              <div className="apres xl:">
                <div className="after m-auto w-[70%] h-[60%] shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
                  xl:w-1/5">
                  <Image className='rounded-2xl' src={apres} alt="diapo de la pièce terminé de renover"></Image>
                </div>
                <br />
                <h3 className='w-3/4 text-center text-center bg-blue-500 text-white m-auto
                  xl:w-1/5'>Après</h3>
              </div>    

            </div>
        </main>



  
        </div>


    )
  }
  
  export default Home