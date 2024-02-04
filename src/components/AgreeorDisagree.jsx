import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function AgreeorDisagree() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Opinion Questions </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Agree or Disagree Essay</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              This question type asks you to express your viewpoints on a given topic or statement.              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://media.istockphoto.com/id/1406070639/vector/agree-and-disagree-label-yes-and-no-check-marks-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=T6sPpppl1ujOova_P-R_oVcsa1zb1fRXmLbFgkIn_VI="
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
                        Is digital technology in schools beneficial for students learning?
                        </li>
                    </ul>
                </div>
              <h1 className='text-3xl font-bold mt-9'>
              Essay Structure:
              </h1>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">• Introduction</strong> Paraphrase the Question and state your opinion, outlining the main ideas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 1.</strong> Begin with a topic sentence, explain this topic sentence, and provide an example.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Main Body Paragraph 2</strong> Follow the same format as the previous paragraph.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">•	Conclusion</strong> Recap the main points and reiterate your opinion.
                  </span>
                </li>
              </ul>

              <h1 className='text-3xl text-gray-800  font-bold mt-16'>
              Sample Essay:
              </h1>
              <p className="mt-8">
              <span className='font-bold'> Introduction:</span> Digital technology has become an integral part of modern education, transforming the way students learn and interact with the world. In this essay, I will outline why I believe that incorporating digital technology in schools is highly beneficial for students learning.
              </p>

              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 1:</span> First and foremost, digital technology enhances engagement and active participation in the learning process. Interactive learning platforms, virtual simulations, and multimedia resources make lessons more captivating and encourage students to explore concepts in depth. For instance, online platforms like Khan Academy offer interactive math lessons that adapt to individual learning paces, ensuring a personalized and effective learning experience. This level of engagement fosters a deeper understanding of subjects.              </p>

              <p className="mt-8">
              <span className='font-bold'> Main Body Paragraph 2: </span>Furthermore, digital technology equips students with practical skills relevant to the digital age. In today’s interconnected world, proficiency in using digital tools and navigating online resources is essential for success. Integrating technology into education not only prepares students for the future job market but also empowers them to be critical thinkers and problem solvers. For instance, coding workshops in schools enable students to develop computational thinking, a skill applicable in a wide range of disciplines.              </p>

              <p className="mt-8">
             <span className='font-bold'> Conclusion:</span> In conclusion, the integration of digital technology into schools brings numerous advantages to students’ learning experiences. It enhances engagement, promotes practical skills, and cultivates a mindset of adaptability and innovation. While some may argue that excessive screen time can be detrimental, judicious use of technology can mitigate these concerns. By embracing digital technology, schools can provide a holistic and dynamic education that prepares students for the challenges of the modern world.              </p>



              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Advanced Tips:</h2>
              <p className="mt-6">
                <ul>
                    <li className='font-medium' style={{listStyleType:'disc'}}>Be clear in your stance and acknowledge counterarguments if necessary</li>
                    <li className='font-medium' style={{listStyleType:'disc'}}>Employ persuasive tools like strong adjectives, rhetorical questions, and emphatic structures to bolster your arguments</li>
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
