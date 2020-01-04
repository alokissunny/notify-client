import React, {Component} from 'react'
import Topic from '../../components/Topic';


class HotTopics extends Component{
    constructor() {
        super();
    }
    getHotTopics() {

    }
    items = [{_id : 0,name : 1},{_id : 1,name : 1},{_id : 2,name : 1},{_id : 3,name : 1},{_id : 4,name : 1},{_id : 5,name : 1},{_id : 6,name : 1}]
    getItems() {
      return   this.items.map(item => {
            return <Topic data = {item}></Topic>
        })
    }
    render(){
        return <div style={{'flexDirection': 'row',
            'overflow': 'scroll',
            'display': 'flex'}}>
            {this.getItems()}
        </div>
   
    }

}


export default HotTopics;   