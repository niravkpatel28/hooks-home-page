import React ,{useState, useEffect }from 'react';
import uniqid from 'uniqid';


// const renderList= (listOfTask)=>{
//     let list = [...listOfTask].map((element)=>{
//         return (
//             <p key={element.uid}> {element.task} </p>
//         )
//     })

//     return list
// }

//code for storing tasks in local storage will be called in useEffect
const TASK_KEY='TASK_KEY'
const storeTask = ({taskList, completedList})=>{
    localStorage.setItem(
        TASK_KEY, 
        JSON.stringify({taskList,completedList})
        )
}

function Tasks(){

    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    


    useEffect(()=>{
        storeTask({taskList,completedList})
    })
    const taskhandler = (event)=>{
        console.log(event.target.value);
        setTask(event.target.value);
    }

    const addTask = (event)=>{
        // event.preventDefault()
        let uniqueTask = {
            task:task,
            uid:uniqid()
        }
        
        setTaskList([...taskList].concat(uniqueTask));
        setTaskList([...taskList,uniqueTask]);
        // setTaskList(list);
        setTask('')
    }

    const submitTask = (event)=>{
        if(event.key==='Enter'){
            addTask();
        }
    }


    const completeTask = (task)=>{
        console.log(task)
        setCompletedList([...completedList].concat(task));
        setTaskList([...taskList].filter((element)=>{
            return element!==task
        }))
    }



    // render task list
    const renderTaskList=()=>{
        let list = [...taskList].map((task)=>{
            return (
                <p 
                    key={task.uid} 
                    onClick={()=>{
                        completeTask(task);
                    }}> 
                    {task.task} 
                </p>
            )
        })

        return list;
    }

    //render complete list
    const renderCompleteList=()=>{


        let list = [...completedList].map((task)=>{
            return (
                <p key={task.uid } 
                   style={{
                      textDecoration:'line-through'
                    }}>
                     {task.task} 
                </p>
                
            )
        })

        return list;
    }



    // rendering component 
    return(
        <>  
        <br/>
        <br/>
        <label> Task </label>
            <input type="input" 
                onChange={ taskhandler }
                onKeyPress={ submitTask }
                value={task} />
            <button onClick={addTask}> Add Task</button>
            <h2> Pending Task </h2>
            {renderTaskList()}
            <h2> Completed Task </h2>
            {renderCompleteList()}
        <br/>
        </>
    )
}




export default Tasks;