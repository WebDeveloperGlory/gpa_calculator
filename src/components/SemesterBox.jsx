import { useState } from 'react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import CourseInput from './CourseInput';

const SemesterBox = ({ setSemester, index, semester }) => {
    const [ gpa, setGpa ] = useState(0.00);
    const [ courses, setCourses ] = useState([]);

    const credUnits = {
        "A": 5,
        "B": 4,
        "C": 3,
        "D": 2,
        "E": 1,
        "F": 0,
    }

    const removeSemester = () => {
        const updatedSemester = semester.filter( (item, i) => i !== index );
        setSemester( updatedSemester );
    }
    const addCourse = () => {
        const newCourses = [ ...courses, '' ]
        console.log(newCourses)
        setCourses( newCourses )
    }
    const handleCourseChange = ( index, value ) => {
        const newCourses = [ ...courses ];
        newCourses[ index ] = value;
        setCourses( newCourses );

        let totalScore = 0;
        let totalCredits = 0;
        newCourses.forEach((course) => {
            const { grade, units } = course;

            totalScore += gotten( grade, units );
            totalCredits += Number(units);
        })

        setGpa( (totalScore / totalCredits).toFixed(2) );
    }

    const gotten = ( grade, credUnit ) => {
        return credUnits[ grade ] * Number( credUnit );
    }
  return (
    <div className='bg-white w-full rounded-md shadow-sm shadow-black px-4 py-2'>
        <div className="flex justify-between items-center">
            <h1 className="text-bold text-xl">
                {`Semester ${ index+1 }`}
            </h1>
            <XMarkIcon 
                onClick={ removeSemester }
                className='w-5 h-5 cursor-pointer' 
            />
        </div>
        <div className="flex justify-center items-center font-normal text-sm text-center opacity-60 mt-2 mb-0.5">
            <h1 className='basis-7/12'>Course/Course Code</h1>
            <h1 className='basis-2/12'>Grade</h1>
            <h1 className='basis-2/12'>Creds</h1>
            <h1 className='basis-1/12'></h1>
        </div>
        {
            courses.map(( course, index ) =>         
                <CourseInput 
                    index={ index } 
                    key={ index }
                    course={ course }
                    courses={ courses }
                    setCourses={ setCourses }
                    onCourseChange={ handleCourseChange }
                />
            )
        }
        <div className="flex justify-between items-center">
            <button
                onClick={ addCourse }
                className='flex gap-1 bg-cyan-700 text-white px-3 py-2 mt-2 cursor-pointer'
            >
                <PlusIcon className='h-6 w-6' />
                <p>Add course</p>
            </button>
            <h1 className='text-xl mr-2'>GPA: <span className='ml-3 text-xl'>{ gpa }</span></h1>
        </div>
    </div>
  )
}

export default SemesterBox