import { ReactElement, useState } from "react";


export default function useMultiStepsForm(steps: ReactElement[]) {

    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next() {
        setCurrentStepIndex(i => {
            return i >= (steps.length - 1) ? i  : i + 1
        })
    }

    function back() {
        setCurrentStepIndex(i => {
            return i <= 0 ? i : i - 1
        })
    }

    function goto(index:number) {
        setCurrentStepIndex(index)
    }


  return (
    {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        next: next,
        back: back,
        goto,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length -1
    }
  )
}
