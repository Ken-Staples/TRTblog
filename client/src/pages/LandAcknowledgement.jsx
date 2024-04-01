import React from 'react'

export default function LandAcknowledgement() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <img src='../src/assets/images/landacknowledgement.png' width='600' class ='h-auto max-w-lg mx-auto' />
          <h1 className='text-3xl font font-semibold text-center my-7  text-black dark:text-white'>
            Land Acknowledgment
          </h1>
          <div className='text-md text-black dark:text-white flex flex-col gap-6'>
            <p>We acknowledge that what we call Alberta is the traditional and ancestral territory of many peoples, presently subject to Treaties 6, 7, and 8. Namely: the Blackfoot Confederacy – Kainai, Piikani, and Siksika – the Cree, Dene, Saulteaux, Nakota Sioux, Stoney Nakoda, and the Tsuut’ina Nation and the Métis People of Alberta. This includes the Métis Settlements and the Six Regions of the Métis Nation of Alberta within the historical Northwest Metis Homeland. We acknowledge the many First Nations, Métis and Inuit who have lived in and cared for these lands for generations. We are grateful for the traditional Knowledge Keepers and Elders who are still with us today and those who have gone before us. We make this acknowledgement as an act of reconciliation and gratitude to those whose territory we reside on or are visiting.
            </p><br />
          </div>
        </div>
      </div>
    </div>
  )
};
