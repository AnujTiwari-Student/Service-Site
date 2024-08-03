import React from 'react'
import Photo from './Photo'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function MainSection() {
  return (
    <div className='mx-auto w-[90%] xl:w-[85%] justify-center xl:justify-around  flex'>
        <div className=''>
            <Photo />
        </div>
        <div className='flex flex-col'>
            <div className='xl:my-32 xl:w-[480px]'>
                <h1 className='text-xl font-bold text-green-500 mb-6 xl:mb-8'>Who we are</h1>
                <h1 className='text-3xl font-bold text-black xl:text-5xl mb-8 xl:mb-8'>Hub connects creative people.</h1>
                <p className='text-gray-600 font-semibold xl:mb-0'>With over 25 years of experience, we have crafted thousands of strategic discovery process.</p>
            </div>
            <div className='xl:w-[480px] my-8 xl:-my-20'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Global search engine optimization</AccordionTrigger>
                        <AccordionContent>
                        A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Complete social media integration</AccordionTrigger>
                        <AccordionContent>
                        A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders or
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Brading starategies for startups</AccordionTrigger>
                        <AccordionContent>
                        A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders or
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default MainSection