import React, {Component} from 'react'
import {Topic} from '../../components'
import {getAllTopics , updatePermission} from '../../actions/topics'
import {connect} from 'react-redux'
import './styles.css'
import * as firebase from "firebase/app";
import '@firebase/messaging';
import {initfirebase} from '../../config/initfirebase';



class Topics extends Component {
   messaging = firebase.messaging();

     
  // [END get_messaging_object]
  // [START set_public_vapid_key]
  // Add the public key generated from the console here.
  // [END set_public_vapid_key]
    constructor(){
        super();
        // this.messaging.usePublicVapidKey('BBTg4vQulhTEZIeX6bk-_PvUTcTFj6T9u29n3LXyvM2flRaOPpsBzIyCVuPTN_qd9FXcbf6ckR9fABUTJuNhDZ4');
        // initfirebase();
        console.log(this.messaging)
    }
    componentWillMount() {
        console.log(this.props.match.params.id)
        const catId = this.props.match.params.id;
        this.getAllTopics(catId);
      }
    topics = ['t1' ,'t2' ,'t3'];
    getAllTopics(catId) {
        this.props.getTopics(catId);

    }


    retrieveToken = () => {
        console.log('retrieving token..............');
       this.messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log('Got Token'+currentToken)
            //   sendTokenToServer(currentToken);
            //   updateUIForPushEnabled(currentToken);
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
            //   updateUIForPushPermissionRequired();
            //   setTokenSentToServer(false);
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
          }); 
    } 
     requestPermission = () =>  {
        console.log('Requesting permission...');
        // [START request_permission]
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            // permissionHandler(true);
            this.props.updatePermission(false);
            console.log('Notification permission granted.');
            this.retrieveToken();
          } else {
            console.log('Unable to get permission to notify.');
          }
        });
        // [END request_permission]
      }

    render() {
        console.log('render ',this.props.topics);
        return <div> Hello Topics
        {this.props.topics.map(topic => {
            return <Topic key={topic._id}  data = {topic} permissionHandler = {this.props.updatePermission}/>
        })}

        <div id='permission' className={this.props.showPermission ? '' : 'hidden'}>
            Permission Modal
            <div>
                Website needs your permission to show notification

                <button onClick={this.requestPermission}>Allow </button>
                <button>Deny</button>
            </div>
        </div>
        </div>
    }
}

const mapStateToProps = (state , ownProps) => {
    return {
        topics: state.topic.topics,
        showPermission : state.topic.showPermission
    }
}
const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        getTopics : getAllTopics(dispatch),
        updatePermission: updatePermission(dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topics)