import React from 'react'
import Services from './components/Services'
import AppointmentForm from './components/AppointmentForm'
import MissionVision from './components/MissionVision'
import Testimonials from './components/Testimonials'
import CaptchaWrapper from '@/src/components/common/CaptchaWrapper'
import Doctors from './components/Doctors'

const HomePage = () => {
    return (
        <div>
            <Services />
            <CaptchaWrapper>
                <AppointmentForm />
            </CaptchaWrapper>
            <MissionVision />
            <Doctors />
            <Testimonials />
        </div>
    )
}

export default HomePage
