(this["webpackJsonpreact-chat-app"]=this["webpackJsonpreact-chat-app"]||[]).push([[0],{282:function(e,t,n){},297:function(e,t){},299:function(e,t){},310:function(e,t){},312:function(e,t){},339:function(e,t){},341:function(e,t){},342:function(e,t){},348:function(e,t){},350:function(e,t){},368:function(e,t){},370:function(e,t){},382:function(e,t){},385:function(e,t){},396:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(15),r=n(17),c=n(16),i=n(3),o=n(0),l=n.n(o),u=n(61),d=n.n(u),h=n(417),j=(n(282),n(62)),f=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:"ColorPanel"})}}]),n}(l.a.Component),p=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:"MetaPanel"})}}]),n}(l.a.Component),m=n(418),b=n(88),g=n(411),O=n(266),v=n(415),C=n(409),x=n(398),y=n(193),S=n.n(y);n(286),n(397),n(288);S.a.initializeApp({apiKey:"AIzaSyAI9Ua1uVKjM-UPwg7i2VTGRpnaUEUzDyw",authDomain:"react-slack-chat-app-95f1c.firebaseapp.com",databaseURL:"https://react-slack-chat-app-95f1c.firebaseio.com",projectId:"react-slack-chat-app-95f1c",storageBucket:"react-slack-chat-app-95f1c.appspot.com",messagingSenderId:"876248782759",appId:"1:876248782759:web:e6fc7d2278091c9d438882",measurementId:"G-V6E7344HBG"});var k=S.a,U=n(259),w=n.n(U),R=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.currentUser,modal:!1,previewImage:"",croppedImage:"",blob:""},e.openModal=function(){return e.setState({modal:!0})},e.closeModal=function(){return e.setState({modal:!1})},e.dropDownOptions=function(){return[{key:"user",text:Object(i.jsxs)("span",{children:["Signed in as ",Object(i.jsx)("strong",{children:e.state.user.displayName})]}),disabled:!0},{key:"avatar",text:Object(i.jsx)("span",{onClick:e.openModal,children:"Change avatar"})},{key:"signout",text:Object(i.jsx)("span",{onClick:e.handleSignout,children:"Sign out"})}]},e.handleSignout=function(){k.auth().signOut().then((function(){return console.log("SignedOut!")}))},e.handleChange=function(t){var n=t.target.files[0],a=new FileReader;n&&(a.readAsDataURL(n),a.addEventListener("load",(function(){e.setState({previewImage:a.result})})))},e.handleCropImage=function(){e.avatarEditor&&e.avatarEditor.getImageScaledToCanvas().toBlob((function(t){var n=URL.createObjectURL(t);e.setState({croppedImage:n,blob:t})}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.user,a=t.modal,s=t.previewImage,r=t.croppedImage;return console.log(this.props.currentUser),Object(i.jsx)(h.a,{style:{background:"#43c4c"},children:Object(i.jsxs)(h.a.Column,{children:[Object(i.jsxs)(h.a.Row,{style:{padding:"1.2rem",margin:0},children:[Object(i.jsxs)(m.a,{inverted:!0,floated:"left",as:"h2",children:[Object(i.jsx)(b.a,{name:"user secret",color:"#4c3c4c",size:"big"}),Object(i.jsx)(m.a.Content,{children:"SHADOW chat"})]}),Object(i.jsx)(m.a,{inverted:!0,style:{padding:"0.2rem"},as:"h4",children:Object(i.jsx)(g.a,{trigger:Object(i.jsxs)("span",{children:[Object(i.jsx)(O.a,{src:n.photoURL,spaced:"right",avatar:!0,style:{width:"50px",height:"auto"}}),n.displayName]}),options:this.dropDownOptions()})})]}),Object(i.jsxs)(v.a,{basic:!0,open:a,onClose:this.closeModal,children:[Object(i.jsx)(v.a.Header,{children:" Change Avatar "}),Object(i.jsxs)(v.a.Content,{children:[Object(i.jsx)(C.a,{fluid:!0,type:"file",label:"New Avatar",name:"previewImage"}),Object(i.jsx)(h.a,{centered:!0,stackable:!0,columns:2,children:Object(i.jsxs)(h.a.Row,{centered:!0,children:[Object(i.jsx)(h.a.Column,{className:"ui centered aligned grid",children:s&&Object(i.jsx)(w.a,{ref:function(t){return e.avatarEditor=t},image:s,width:120,height:120,border:50,scale:1.2})}),Object(i.jsx)(h.a.Column,{children:r&&Object(i.jsx)(O.a,{style:{margin:"3.5em auto"},width:100,height:100,src:r})})]})})]}),Object(i.jsxs)(v.a.Actions,{children:[r&&Object(i.jsxs)(x.a,{color:"green",inverted:!0,children:[Object(i.jsx)(b.a,{name:"save"})," Change Avatar"]}),Object(i.jsxs)(x.a,{color:"green",inverted:!0,onClick:this.handleCropImage,children:[Object(i.jsx)(b.a,{name:"image"})," Preview"]}),Object(i.jsxs)(x.a,{color:"red",inverted:!0,onClick:this.closeModal,children:[Object(i.jsx)(b.a,{name:"remove"})," Cancel"]})]})]})]})})}}]),n}(l.a.Component),A=n(265),M=n(55),P="SET_USER",N="CLEAR_USER",L="SET_CURRENT_CHANNEL",I="SET_PRIVATE_CHANNEL",E=function(e){return{type:L,payload:{currentChannel:e}}},T=function(e){return{type:I,payload:{isPrivateChannel:e}}},D=n(412),F=n(126),_=n(413),V=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={channel:null,messagesRef:k.database().ref("messages"),activeChannel:"",channels:[],notifications:[],channelName:"",channelDetails:"",channelsRef:k.database().ref("channels"),user:e.props.currentUser,firstLoad:!0,modal:!1},e.addListeners=function(){var t=[];e.state.channelsRef.on("child_added",(function(n){t.push(n.val()),console.log(t),e.setState({channels:t},(function(){return e.setFirstChannel()})),e.addNotificationListener(n.key)}))},e.addNotificationListener=function(t){e.state.messagesRef.child(t).on("value",(function(n){e.state.channel&&e.handleNotifications(t,e.state.channel.id,e.state.notifications,n)}))},e.handleNotifications=function(t,n,a,s){var r=0,c=a.findIndex((function(e){return e.id===t}));-1!==c?(t!==n&&(r=a[c].total,s.numChildren()-r>0&&(a[c].count=s.numChildren()-r)),a[c].lastKnownTotal=s.numChildren()):a.push({id:t,total:s.numChildren(),lastKnownTotal:s.numChildren(),count:0}),e.setState({notifications:a})},e.setFirstChannel=function(){var t=e.state.channels[0];e.state.firstLoad&&e.state.channels.length>0&&(e.props.setCurrentChannel(t),e.setActiveChannel(t),e.setState({channel:t})),e.setState({firstLoad:!1})},e.handleChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.addChannel=function(){var t=e.state,n=t.channelsRef,a=t.channelName,s=t.channelDetails,r=t.user,c=n.push().key,i={id:c,name:a,details:s,createdBy:{name:r.displayName,avatar:r.photoURL}};n.child(c).update(i).then((function(){e.setState({channelName:"",channelDetails:""}),e.closeModal(),console.log("channel Added")})).catch((function(e){console.error(e)}))},e.handleSumbit=function(t){t.preventDefault(),e.isFormValid(e.state)&&e.addChannel()},e.changeChannel=function(t){e.setActiveChannel(t),e.clearNotifications(),e.props.setCurrentChannel(t),e.props.setPrivateChannel(!1),e.setState({channel:t})},e.clearNotifications=function(){var t=e.state.notifications.findIndex((function(t){return t.id===e.state.channel.id}));if(-1!==t){var n=Object(A.a)(e.state.notifications);n[t].total=e.state.notifications[t].lastKnownTotal,n[t].count=0,e.setState({notifications:n})}},e.setActiveChannel=function(t){e.setState({activeChannel:t.id})},e.getNotificationsCount=function(t){var n=0;if(e.state.notifications.forEach((function(e){e.id===t.id&&(n=e.count)})),n>0)return n},e.displayChannels=function(t){return t.length>0&&t.map((function(t){return Object(i.jsxs)(D.a.Item,{onClick:function(){return e.changeChannel(t)},name:t.name,style:{opacity:.7},active:t.id===e.state.activeChannel,children:[e.getNotificationsCount(t)&&Object(i.jsx)(F.a,{color:"red",children:e.getNotificationsCount(t)}),"# ",t.name]},t.id)}))},e.isFormValid=function(e){var t=e.channelName,n=e.channelDetails;return t&&n},e.openModal=function(){return e.setState({modal:!0})},e.closeModal=function(){return e.setState({modal:!1})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"render",value:function(){var e=this.state,t=e.channels,n=e.modal;return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsxs)(D.a.Menu,{className:"menu",children:[Object(i.jsxs)(D.a.Item,{children:[Object(i.jsxs)("span",{children:[Object(i.jsx)(b.a,{name:"users"})," CHANNELS"]})," ","  ","(",t.length,") ",Object(i.jsx)(b.a,{name:"add",link:!0,onClick:this.openModal})]}),this.displayChannels(t)]}),Object(i.jsxs)(v.a,{basic:!0,open:n,onClose:this.closeModal,children:[Object(i.jsx)(v.a.Header,{children:"Add a channel"}),Object(i.jsx)(v.a.Content,{children:Object(i.jsxs)(_.a,{onSubmit:this.handleSumbit,children:[Object(i.jsx)(_.a.Field,{children:Object(i.jsx)(C.a,{fluid:!0,label:"Name of Channel",name:"channelName",onChange:this.handleChange})}),Object(i.jsx)(_.a.Field,{children:Object(i.jsx)(C.a,{fluid:!0,label:"About the Channel",name:"channelDetails",onChange:this.handleChange})})]})}),Object(i.jsxs)(v.a.Actions,{children:[Object(i.jsxs)(x.a,{color:"green",inverted:!0,onClick:this.handleSumbit,children:[Object(i.jsx)(b.a,{name:"checkmark"})," ADD"]}),Object(i.jsxs)(x.a,{color:"red",inverted:!0,onClick:this.closeModal,children:[Object(i.jsx)(b.a,{name:"remove"})," Cancel"]})]})]})]})}}]),n}(l.a.Component),z=Object(j.b)(null,{setCurrentChannel:E,setPrivateChannel:T})(V),B=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeChannel:"",user:e.props.currentUser,users:[],usersRef:k.database().ref("users"),connectedRef:k.database().ref(".info/connected"),presenceRef:k.database().ref("presence")},e.addListeners=function(t){var n=[];e.state.usersRef.on("child_added",(function(a){if(t!==a.key){var s=a.val();s.uid=a.key,s.status="offline",n.push(s),e.setState({users:n})}})),e.state.connectedRef.on("value",(function(n){if(!0===n.val()){var a=e.state.presenceRef.child(t);a.set(!0),a.onDisconnect().remove((function(e){null!==e&&console.error(e)}))}})),e.state.presenceRef.on("child_added",(function(n){t!==n.key&&e.addStatusToUser(n.key)})),e.state.presenceRef.on("child_removed",(function(n){t!==n.key&&e.addStatusToUser(n.key,!1)}))},e.addStatusToUser=function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=e.state.users.reduce((function(e,a){return a.uid===t&&(a.status="".concat(n?"online":"offline")),e.concat(a)}),[]);e.setState({users:a})},e.isUserOnline=function(e){return"online"===e.status},e.changeChannel=function(t){var n={id:e.getChannelId(t.uid),name:t.name};e.props.setCurrentChannel(n),e.props.setPrivateChannel(!0),e.setActiveChannel(t.uid)},e.getChannelId=function(t){var n=e.state.user.uid;return t<n?"".concat(t,"/").concat(n):"".concat(n,"/").concat(t)},e.setActiveChannel=function(t){e.setState({activeChannel:t})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.activeChannel;return Object(i.jsxs)(D.a.Menu,{className:"menu",children:[Object(i.jsxs)(D.a.Item,{children:[Object(i.jsxs)("span",{children:[Object(i.jsx)(b.a,{name:"mail"})," DIRECT MESSAGES"]})," ","(",n.length,")"]}),n.map((function(t){return Object(i.jsxs)(D.a.Item,{active:t.uid===a,onClick:function(){return e.changeChannel(t)},style:{opacity:.7,fontStyle:"italic"},children:[Object(i.jsx)(b.a,{name:"circle",color:e.isUserOnline(t)?"green":"red"}),"@ ",t.name]},t.uid)}))]})}}]),n}(l.a.Component),q=Object(j.b)(null,{setCurrentChannel:E,setPrivateChannel:T})(B),H=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.currentUser;return Object(i.jsxs)(D.a,{size:"large",inverted:!0,vertical:!0,fixed:"left",style:{background:"#43c4c",fontSize:"1.2rem"},children:[Object(i.jsx)(R,{currentUser:e}),Object(i.jsx)(z,{currentUser:e}),Object(i.jsx)(q,{currentUser:e})]})}}]),n}(l.a.Component),W=n(421),G=n(414),K=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.channelName,n=e.numUniqueUsers,a=e.isPrivateChannel;return Object(i.jsx)(W.a,{clearing:!0,children:Object(i.jsxs)(m.a,{as:"h3",floated:"left",fluid:"true",style:{marginBottom:0},children:[Object(i.jsxs)("span",{children:[t,!a&&Object(i.jsx)(b.a,{color:"black",name:"star outline"})]}),Object(i.jsx)(m.a.Subheader,{children:n})]})})}}]),n}(l.a.Component),J=n(261),Z=n.n(J),Q=n(197),X=(n(391),function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={storageRef:k.storage().ref(),uploadTask:null,uploadState:"",percentUploaded:0,message:"",channel:e.props.currentChannel,user:e.props.currentUser,loading:!1,errors:[],emojiPicker:!1},e.handleAddEmoji=function(t){var n=e.state.message,a=e.colonToUnicode(" ".concat(n," ").concat(t.colons));e.setState({message:a,emojiPicker:!1}),setTimeout((function(){return e.messageInputRef.focus()}),0)},e.colonToUnicode=function(e){return e.replace(/:[A-Za-z0-9_+-]+:/g,(function(e){e=e.replace(/:/g,"");var t=Q.b.emojis[e];if("undefined"!==typeof t){var n=t.native;if("undefined"!==typeof n)return n}return e=":"+e+":"}))},e.handleTogglePicker=function(){e.setState({emojiPicker:!e.state.emojiPicker})},e.openModal=function(){return e.setState({modal:!0})},e.closeModal=function(){return e.setState({modal:!1})},e.handleChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.createMessage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n={timestamp:k.database.ServerValue.TIMESTAMP,user:{id:e.state.user.uid,name:e.state.user.displayName,avatar:e.state.user.photoURL}};return null!==t?n.image=t:n.content=e.state.message,n},e.random=function(){Z.a.generate({length:12,charset:"alphabetic"})},e.uploadFile=function(t,n){var a=e.props.messagesRef,s="chat/public/".concat(t.name);e.setState({uploadState:"uploading",uploadTask:e.state.storageRef.child(s).put(t,n)},(function(){e.state.uploadTask.on("state_changed",(function(t){var n=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({percentUploaded:n})}),(function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),uploadState:"error",uploadTask:null})}),(function(){e.state.uploadTask.snapshot.ref.getDownloadURL().then((function(t){console.log(t),e.sendFileMessage(t,a,s)})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),uploadState:"error",uploadTask:null})}))}))}))},e.sendFileMessage=function(t,n,a){n.child(a).push().set(e.createMessage(t)).then((function(){e.setState({uploadState:"done"})})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t)})}))},e.sendMessage=function(){var t=e.props.getMessagesRef,n=e.state,a=n.message,s=n.channel;a?(e.setState({loading:!0}),t().child(s.id).push().set(e.createMessage()).then((function(){e.setState({loading:!1,message:"",errors:[]})})).catch((function(t){console.error(t),e.setState({loading:!1,errors:e.state.errors.concat(t)})}))):e.setState({errors:e.state.errors.concat({message:"Add a message"})})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.errors,a=t.message,s=t.loading,r=t.emojiPicker;return Object(i.jsxs)(W.a,{className:"message__form",children:[r&&Object(i.jsx)(Q.a,{set:"apple",onSelect:this.handleAddEmoji,className:"emojipicker",title:"pick your emoji",emoji:"point_up"}),Object(i.jsx)(C.a,{fluid:!0,name:"message",onChange:this.handleChange,value:a,style:{marginBottom:"0.7em"},label:Object(i.jsx)(x.a,{icon:r?"close":"smile outline",content:r?"Close":null,onClick:this.handleTogglePicker}),ref:function(t){return e.messageInputRef=t},labelPosition:"left",placeholder:"Write your message",className:n.some((function(e){return e.message.includes("message")}))?"error":""}),Object(i.jsx)(x.a.Group,{icon:!0,widths:"2",children:Object(i.jsx)(x.a,{onClick:this.sendMessage,disabled:s,color:"orange",content:"Add Reply",labelPosition:"left",icon:"edit"})})]})}}]),n}(l.a.Component)),Y=n(262),$=n.n(Y),ee=function(e,t){return e.user.id===t.uid?"message__self":""},te=function(e){return e.hasOwnProperty("image")&&!e.hasOwnProperty("content")},ne=function(e){var t,n=e.message,a=e.user;return Object(i.jsxs)(G.a,{children:[Object(i.jsx)(G.a.Avatar,{src:n.user.avatar}),Object(i.jsxs)(G.a.Content,{className:ee(n,a),children:[Object(i.jsx)(G.a.Author,{as:"a",children:n.user.name}),Object(i.jsx)(G.a.Metadata,{children:(t=n.timestamp,$()(t).fromNow())}),te(n)?Object(i.jsx)(O.a,{src:n.image,className:"message__image"}):Object(i.jsx)(G.a.Text,{children:n.content})]})]})},ae=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={privateChannel:e.props.isPrivateChannel,messagesRef:k.database().ref("messages"),messages:[],messagesLoading:!0,channel:e.props.currentChannel,user:e.props.currentUser,numUniqueUsers:"",privateMessagesRef:k.database().ref("privateMessages"),listeners:[]},e.addListeners=function(t){e.addMessageListener(t)},e.addMessageListener=function(t){var n=[];e.getMessagesRef().child(t).on("child_added",(function(t){n.push(t.val()),e.setState({messages:n,messagesLoading:!1}),e.countUniqueUsers(n)}))},e.countUniqueUsers=function(t){var n=t.reduce((function(e,t){return e.includes(t.user.name)||e.push(t.user.name),e}),[]),a=n.length>1||0===n.length,s="".concat(n.length," user").concat(a?"s":"");e.setState({numUniqueUsers:s})},e.displayMessages=function(t){return t.length>0&&t.map((function(t){return Object(i.jsx)(ne,{message:t,user:e.state.user},t.timestamp)}))},e.displayChannelName=function(t){return t?"".concat(e.state.privateChannel?"@":"#").concat(t.name):""},e.getMessagesRef=function(){var t=e.state,n=t.messagesRef,a=t.privateMessagesRef;return t.privateChannel?a:n},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.state,t=e.channel,n=e.user;t&&n&&this.addListeners(t.id)}},{key:"render",value:function(){var e=this.state,t=e.messagesRef,n=e.messages,a=e.channel,s=e.user,r=e.numUniqueUsers,c=e.privateChannel;return Object(i.jsxs)(l.a.Fragment,{children:[Object(i.jsx)(K,{channelName:this.displayChannelName(a),numUniqueUsers:r,isPrivateChannel:c}),Object(i.jsx)(W.a,{children:Object(i.jsx)(G.a.Group,{className:"messages",children:this.displayMessages(n)})}),Object(i.jsx)(X,{messagesRef:t,currentChannel:a,currentUser:s,isPrivateChannel:c,getMessagesRef:this.getMessagesRef})]})}}]),n}(l.a.Component),se=Object(j.b)((function(e){return{currentUser:e.user.currentUser,currentChannel:e.channel.currentChannel,isPrivateChannel:e.channel.isPrivateChannel}}))((function(e){var t=e.currentUser,n=e.currentChannel,a=e.isPrivateChannel;return Object(i.jsxs)(h.a,{columns:"equal",className:"app",style:{background:"#eee"},children:[Object(i.jsx)(f,{}),Object(i.jsx)(H,{currentUser:t},t&&t.uid),Object(i.jsx)(h.a.Column,{style:{marginLeft:210},children:Object(i.jsx)(ae,{currentChannel:n,currentUser:t,isPrivateChannel:a},n&&n.id)}),Object(i.jsx)(h.a.Column,{width:4,children:Object(i.jsx)(p,{})})]})})),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,423)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},ce=(n(392),n(20)),ie=n(106),oe=n(81),le=n(263),ue=n(416),de=n(264),he=n.n(de),je=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,userRef:k.database().ref("users")},e.isFormEmpty=function(e){var t=e.username,n=e.email,a=e.password,s=e.passwordConfirmation;return!t.length||!n.length||!a.length||!s.length},e.isPasswordValid=function(e){var t=e.password,n=e.passwordConfirmation;return!(t.length<6||n.length<6)&&t===n},e.displayErrors=function(e){return e.map((function(e,t){return Object(i.jsx)("p",{children:e.Message},t)}))},e.isFormValid=function(){var t,n=[];return e.isFormEmpty(e.state)?(t={Message:"fill in all fields"},e.setState({errors:n.concat(t)}),!1):!!e.isPasswordValid(e.state)||(t={Message:"password is not valid"},e.setState({errors:n.concat(t)}),!1)},e.handleChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.saveUser=function(t){return e.state.userRef.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.handleSubmit=function(t){t.preventDefault(),e.isFormValid()&&(e.setState({errors:[],loading:!0}),k.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){console.log(t),t.user.updateProfile({displayName:e.state.username,photoURL:"https://robohash.org/".concat(he()(t.user.email),"?d=identicon")}).then((function(){e.saveUser(t).then((function(){console.log("user saved")}))})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),loading:!1})}))})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),loading:!1})})))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.password,s=e.passwordConfirmation,r=e.errors,c=e.loading;return Object(i.jsx)(h.a,{textAlign:"center",verticalAlign:"middle",className:"App",children:Object(i.jsxs)(h.a.Column,{style:{maxWidth:450},children:[Object(i.jsxs)(m.a,{as:"h1",icon:!0,color:"black",textAlign:"center",children:[Object(i.jsx)(b.a,{name:"user secret",color:"black"}),"Register for Shadow Chat"]}),Object(i.jsx)(_.a,{onSubmit:this.handleSubmit,size:"large",children:Object(i.jsxs)(W.a,{stacked:!0,children:[Object(i.jsx)(_.a.Input,{fluid:!0,name:"username",icon:"user",iconPosition:"left",placeholder:"username",value:t,onChange:this.handleChange,type:"text"}),Object(i.jsx)(_.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email",value:n,onChange:this.handleChange,type:"email"}),Object(i.jsx)(_.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",value:a,onChange:this.handleChange,type:"password"}),Object(i.jsx)(_.a.Input,{fluid:!0,name:"passwordConfirmation",icon:"repeat",iconPosition:"left",placeholder:"Password Confirmation",value:s,onChange:this.handleChange,type:"password"}),Object(i.jsx)(x.a,{disabled:c,className:c?"loading":"",color:"black",fluid:!0,size:"large",children:"Submit"})]})}),r.length>0&&Object(i.jsxs)(ue.a,{error:!0,children:[Object(i.jsx)("h3",{children:"ERROR"}),this.displayErrors(r)]}),Object(i.jsxs)(ue.a,{children:[" Already a user? ",Object(i.jsx)(ie.b,{to:"/Login",children:"Login"}),"  "]})]})})}}]),n}(l.a.Component),fe=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",errors:[],loading:!1},e.displayErrors=function(e){return e.map((function(e,t){return Object(i.jsx)("p",{children:e.Message},t)}))},e.handleChange=function(t){e.setState(Object(M.a)({},t.target.name,t.target.value))},e.saveUser=function(t){return e.state.userRef.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.handleSubmit=function(t){t.preventDefault(),e.isFormValid(e.state)&&(e.setState({errors:[],loading:!0}),k.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){console.log(e)})).catch((function(t){console.error(t),e.setState({errors:e.state.errors.concat(t),loading:!1})})))},e.isFormValid=function(e){var t=e.email,n=e.password;return t&&n},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.errors,s=e.loading;return Object(i.jsx)(h.a,{textAlign:"center",verticalAlign:"middle",className:"App",children:Object(i.jsxs)(h.a.Column,{style:{maxWidth:450},children:[Object(i.jsxs)(m.a,{as:"h1",icon:!0,color:"black",textAlign:"center",children:[Object(i.jsx)(b.a,{name:"user secret",color:"black"}),"Login to Shadow Chat"]}),Object(i.jsx)(_.a,{onSubmit:this.handleSubmit,size:"large",children:Object(i.jsxs)(W.a,{stacked:!0,children:[Object(i.jsx)(_.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email",value:t,onChange:this.handleChange,type:"email"}),Object(i.jsx)(_.a.Input,{fluid:!0,name:"password",icon:"lock",iconPosition:"left",placeholder:"Password",value:n,onChange:this.handleChange,type:"password"}),Object(i.jsx)(x.a,{disabled:s,className:s?"loading":"",color:"black",fluid:!0,size:"large",children:"Login"})]})}),a.length>0&&Object(i.jsxs)(ue.a,{error:!0,children:[Object(i.jsx)("h3",{children:"ERROR"}),this.displayErrors(a)]}),Object(i.jsxs)(ue.a,{children:[" Don't have an account? ",Object(i.jsx)(ie.b,{to:"/Register",children:"Register"}),"  "]})]})})}}]),n}(l.a.Component),pe=n(419),me=n(410),be=function(){return Object(i.jsx)(pe.a,{active:!0,children:Object(i.jsx)(me.a,{size:"huge",content:"Preparing chat..."})})},ge=n(89),Oe={currentUser:null,isLoading:!0},ve={currentChannel:null,isPrivateChannel:!1},Ce=Object(oe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return{currentUser:t.payload.currentUser,isLoading:!1};case N:return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1});default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(ge.a)(Object(ge.a)({},e),{},{currentChannel:t.payload.currentChannel});case I:return Object(ge.a)(Object(ge.a)({},e),{},{isPrivateChannel:t.payload.isPrivateChannel});default:return e}}}),xe=Object(oe.createStore)(Ce,Object(le.composeWithDevTools)()),ye=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.isLoading),k.auth().onAuthStateChanged((function(t){t?(e.props.setUser(t),e.props.history.push("/")):(e.props.history.push("/Login"),e.props.clearUser())}))}},{key:"render",value:function(){return this.props.isLoading?Object(i.jsx)(be,{}):Object(i.jsxs)(ce.c,{children:[Object(i.jsx)(ce.a,{exact:!0,path:"/",component:se}),Object(i.jsx)(ce.a,{path:"/Login",component:fe}),Object(i.jsx)(ce.a,{path:"/Register",component:je})]})}}]),n}(l.a.Component),Se=Object(ce.f)(Object(j.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:P,payload:{currentUser:e}}},clearUser:function(){return{type:N}}})(ye));d.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(j.a,{store:xe,children:Object(i.jsx)(ie.a,{children:Object(i.jsx)(Se,{})})})}),document.getElementById("root")),re()}},[[396,1,2]]]);
//# sourceMappingURL=main.c2580a6b.chunk.js.map