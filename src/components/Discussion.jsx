import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Discussion() {
  return (
    <div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Discuss Both Views Questions</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Discussion Essay </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              These questions require you to explore multiple perspectives on a topic.              
               </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://t4.ftcdn.net/jpg/05/03/85/43/360_F_503854390_OOloYP64RpUr1dssAa0ROoBgOOba4wBw.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <div>
                    <h1 className='text-2xl font-bold'>
                        Question Example :
                    </h1>
                    <ul>
                        <li className='font-semibold  my-3 ml-3' style={{listStyleType:'disc'}}>
                        Should governments prioritize economic growth over environmental conservation?
                        
                        </li>
                    </ul>
                </div>
              <h1 className='text-3xl font-bold mt-9'>
              Essay Structure:
              </h1>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">• Introduction</strong> Paraphrase the Question and provide a thesis statement.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 1.</strong> Detail one viewpoint, give reasons for/against it and provide an example.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 2</strong> State the opposing viewpoint, discuss it, and again offer an example.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Conclusion</strong> Sum up the discussion and state your preferred perspective.
                  </span>
                </li>
              </ul>

              <h1 className='text-3xl text-gray-800  font-bold mt-16'>
              Sample Essay:
              </h1>
              <p className="mt-8">
              <span className='font-bold'> Introduction:</span> : The delicate balance between economic growth and environmental conservation has become a critical concern in contemporary societies. In this essay, I will delve into both perspectives on whether governments should prioritize economic growth or environmental conservation.
              
              </p>

              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 1:</span> : From an economic standpoint, prioritizing growth can lead to numerous benefits. Economic expansion creates job opportunities, boosts national income, and improves living standards for citizens. For instance, countries like China and India have experienced significant economic growth that has lifted millions out of poverty. This growth can fund essential services such as healthcare and education, contributing to overall societal development.
              
              </p>
              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 2: </span>On the other hand, environmental conservation holds paramount importance for the future well-being of our planet. Ecological degradation and resource depletion have dire consequences for ecosystems and humanity alike. Focusing on environmental conservation ensures the preservation of biodiversity, clean air, and freshwater sources. For instance, countries like Sweden have successfully implemented green policies, resulting in cleaner air and sustainable use of natural resources.
             
             </p>
              <p className="mt-8">
             <span className='font-bold'> Conclusion:</span> In conclusion, the debate over whether governments should prioritize economic growth or environmental conservation is complex and multifaceted. While economic growth brings prosperity and improved living standards, neglecting environmental concerns could lead to irreversible damage to our planet. Striking a balance between these two perspectives is crucial. Governments can implement policies that promote sustainable economic growth while also ensuring responsible resource management and environmental protection. Only through careful consideration and informed decision-making can societies navigate the intricate interplay between economic progress and environmental stewardship.
             
              </p>
   


              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Advanced Tips:</h2>
              <p className="mt-6">
                <ul>
                    <li className='font-medium' style={{listStyleType:'disc'}}>	Ensure you give equal weight to both viewpoints.</li>
                    <li className='font-medium' style={{listStyleType:'disc'}}>	Your conclusion should reflect a balanced understanding of the topic.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
