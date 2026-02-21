import React from 'react'
import Container from '../../components/Container'
import ContainerHeading from '../../components/ContainerHeading'

const missionText = [
  'To provide a learner-centered environment that challenges individuals to actively participate in the education process',
  'To empower the faculty to excel in teaching while engaging in research, creativity and public service',
  'To develop effective learning skills enabling students pick up critical thinking thus crafting them professionally fit and ethically strong.',
  'To reach out industries,schools and public agencies to partner and share human and academic resource.'
]

const commitedText = [
  'Promote high quality research, innovation and publications',
  'Maintain global standards of excellence in teaching consultancy and creativity',
  'Collaborate with industries and institutes for skill development, generation, acquisition and adoption of knowledge and promotion of entrepreneurship.',
  'Provide state-of-the-art equipment, excellent faculty, and the right ambience to target top class engineering education',
  'Promote practical sense of human values in education for fruitful contribution to the societal development',
  'Promote equity, diversity and inclusion in the institute in its true spirit at every level.'
]
const VissionMission = () => {
  return (
    <Container>
      <ContainerHeading text='Vission & Mission' />
      <div className='flex flex-col gap-4'>
        <div>
          <p className='mission-p'>Vision</p>
          <p>To emerge as a comprehensive Institute that provides quality technical education and research thereby building up a precious human resource for the industry and society. </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='mission-p'>Mission</p>
          <ul className='list-disc ml-7'>
            {missionText.map((txt) => {
              return (
                <li>{txt}</li>
              )
            })}
          </ul>
        </div>


        <div className='flex flex-col gap-2'>
          <p className='mission-p'>Core Values</p>
          <ul className='list-disc ml-7'>
            <li className='font-bold'>Integrity</li>
            <p>Adhering to the highest standards of honesty, fairness, trust and integrity in both personal and professional behavior</p>
            <li className='font-bold'>Excellence</li>
            <p>Persistent commitment to hard work, diligence, perseverance and consistency in the pursuit of the highest quality in all endeavors.</p>
            <li className='font-bold'>Social Responsibility</li>
            <p>Provide opportunities and access that will enhance life of people and enable them to develop intellectually, economically, socially and culturally.</p>
            <li className='font-bold'>Social Responsibility</li>
            <p>Imbibing a culture of continuous incremental improvement</p>
            <li className='font-bold'>Equitability</li>
            <p>Appreciating diversity in its student body, faculty and staff through civility and commitment to tolerance</p>
          </ul>
        </div>


        <div className='flex flex-col gap-1'>
          <p className='mission-p'>Quality Policy</p>
          <li className='font-bold ml-7'>"What is really needed to make democracy function is not knowledge of facts, but right education"</li>
          <p className='ml-50 font-bold'>- Mohandas Karamchand Gandhi</p>
        </div>


        <div>
          <p className='mission-p'>N.B.K.R. Institute of Science & Technology is committed to:</p>
          <ul className='list-disc ml-7 mt-3'>
            {commitedText.map((txt) => {
              return (
                <li>{txt}</li>
            )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default VissionMission