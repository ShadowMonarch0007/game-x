import React from 'react'
import Button from './Button'

const ImageClipBox = ({ src, className }) => (
    <div className={className}>
        <img src={src} alt="" />
    </div>
)

const Contact = () => {
    return (
        <section id="contact" className='my-20 min-h-96 w-screen px-10'>
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox className="contact-clip-path-1" src="img/contact-1.webp" />
                    <ImageClipBox className="contact-clip-path-2 lg:translate-y-40 translate-y-60" src="img/contact-2.webp" />
                </div>
                <div className="absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox className="absolute md:scale-125" src="img/swordman-partial.webp" />
                    <ImageClipBox className="sword-man-clip-path" src="img/swordman.webp" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase">Join GameX</p>
                    <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether</p>
                    <Button title="contact us" className="mt-10 cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default Contact