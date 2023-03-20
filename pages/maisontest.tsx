import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// importer util/mongodb pour  connecter la base de donnée
import { connectToDatabase } from '../util/mongodb'

import avant from '../public/images/avant.png'
import apres from '../public/images/apres.png'
import image1 from '../public/images/renova.png'
import image2 from '../public/images/renovb.png'
import image3 from '../public/images/renovc.png'
import image4 from '../public/images/renovd.png'
import image5 from '../public/images/renove.png'
import image6 from '../public/images/renovf.png'

interface photosProps {
  photos: [
    nom: string,
    alt: string,
    legende: string, 
    width: string,
    height: string
  ]
}


export default function Maisontest({photos})  {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>teste de connection</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <div className="title w-full flex justify-center items-center">
              <h1 className='uppercase font-bold text-6xl 
              2xl:h-
              xl:text-2xl'>galerie photos</h1>
            </div>
            {/* vérifier l'erreur  */}
            <div>
          {/*   function maison ({ photos }) {
                return (  */}
                    <ul>
                        {photos.map((photo) => (
                            <li key={photo._id}>
                              <p className='uppercase font-bold '>  {photo.nom}</p>
                              <p>  {photo.alt}</p>
                              <p>  {photo.legende}</p>
                              <p>  {photo.width}</p>
                              <p>  {photo.height}</p>
                                </li>
                            
                        ))}
                    </ul>
         {/*            )
            }  */}
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
              

              <div className="slider overflow-hidden w-[42.7%] h-[40%] w-[650px*7] rounded-2xl shadow-[10px_10px_101px_0_rgb(0,0,0)]
              3xl:w-[650px*7] 3xl:w-[650px] 3xl:h-[35%] 
              2xl:w-[650px*7] 2xl:w-[92%] 2xl:h-[50%]
              xl:w-[650px*7] xl:w-[63.5%] xl:h-[40%] m-auto
              lg:w-[650px*7] lg:w-[84.7%] "
              >
                <div className="slides flex shadow-[10px_10px_101px_0_rgb(0,0,0)] animate-glisse ">
                  <Image className='w-full slide float-left' 
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
                <div className="description">
                  <p></p>
                </div>
              </div>
              <br />



              <div className="apres">
                <div className="after m-auto w-[70%] h-[60%] shadow-[10px_10px_101px_0_rgb(0,0,0)] rounded-2xl
                  xl:w-1/5">
                  <Image className='rounded-2xl' src={apres} alt="diapo de la pièce terminé de renover"></Image>
                </div>
                <br />
                <h3 className='w-3/4 text-center text-center bg-blue-500 text-white m-auto
                  xl:w-1/5'>Après </h3>
              </div>    

            </div>
        </main>



  
        </div>


    )
    
};

 export async function getStaticProps() {
   const {db} = await connectToDatabase();

   const photos = await db
      .collection("photos")
      .find({}) 
      .toArray();

 return {
   props:{
          photos:JSON.parse(JSON.stringify(photos)),
      },
    }
}
  