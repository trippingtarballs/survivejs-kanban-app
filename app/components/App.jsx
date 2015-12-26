import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [{
                id: uuid.v4(),
                task: 'Learn Webpack'
            }, {
                id: uuid.v4(),
                task: 'Learn React'
            }, {
                id: uuid.v4(),
                task: 'Do laundry'
            }]
        };
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes items={notes} onEdit={this.editNote}/>
            </div>
        );
    }

    addNote = () => {
        this.setState({
            notes: [...this.state.notes, {id: uuid.v4(), task: 'Make lunch'}]
        });
    };

    editNote = (id, task) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                note.task = task;
            }

            return note;
        });

        this.setState({notes});
    };
}
