import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import AppearAffect from 'components/AppearAffect';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

// scroll  handler
import dynamic from 'next/dynamic'
import { cvUrl } from '../static';
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});

export default function Template() {
  const mainId = "portershed";

  return (<>
    <main id={mainId} className='flex flex-wrap justify-center items-center min-h-full w-[940px] max-w-full m-auto'>
      <div className={'px-10 pt-12 pc:pt-0 pc:pl-10 pc:pr-0 pc:h-[587px] w-full pc:w-[540px] pc:order-last'}>
        <AppearAffect>
          <div className='flex flex-col justify-center h-full'>
            <div className='pc:w-[500px]'>
              <Title>
              Meet your new developer 😉
              </Title>
              <Hr className='my-6'/>
              <Text.Frame>
                <Text.Greeting>
                  Hello Portershed!
                </Text.Greeting>
                <Text.P>
                  I, Blake Preston, recently finished my studies in Computer Science and Information Technology at the University of Galway. Over the summer, I applied my knowledge and learned how to develop full-stack web apps with Next.js, React, Tailwindcss and Firebase Hosting. I just finished my first freelance project as a web developer for Soma Co-working Moycullen. <Text.Link noP={true} href='https://somacowork.ie/'>https://somacowork.ie/</Text.Link>
                </Text.P>
                <Text.P>
                  Free-lance development is fine, but I would much prefer to start my career with a company in a thriving environment like the Portershed. I would bring value to your company by either integrating into your team of developers or by offering a fresh perspective to revamp and modernize your existing solutions.
                </Text.P>
              </Text.Frame>
            </div>
            <div className='flex flex-wrap pc:w-[500px] items-end justify-between pt-12 pb-1'>
              <div className='pr-8'>
                <Text.Frame>
                <Text.Link
                    href={cvUrl}
                  >
                    view my CV
                  </Text.Link>
                  <Text.Link
                    href='https://github.com/BeToast'
                  >
                    view my Github
                  </Text.Link>  
                  <Text.Link
                    href='https://www.linkedin.com/in/blake-m-preston/'
                  >
                    view my Linkedin
                  </Text.Link>
                  <Text.Link
                    href='tel:+353-85-260-9548'
                  >
                    085-260-9548
                  </Text.Link>
                  <Text.Link
                    href='mailto:blake.m.preston@gmail.com'
                  >
                    blake.m.preston@gmail.com
                  </Text.Link>
                </Text.Frame>
              </div>
              <div className='mt-12'>
                <Signature>
                  I look forward to meeting you,
                </Signature>
              </div>
            </div>
          </div>
        </AppearAffect>
      </div>

      <div className='mt-16 pc:mt-0 w-[400px] '>
        <Photo />
      </div>
    </main>
    

    <DynamicScrollHandler mainId={mainId}/>
  </>)
}
