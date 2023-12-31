import Photo from 'components/Photo'
import Title from 'components/Title'
import Text from 'components/Text'
import AppearAffect from 'components/AppearAffect';
import Hr from 'components/Hr';
import Signature from 'components/Signature';

// scroll  handler
import dynamic from 'next/dynamic'
import { cvUrl, cvUrlHospitality } from '../static';
const DynamicScrollHandler = dynamic(() => import('components/ScrollHandler'),{
  ssr: false,
});

export default function Template() {
  const mainId = "condihospitality";

  return (<>
    <main id={mainId} className='flex flex-wrap justify-center items-center min-h-full w-[940px] max-w-full m-auto'>
      <div className={'px-10 pt-12 pc:pt-0 pc:pl-10 pc:pr-0 pc:h-[587px] w-full pc:w-[540px] pc:order-last'}>
        <AppearAffect>
          <div className='flex flex-col justify-center h-full'>
            <div className='pc:w-[500px]'>
              <Title>
              Meet your new mixologist
              </Title>
              <Hr className='my-6'/>
              <Text.Frame>
                <Text.Greeting>
                  Hyia,
                </Text.Greeting>
                <Text.P>
                  I, Blake Preston, would like to apply for a position at your new location in Galway city. Due to my bartending experience in the States, which has a refined cocktail market, I would be a valuable asset to your mixologist team. Alternatively, I would be content as a server or barista.
                </Text.P>
                <Text.P>
                  I hope to join your team soon and help bring your vision for this new establishment to life.
                </Text.P>
              </Text.Frame>
            </div>
            <div className='flex flex-wrap pc:w-[500px] items-end justify-between pt-12 pb-1'>
              <div className='pr-8'>
                <Text.Frame>
                  <Text.Link
                    href={cvUrlHospitality}
                  >
                    view my CV
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
                  All the best,
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
