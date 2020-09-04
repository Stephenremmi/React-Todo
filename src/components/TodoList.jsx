import React from 'react'

function TodoList() {
    return (
        <div className="todo-list">
            <ul>
                <li>
                    <div>shopping</div>
                    <div style={{display: "flex", justifyContent: "space-between", width: "50px"}}>
                        <div className="icon">
                        <i title="Complete" className="fas fa-check circle poniter" />
                        <i title="Complete" className="fas fa-trash-alt pointer" />
                        </div>
                    </div>
                </li>
                <li>
                <div>code</div>
                    <div style={{display: "flex", justifyContent: "space-between", width: "50px"}}>
                        <div className="icon">
                        <i title="Complete" className="fas fa-check circle poniter" />
                        <i title="Complete" className="fas fa-trash-alt pointer" />
                        </div>
                    </div>
                    
                    
                </li>
                <li>
                <div>class</div>
                    <div style={{display: "flex", justifyContent: "space-between", width: "50px"}}>
                        <div className="icon">
                        <i title="Complete" className="fas fa-check circle poniter" />
                        <i title="Complete" className="fas fa-trash-alt pointer" />
                        </div>
                    </div>
                    
                    
                </li>
                <li>
                <div>play</div>
                    <div style={{display: "flex", justifyContent: "space-between", width: "50px"}}>
                        <div className="icon">
                        <i title="Complete" className="fas fa-check circle poniter" />
                        <i title="Complete" className="fas fa-trash-alt pointer" />
                        </div>
                    </div>
                    
                    
                </li>
            </ul>
            
        </div>
    )
}

export default TodoList
