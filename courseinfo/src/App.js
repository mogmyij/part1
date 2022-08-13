const Header =(props)=><h1>{props.text}</h1>

const Content=(props)=>{
  var parts=props.parts

  return(
    <div>
    <Part name={parts[0].name} exercises={parts[0].exercises}/>
    <Part name={parts[1].name} exercises={parts[1].exercises}/>
    <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div> 
  )
}

const Total=(props)=>{
  var total=0
  props.parts.forEach(element => {
   total+=element.exercises 
  });
  return(
    <p>{props.text}{total}</p>
  )
}

const Part=(props)=> <p>{props.name}: {props.exercises}</p>

const App = () => {
const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
   return (
    <div>
      <Header text={course.name}/>
      <Content parts={course.parts}/>
      <Total text="number of exercises: " parts={course.parts}/>
    </div>
  )
}

export default App