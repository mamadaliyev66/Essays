import { Link } from "react-router-dom"

const callouts = [
    {
      name: 'Opinion Questions' ,
      description: 'Agree or Disagree Essay',
      imageSrc: 'https://teachlikeachampion.org/wp-content/uploads/agree-disagree.jpg',
      imageAlt: 'Agree Or Disagree Image ',
      href: 'agreeordisagree',
    },
    {
      name: 'Positive or Negative',
      description: 'Advantages or Disadvantages ',
      imageSrc: 'https://www.timecamp.com/blog/wp-content/uploads/2018/02/positive-negative-risk.jpg',
      imageAlt: 'Image that illustrates positive or negative ',
      href: 'aod',
    },
    {
      name: 'Discuss Both Views',
      description: 'Discusssion Essay',
      imageSrc: 'https://www.codlearningtech.org/wp-content/uploads/2020/07/discussionboard-1.png',
      imageAlt: 'Image that illustrates discussion',
      href: 'discussion',
    },
     {
        name: '   ',
        description: 'Problem and Solution Questions',
        imageSrc: 'https://cdn.vectorstock.com/i/preview-1x/34/22/problem-solution-thoughtful-girl-with-tables-vector-41493422.jpg',
        imageAlt: 'Image that illustrates problem and solution.',
        href: 'ps',
      }
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h1 className="text-5xl my-6 font-bold text-gray-900">IELTS WRITING TASK 2</h1>
            <h2 className="text-2xl font-semibold text-gray-900 my-9">In the IELTS Writing Task 2, you are required to craft a compelling essay on a given topic. The approach and structure will largely depend on the question type presented. This guide offers a detailed look into the various question types, their structures, and strategies to tackle them effectively.</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <Link to={callout.href} >
                <div key={callout.name} className="group relative my-9">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                   
                      <span className="absolute inset-0" />
                      {callout.name}
                   
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <h1 className="text-lg text-center">Created by <span className="font-semibold"><a href="https://t.me/Mamadaliyev06">Takosh1</a></span></h1>
      </div>

    )
  }
  