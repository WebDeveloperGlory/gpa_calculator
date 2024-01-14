import { useState } from "react"
import { Input } from "@material-tailwind/react"
import { ChevronDownIcon, XMarkIcon, XCircleIcon } from "@heroicons/react/24/solid";

const CourseInput = ({ index, course, courses, setCourses, onCourseChange }) => {
    const [ courseDetails, setCourseDetails ] = useState({
        course: '',
        units: 1,
        grade: "A"
    })
    const [ showGrade, setShowGrade ] = useState(false);

    const gradeList = [ "A", "B", "C", "D", "E", "F" ]

    const handleGrade = async ( grade ) => {
        const current = { ...courseDetails, grade: grade }
        setCourseDetails(current);
        setShowGrade(false);
        onCourseChange( index, current )
    }

    const removeCourse = ( course ) => {
        const updated = courses.filter(c => c !== course);
        console.log(updated)

        setCourses( updated )
    }

    const handleChange = (e) => {
        const { name } = e.target;
        let { value } = e.target;
    
        const current = {
            ...courseDetails,
            [ name ]: value
        }

        setCourseDetails( current )

        onCourseChange( index, current )
    }

  return (
    <div className='flex justify-center items-center relative'>
        <div className="basis-7/12">
            <Input 
                variant="outlined" 
                placeholder="Input Course / Course Code" 
                className="border px-3 py-2 border-black rounded-sm" 
                name="course"
                value={ courseDetails.course }
                onChange={ handleChange } 
            />
        </div>
        <div
        onClick={ () => setShowGrade( prev => !prev ) }
            className="basis-2/12 border border-black h-10 border-x-transparent flex justify-center items-center space-x-1 cursor-pointer"
        >
            <p className="font-bold ">{ courseDetails.grade }</p>
            <ChevronDownIcon className="w-4 h-4" />
        </div>
        <div className="basis-2/12 border border-black h-10 flex justify-center items-center">
            <Input 
                variant="outlined" 
                className="border border-black rounded-sm text-center font-bold text-lg h-full" 
                name="units"
                value={ courseDetails.units }
                onChange={ handleChange } 
            />
        </div>
        <div className="basis-1/12 flex justify-center items-center">
            <XCircleIcon 
                onClick={ () => removeCourse( course ) }
                className="w-6 h-6 pl-1" 
            />
        </div>
        <div className={`absolute ${ index < 2 ? 'top-10' : 'bottom-10'} right-12 w-12 h-60 bg-white z-10 cursor-pointer ${ !showGrade && 'hidden' }`}>
            { gradeList.map( ( grade ) => <p
                onClick={ () => handleGrade( grade ) }
                key={grade}
                className="h-10 w-full flex justify-center items-center border-black border">{ grade }</p> ) }
        </div>
    </div>
  )
}

export default CourseInput