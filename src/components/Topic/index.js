import React, { useState } from 'react'
import './styles.css'
import {
    Link,
  } from "react-router-dom";
  import * as firebase from "firebase/app";
  import '@firebase/messaging';
import ReactCardFlip from 'react-card-flip';

const url = 'http://localhost:3001/subscribe/'
const Topic = ({data , permissionHandler}) => {
   const  [isFlipped , setFlipped]= useState(false);
    var messaging = firebase.messaging();

    function topicClickHnadler() {
        console.log("checking permission");
        setFlipped(!isFlipped);
        //temp commented
      //  switch (Notification.permission) {
      //      case 'granted':
      //       permissionHandler(false);
      //       //retrieve token
      //       retrieveToken();
      //          break;
      //       case 'denied':
      //           console.log('DENIED!!!!!!!!!!!');
      //           break;
      //       case 'default':
      //           permissionHandler(true)
      //           break;
       
      //      default:
      //          break;
      //  }
        //   requestPermission();

        //show notification UI if not approved
        //else subscribe
    }

   function  retrieveToken()  {
        console.log('retrieving token..............');
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log('Got Token'+currentToken)
                console.log('data', data);
                sendTokenToServer(currentToken, data).then(res => {
                    console.log('response '+res);
                })
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

   async function  sendTokenToServer(currentToken,data) {

    let postData = {};
    postData.clientId = currentToken;
    postData.topicName = data.name;
    postData.topicId = data._id;
    postData.currentStatus = 'STARTED';
    postData.startDate = Date.now();

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(postData) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects

    }
    
    return (
      <ReactCardFlip key={data._id} isFlipped={isFlipped} flipDirection="horizontal">
        <div  className ={'topic'}  onClick={topicClickHnadler}>
         <img style={{width : '100px' , height: '100px' }} src={'/images/Nuts.png'}></img>
        </div>
        <div className ={'topic'}   onClick={topicClickHnadler}>
          <div style={{width : '100px'}}>
               Name:  {data.name}
            </div>
            <div>
            Issuer : {data.providerName}
            </div>
            <div>
            See More :  {data.details}
            </div>
        </div>
       

        </ReactCardFlip>
    )
}

export default Topic