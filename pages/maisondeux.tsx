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

            <div className="title w-full h-[16%] flex justify-center items-center">
              <h1 className='uppercase font-bold'>galerie photos</h1>
            </div>
            
            <div className='home w-screen w-full flex justify-around items-center m-0 p-0
              xl:block'>
              

              <div className="avant">
                <div className="before w-[50%] m-auto shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
                  xl:w-1/5">
                  <Image className='rounded-2xl ' 
                  src={avant} alt="une pièce avant la renovation"></Image>
                </div>
                <br />
                <h3 className='w-[50%] flex text-center bg-blue-500 text-white m-auto'>
                  Avant
                </h3>                
                <br />
              </div>








              <div className="apres xl:">
                <div className="after m-auto w-[50%] shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl ">
                  <Image className='rounded-2xl' src={apres} alt="diapo de la pièce terminé de renover"></Image>
                </div>
                <br />
                <h3 className='w-[50%] flex text-center bg-red-500 text-white m-auto '>Après</h3>
              </div>    

            </div>
        </main>



  
        </div>


    )
  }
  
  export default Home