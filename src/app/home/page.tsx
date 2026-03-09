import React from 'react'
import Services from './components/Services'
import AppointmentForm from './components/AppointmentForm'
import MissionVision from './components/MissionVision'
import Testimonials from './components/Testimonials'
import CaptchaWrapper from '@/src/components/common/CaptchaWrapper'
import Hero from './components/Hero'
import InstagramClient from './components/InstagramClient'
import OurClinic from './components/OurClinic'
import CaseStudy from './components/CaseStudy'
import Dentist from './components/Dentist'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Services />
            <OurClinic />
            <Dentist />
            <CaptchaWrapper>
                <AppointmentForm />
            </CaptchaWrapper>
            <CaseStudy />
            <MissionVision />
            <Testimonials />
            {/* <InstagramClient /> */}
        </div>
    )
}

export default HomePage
