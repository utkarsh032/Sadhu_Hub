import React, { useState } from 'react'
import Card from '../../components/shared/Card/Card'

// step
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepName from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'
import StepUsername from '../Steps/StepUsername/StepUsername'

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername
}


export default function Register() {
  const [step, setStep] = useState(1)
  const Step = steps[step]

  function onNext() {
    setStep(step + 1)
  }

  return (
    <div>
      <Card>
        <Step onNext={onNext} />
      </Card>
    </div>
  )
}
