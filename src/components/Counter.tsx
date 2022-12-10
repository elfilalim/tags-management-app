import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
    };
    // constructor(){    -------------------------------this is the general format of binding a object of event handler 
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    handleIncrement = () => {
        // console.log("Icrement Clicked", this);
        // this.state.count++;
        this.setState({ count: this.state.count + 1, tags: this.state.tags, });
    }
    styles = {
        fontSize: 50,
        fontWeight: 'Bold',
    };
    render() {

        return <>
            <span style={this.styles} className={this.getBadgeClasses()}>
                {this.formatCounter()}
            </span>
            <button
                onClick={this.handleIncrement}
                className='btn btn-secondary btn-sm'
            >
                Increment
            </button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </>

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCounter() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;