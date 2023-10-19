import React from 'react'

const HeroSection = () => {
  return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center '>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello I'Am Ade Taruna</h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                        Lorem Ipsum hanyalah teks tiruan dari industri percetakan dan penyusunan huruf.
                        Lorem Ipsum telah menjadi teks tiruan standar industri sejak tahun 1500-an,
                        ketika seorang pencetak yang tidak dikenal mengambil kumpulan teks
                        dan mengacaknya untuk membuat buku contoh huruf.
                    </p>
                </div>
                <div className="col-span-5">
                    
                </div>
            </div>
        </section>
  )
}

export default HeroSection