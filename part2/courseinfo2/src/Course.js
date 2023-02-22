import Content from './Content.js'
import Header from './Header.js'

const Course = ({ course }) => {

    return (
        <>
            <Header text={course.name}  />
            <Content parts={course.parts} />
        </>
    )
}

export default Course