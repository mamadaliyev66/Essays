import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function PS() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600"></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Problem and Solution Essay </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Problem and Solution Questions
                             </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://imageio.forbes.com/specials-images/imageserve/61bd343aecd04efd3b8fba2a/problem-solving--solution--systems-thinking--light-bulb/0x0.jpg?format=jpg&crop=2347,1320,x0,y115,safe&width=960"
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
                        What challenges does urbanization present and how can cities adapt?                        
                        </li>
                    </ul>
                </div>
              <h1 className='text-3xl font-bold mt-9'>
              Essay Structure:
              </h1>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">• Introduction</strong> Paraphrase the Question and outline the main ideas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 1.</strong> Identify the problems, discuss them, and offer examples.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 2</strong> Suggest possible solutions, discuss their feasibility, and provide examples.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Conclusion</strong> Recap the highlighted problems and proposed solutions.
                  </span>
                </li>
              </ul>

              <h1 className='text-3xl text-gray-800  font-bold mt-16'>
              Sample Essay:
              </h1>
              <p className="mt-8">
              <span className='font-bold'> Introduction:</span> : The rapid pace of urbanization has transformed the world’s landscape, bringing with it a host of challenges that demand urgent attention. In this essay, I will explore the problems posed by urbanization and propose viable solutions to address these challenges.
              </p>

              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 1:</span> : Urbanization has given rise to a range of pressing issues. One significant challenge is the strain on urban infrastructure, including transportation and housing. As rural populations migrate to cities, the demand for housing outpaces supply, leading to slums and inadequate living conditions. Additionally, traffic congestion and limited public transport options undermine efficient mobility. Pollution is another critical concern as increased industrial activity and vehicular emissions degrade air quality, endangering residents’ health.
              </p>
              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 2: </span>: To counter these challenges, cities can adopt proactive measures. Firstly, urban planning should prioritize affordable housing initiatives and sustainable infrastructure development. By building smart cities that utilize technology to manage resources efficiently, governments can alleviate congestion and enhance the quality of life. Moreover, investing in efficient public transportation systems, such as metro networks and buses, can reduce traffic congestion and pollution. For instance, the Bus Rapid Transit system in Curitiba, Brazil, has improved transportation efficiency and reduced congestion.
             </p>
              <p className="mt-8">
             <span className='font-bold'> Conclusion:</span> : In conclusion, the challenges posed by urbanization require multifaceted solutions that span urban planning, infrastructure development, and sustainable policies. By addressing housing shortages, improving transportation, and promoting environmentally conscious practices, cities can harness the potential of urbanization while mitigating its negative consequences. This approach will not only enhance the quality of life for urban residents but also contribute to the overall well-being of society in the face of an increasingly urbanized world.
              </p>
   


              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Advanced Tips:</h2>
              <p className="mt-6">
                <ul>
                    <li className='font-medium' style={{listStyleType:'disc'}}>	Be specific in identifying problems and avoid vagueness.</li>
                    <li className='font-medium' style={{listStyleType:'disc'}}>	Solutions should be practical and actionable.</li>
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
