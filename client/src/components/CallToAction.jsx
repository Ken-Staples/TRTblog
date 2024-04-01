import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            How well do you know your neighbourhoods in Calgary?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout theNeigbourhoods.com to learn more about your neighbourhood!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://theneighbourhoods.com" target='_blank' rel='noopener noreferrer'>
                    theNeighbourhoods.com
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
        <img src="../src/assets/images/neighbourhoods.png" alt="" srcSet="" width='500' />
        </div>
    </div>
  )
}