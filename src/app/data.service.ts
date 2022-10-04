import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  chatsArray = {
    chats: [
      //chat #6
  {
    name: 'Matt Losam',
    profilePicture: 'assets/imgs/profession/8.jpeg',
    groupName: 'Dil Faraib',
    groupImage: 'assets/imgs/profession/1.png',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60 400w',
    time: '21 hours ago'},
    chatting: [

      {
        id: 3,
        type: 'self',
        msg: 'Hi, Thanks darling 💔',
        time: '10:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [{id: 2, img: 'assets/imgs/status-pic/status-pic-1.avif'},
        {id: 3, img: 'assets/imgs/status-pic/status-pic-2.avif'},],
        video: [],
        profileImg: 'assets/imgs/profession/4.jpeg'
      },
      {
        id: 4,
        type: 'self',
        msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [{id: 3, img: 'assets/imgs/status-pic/status-pic-1.avif'},
        {id: 4, img: 'assets/imgs/status-pic/status-pic-2.avif'},
        {id: 5, img: 'assets/imgs/status-pic/status-pic-3.avif'}],
        video: [],
        profileImg: 'assets/imgs/profession/5.jpeg'
      },

      {
      id: 1,
      msg: 'Hello my friend, Wannt meet tonight?',
      type: 'self',
      time: '4:45PM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Zonis Hales',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/2.jpeg'
    },
    {
      id: 5,
      msg: 'NO Problem Love you babe 💔',
      type: 'other',
      time: '05:44AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/6.jpeg'
    },
    {
      id: 6,
      msg: '😔',
      type: 'other',
      time: '04:04PM',
      readStaus: 'read',
      readStausCount: 3,
      name: 'Alan Bernaby',
      imgs: [],
      video: [],
      youtubeVideo: [],
      profileImg: 'assets/imgs/profession/7.jpeg'
    },
    {
      id: 7,
      msg: 'Hi, baby how are you sweetie? 😀 i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
      type: 'self',
      time: '08:04AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [],
      video: ['assets/video/video-file.mp4'],
      profileImg: 'assets/imgs/profession/8.jpeg'
    },
    {
      id: 8,
      msg: 'Hi, Honey watch this viral video',
      type: 'other',
      time: '06:44AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/9.jpeg'
    },
    {
      id: 9,
      msg: 'i am sending you the pictures album of my beautiful pictures.',
      type: 'other',
      time: '03:56AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [],
      audio: ['https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1'],
      video: [],
      profileImg: 'assets/imgs/profession/10.jpeg'
    },
    {
      id: 2,
      msg: 'Here it is.. enjoy',
      type: 'other',
      time: '9:00AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [{id: 1, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 2, img: 'assets/imgs/status-pic/status-pic-2.avif'},
      {id: 3, img: 'assets/imgs/status-pic/status-pic-3.avif'},
      {id: 4, img: 'assets/imgs/status-pic/status-pic-4.avif'},
      {id: 5, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 6, img: 'assets/imgs/status-pic/status-pic-2.avif'},
      {id: 7, img: 'assets/imgs/status-pic/status-pic-3.avif'},
      {id: 8, img: 'assets/imgs/status-pic/status-pic-4.avif'}],
      video: [],
      profileImg: 'assets/imgs/profession/3.jpeg'
    },
    {
      id: 10,
      msg: ' 👍',
      type: 'self',
      time: '04:04PM',
      readStaus: 'unread',
      readStausCount: 3,
      name: 'Zonis Hales',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/11.jpeg'
    },
    {
      id: 11,
      msg: 'hahahah my dear',
      type: 'other',
      time: 'Yesterday',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Alan Bernaby',
      imgs: [],
      stickerImg: 'assets/imgs/stickers/sticker13.gif',
      video: [],
      profileImg: 'assets/imgs/profession/12.jpeg'
    },
  ]},
  
       {
        name: 'Bonis Burns',
        profilePicture: 'assets/imgs/profession/1.png',
        groupName: 'School Fellow',
        groupImage: 'assets/imgs/profession/7.jpeg',
        readStatus: 'unread',
        onlineStatus: 'online',
        contactNumber: '92 300 8712098',
        statusImage: {
          img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
          time: '34 min ago'
        },
        chatting: [{
          id: 1,
          msg: 'Hello my friend, Wannt meet tonight?',
          type: 'self',
          time: '4:45PM',
          readStaus: 'read',
          readStausCount: 0,
          name: 'Zonis Hales',
          imgs: [],
          video: [],
          profileImg: 'assets/imgs/profession/2.jpeg'
        },
        {
          id: 2,
          msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
          type: 'other',
          time: '9:00AM',
          readStaus: 'read',
          readStausCount: 0,
          name: 'Bonis Burns',
          imgs: [],
          video: [],
          profileImg: 'assets/imgs/profession/3.jpeg'
        },
        {
          id: 3,
          type: 'self',
          msg: 'Hi, Thanks darling 💔',
          time: '10:04AM',
          readStaus: 'read',
          readStausCount: 0,
          name: 'Zonis Hales',
          imgs: [],
          video: [],
          profileImg: 'assets/imgs/profession/4.jpeg'
        },
        {
          id: 4,
          type: 'self',
          msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
          time: '03:56AM',
          readStaus: 'unread',
          readStausCount: 1,
          name: 'Zonis Hales',
          imgs: [],
          video: [],
          profileImg: 'assets/imgs/profession/5.jpeg'
        },
      ]
    },
    //chat #2
    {
      name: 'Susan Miller',
      profilePicture: 'assets/imgs/profession/8.jpeg',
      groupName: 'Meetup Guys',
      groupImage: 'assets/imgs/profession/4.jpeg',
      readStatus: 'unread',
      onlineStatus: 'offline',
      contactNumber: '92 300 8712098',
      statusImage: {img: 'https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80 1740w',
      time: '54 min ago'},
      chatting: [{
        id: 1,
        msg: 'Hello my friend, Wannt meet tonight?',
        type: 'self',
        time: '4:45PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/2.jpeg'
      },
      {
        id: 2,
        msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '9:00AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Susan Miller',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/3.jpeg'
      },
      {
        id: 3,
        type: 'self',
        msg: 'Hi, Thanks darling 💔',
        time: '10:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/4.jpeg'
      },
      {
        id: 4,
        type: 'self',
        msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
        time: '03:56AM',
        readStaus: 'unread',
        readStausCount: 2,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/5.jpeg'
      },
     ]
    },
    //chat #3
    {
      name: 'Alan Bernaby',
      profilePicture: 'assets/imgs/profession/5.jpeg',
      groupName: 'Kammal Londay',
      groupImage: 'assets/imgs/profession/1.png',
      readStatus: 'read',
      onlineStatus: 'online',
      contactNumber: '92 300 8712098',
      statusImage: {img: 'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60 400w',
      time: '1 hour ago'
    },
      chatting: [{
        id: 1,
        msg: 'Hello my friend, Wannt meet tonight?',
        type: 'self',
        time: '4:45PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/2.jpeg'
      },
      {
        id: 2,
        msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '9:00AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/3.jpeg'
      },
      {
        id: 3,
        type: 'self',
        msg: 'Hi, Thanks darling 💔',
        time: '10:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/4.jpeg'
      },
      {
        id: 4,
        type: 'self',
        msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/5.jpeg'
      },
      {
        id: 5,
        msg: 'NO Problem Love you babe 💔',
        type: 'other',
        time: '05:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/6.jpeg'
      },
      {
        id: 6,
        msg: '😔',
        type: 'other',
        time: '04:04PM',
        readStaus: 'read',
        readStausCount: 3,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/7.jpeg'
      },
      {
        id: 7,
        msg: 'Hi, baby how are you sweetie? 😀 i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '08:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/8.jpeg'
      },
      {
        id: 8,
        msg: 'Hi, Honey watch this viral video',
        type: 'other',
        time: '06:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/9.jpeg'
      },
      {
        id: 9,
        msg: 'i am sending you the pictures album of my beautiful pictures.',
        type: 'other',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/10.jpeg'
      },
      {
        id: 10,
        msg: ' 👍',
        type: 'self',
        time: '04:04PM',
        readStaus: 'unread',
        readStausCount: 3,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/11.jpeg'
      },
      {
        id: 11,
        msg: 'Love you sweety 💔 ',
        type: 'other',
        time: '09:23PM',
        readStaus: 'read',
        readStausCount: 4,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/12.jpeg'
      },
    ]},
      //chat #4
      {
      name: 'Lucie Logan',
      profilePicture: 'assets/imgs/profession/10.jpeg',
      groupName: 'Family Group',
      groupImage: 'assets/imgs/profession/1.png',
      readStatus: 'read',
      onlineStatus: 'online',
      contactNumber: '92 300 8712098',
      statusImage: {img: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
      time: '3 hours ago'
    },
      chatting: [{
        id: 1,
        msg: 'Hello my friend, Wannt meet tonight?',
        type: 'self',
        time: '4:45PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/2.jpeg'
      },
      {
        id: 2,
        msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '9:00AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/3.jpeg'
      },
      {
        id: 3,
        type: 'self',
        msg: 'Hi, Thanks darling 💔',
        time: '10:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/4.jpeg'
      },
      {
        id: 4,
        type: 'self',
        msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/5.jpeg'
      },
      {
        id: 5,
        msg: 'NO Problem Love you babe 💔',
        type: 'other',
        time: '05:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/6.jpeg'
      },
      {
        id: 6,
        msg: '😔',
        type: 'other',
        time: '04:04PM',
        readStaus: 'read',
        readStausCount: 3,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/7.jpeg'
      },
      {
        id: 7,
        msg: 'Hi, baby how are you sweetie? 😀 i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '08:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/8.jpeg'
      },
      {
        id: 8,
        msg: 'Hi, Honey watch this viral video',
        type: 'other',
        time: '06:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/9.jpeg'
      },
      {
        id: 9,
        msg: 'i am sending you the pictures album of my beautiful pictures.',
        type: 'other',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/10.jpeg'
      },
      {
        id: 10,
        msg: ' 👍',
        type: 'self',
        time: '04:04PM',
        readStaus: 'unread',
        readStausCount: 3,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/11.jpeg'
      },
      {
        id: 11,
        msg: 'My Money?',
        type: 'other',
        time: '07:10PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/12.jpeg'
      },
    ]},
      //chat #5
      {
      name: 'Patrick Trik',
      profilePicture: 'assets/imgs/profession/5.jpeg',
      groupName: 'Hoooooters',
      groupImage: 'assets/imgs/profession/3.jpeg',
      readStatus: 'read',
      onlineStatus: 'invisible',
      contactNumber: '92 300 8712098',
      statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
      time: '8 hours ago'},
      chatting: [{
        id: 1,
        msg: 'Hello my friend, Wannt meet tonight?',
        type: 'self',
        time: '4:45PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/1.png'
      },
      {
        id: 2,
        msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '9:00AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/2.jpeg'
      },
      {
        id: 3,
        type: 'self',
        msg: 'Hi, Thanks darling 💔',
        time: '10:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/3.jpeg'
      },
      {
        id: 4,
        type: 'self',
        msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/4.jpeg'
      },
      {
        id: 5,
        msg: 'NO Problem Love you babe 💔',
        type: 'other',
        time: '05:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/5.jpeg'
      },
      {
        id: 6,
        msg: '😔',
        type: 'other',
        time: '04:04PM',
        readStaus: 'read',
        readStausCount: 3,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/6.jpeg'
      },
      {
        id: 7,
        msg: 'Hi, baby how are you sweetie? 😀 i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
        type: 'other',
        time: '08:04AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/7.jpeg'
      },
      {
        id: 8,
        msg: 'Hi, Honey watch this viral video',
        type: 'other',
        time: '06:44AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/8.jpeg'
      },
      {
        id: 9,
        msg: 'i am sending you the pictures album of my beautiful pictures.',
        type: 'other',
        time: '03:56AM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/9.jpeg'
      },
      {
        id: 10,
        msg: ' 👍',
        type: 'self',
        time: '04:04PM',
        readStaus: 'unread',
        readStausCount: 3,
        name: 'Zonis Hales',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/10.jpeg'
      },
      {
        id: 11,
        msg: 'i was looking for someone',
        type: 'other',
        time: '04:55PM',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Alan Bernaby',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/11.jpeg'
      },
    ]},
  //chat #7
  {
    name: 'Laura Mate',
    profilePicture: 'assets/imgs/profession/1.png',
    groupName: 'Gupshup world',
    groupImage: 'assets/imgs/profession/10.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '50 min ago'  
  },
    chatting: [{
      id: 1,
      msg: 'Hello my friend, Wannt meet tonight?',
      type: 'self',
      time: '4:45PM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Zonis Hales',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/6.jpeg'
    },
    {
      id: 2,
      msg: 'i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
      type: 'other',
      time: '9:00AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [{id: 1, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 2, img: 'assets/imgs/status-pic/status-pic-2.avif'},
      {id: 3, img: 'assets/imgs/status-pic/status-pic-3.avif'},
      {id: 4, img: 'assets/imgs/status-pic/status-pic-4.avif'},
      {id: 5, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 6, img: 'assets/imgs/status-pic/status-pic-2.avif'},
      {id: 7, img: 'assets/imgs/status-pic/status-pic-3.avif'},
      {id: 8, img: 'assets/imgs/status-pic/status-pic-4.avif'}],
      video: [],
      profileImg: 'assets/imgs/profession/8.jpeg'
    },
    {
      id: 3,
      type: 'self',
      msg: 'Hi, Thanks darling 💔',
      time: '10:04AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Zonis Hales',
      imgs: [{id: 2, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 3, img: 'assets/imgs/status-pic/status-pic-2.avif'},],
      video: [],
      profileImg: 'assets/imgs/profession/3.jpeg'
    },
    {
      id: 4,
      type: 'self',
      msg: 'i am so busy today in my office, i can\'t come today, can you please send me $200 urgently, i ll retun it from my salary.😔',
      time: '03:56AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Zonis Hales',
      imgs: [{id: 3, img: 'assets/imgs/status-pic/status-pic-1.avif'},
      {id: 4, img: 'assets/imgs/status-pic/status-pic-2.avif'},
      {id: 5, img: 'assets/imgs/status-pic/status-pic-3.avif'}],
      video: [],
      profileImg: 'assets/imgs/profession/2.jpeg'
    },
    {
      id: 5,
      msg: 'NO Problem Love you babe 💔',
      type: 'other',
      time: '05:44AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/5.jpeg'
    },
    {
      id: 6,
      msg: '😔',
      type: 'other',
      time: '04:04PM',
      readStaus: 'read',
      readStausCount: 3,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/9.jpeg'
    },
    {
      id: 7,
      msg: 'Hi, baby how are you sweetie? 😀 i fount tasty donunt 🍩 for you. it\'s waiting you at home.',
      type: 'other',
      time: '08:04AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/11.jpeg'
    },
    {
      id: 8,
      msg: 'Hi, Honey watch this viral video',
      type: 'other',
      time: '06:44AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/6.jpeg'
    },
    {
      id: 9,
      msg: 'i am sending you the pictures album of my beautiful pictures.',
      type: 'other',
      time: '03:56AM',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/3.jpeg'
    },
    {
      id: 10,
      msg: ' 👍',
      type: 'self',
      time: '04:04PM',
      readStaus: 'unread',
      readStausCount: 3,
      name: 'Zonis Hales',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/1.png'
    },
    {
      id: 11,
      msg: 'hahahah my dear',
      type: 'other',
      time: 'Yesterday',
      readStaus: 'read',
      readStausCount: 0,
      name: 'Laura Mate',
      imgs: [],
      video: [],
      profileImg: 'assets/imgs/profession/6.jpeg'
    },
  ]},
  //chat #8
  {
    name: 'Faira',
    profilePicture: 'assets/imgs/profession2/8.jpeg',
    groupName: 'Helpful',
    groupImage: 'assets/imgs/profession/2.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '50 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'I am really missing you',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Faira',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession2/8.jpeg'
      },
    ]},
    //chat #9
  {
    name: 'Hemanchal',
    profilePicture: 'assets/imgs/profession2/1.jpeg',
    groupName: 'Motor works',
    groupImage: 'assets/imgs/profession/7.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '50 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'Hello, can i call you.. ??',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Hemanchal',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession2/1.jpeg'
      },
    ]},
    //chat #10
  {
    name: 'Mike form',
    profilePicture: 'assets/imgs/profession2/4.jpeg',
    groupName: 'Filmi World',
    groupImage: 'assets/imgs/profession/8.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '20 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'Hello, can i call you.. ??',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Mike form',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession2/4.jpeg'
      },
    ]},
     //chat #11
  {
    name: 'Hola',
    profilePicture: 'assets/imgs/profession2/8.jpeg',
    groupName: 'Gossips',
    groupImage: 'assets/imgs/profession/7.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '20 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'Get yourself ready man..',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Hola',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession2/8.jpeg'
      },
    ]},
     //chat #12
  {
    name: 'Mishi gon',
    profilePicture: 'assets/imgs/profession2/7.png',
    groupName: 'Hopeless',
    groupImage: 'assets/imgs/profession/3.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '20 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'Hello, can i call you.. ??',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Mishi gon',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession2/7.png'
      },
    ]},
     //chat #13
  {
    name: 'Ishita',
    profilePicture: 'assets/imgs/profession/1.png',
    groupName: 'World populr',
    groupImage: 'assets/imgs/profession/9.jpeg',
    readStatus: 'read',
    onlineStatus: 'invisible',
    contactNumber: '92 300 8712098',
    statusImage: {img: 'https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80%201170w',
    time: '20 min ago'  
  },
    chatting: [
      {
        id: 11,
        msg: 'I am coming tonight',
        type: 'self',
        time: 'Yesterday',
        readStaus: 'read',
        readStausCount: 0,
        name: 'Mike form',
        imgs: [],
        video: [],
        profileImg: 'assets/imgs/profession/1.png',
      },
    ]},
  ]
};
//Calls
callsArray = [
  {
    id: 1,
    name: 'Emiley Ami',
    time: '02: 33AM',
    callType: 'audio',
    callStatus: 'missed',
    callStatusText: 'Missed call',
    callStatusCount: '2',
    img: 'assets/imgs/profession/12.jpeg'
  },
  {
    id: 2,
    name: 'Rozzah',
    time: '01: 02PM',
    callType: 'video',
    callStatus: 'recieved',
    callStatusText: 'Call Recieved',
    callStatusCount: '0',
    img: 'assets/imgs/profession/11.jpeg'
  },
  {
    id: 3,
    name: 'Puck john',
    time: '12: 02AM',
    callType: 'audio',
    callStatus: 'missed',
    callStatusText: 'Missed call',
    callStatusCount: '2',
    img: 'assets/imgs/profession/10.jpeg'
  },
  {
    id: 4,
    name: 'Zorda Shah',
    time: '08: 02PM',
    callType: 'video',
    callStatus: 'recieved',
    callStatusText: 'Call Recieved',
    callStatusCount: '0',
    img: 'assets/imgs/profession/9.jpeg'
  },
  {
    id: 5,
    name: 'Guccu Bran',
    time: '09: 22PM',
    callType: 'audio',
    callStatus: 'missed',
    callStatusText: 'Missed call',
    callStatusCount: '2',
    img: 'assets/imgs/profession/8.jpeg'
  },
  {
    id: 6,
    name: 'Bernard Ponting',
    time: '01: 55PM',
    callType: 'video',
    callStatus: 'missed',
    callStatusText: 'Call Recieved',
    callStatusCount: '0',
    img: 'assets/imgs/profession/7.jpeg'
  },
  {
    id: 7,
    name: 'Pony Mike',
    time: '12: 02AM',
    callType: 'audio',
    callStatus: 'recieved',
    callStatusText: 'Call Recieved',
    callStatusCount: '0',
    img: 'assets/imgs/profession/6.jpeg'
  },
  {
    id: 8,
    name: 'Zorda Shah',
    time: '08: 02PM',
    callType: 'video',
    callStatus: 'missed',
    callStatusText: 'Call Missed',
    callStatusCount: '1',
    img: 'assets/imgs/profession/5.jpeg'
  },
  {
    id: 9,
    name: 'Emiley Ami',
    time: '02: 33AM',
    callType: 'audio',
    callStatus: 'missed',
    callStatusText: 'Missed call',
    callStatusCount: '2',
    img: 'assets/imgs/profession/4.jpeg'
  },
];
statuses = [
  {
    id: 1,
    profileImg: 'assets/imgs/profession/2.jpeg',
    name: 'Emily',
    time: '20 min ago'
  },
  {
    id: 2,
    profileImg: 'assets/imgs/profession/1.png',
    name: 'Diana',
    time: '4 min ago'
  },
  {
    id: 3,
    profileImg: 'assets/imgs/profession/6.jpeg',
    name: 'Zumair',
    time: '9 min ago'
  },
  {
    id: 4,
    profileImg: 'assets/imgs/profession/7.jpeg',
    name: 'Roshan',
    time: '4 hours ago'
  },
  {
    id: 5,
    profileImg: 'assets/imgs/profession/8.jpeg',
    name: 'Christan',
    time: '45 min ago'
  },
  {
    id: 6,
    profileImg: 'assets/imgs/profession/9.jpeg',
    name: 'Benz',
    time: '23 min ago'
  },
  {
    id: 7,
    profileImg: 'assets/imgs/profession/10.jpeg',
    name: 'Alisha',
    time: '9 hour ago'
  },
  {
    id: 8,
    profileImg: 'assets/imgs/profession/11.jpeg',
    name: 'Dougan',
    time: '6 hour ago'
  },
  {
    id: 9,
    profileImg: 'assets/imgs/profession/12.jpeg',
    name: 'Alexa',
    time: '9 hour ago'
  },
  {
    id: 10,
    profileImg: 'assets/imgs/profession/8.jpeg',
    name: 'Bilawal',
    time: '6 hour ago'
  }
];
shareMedia = [
  {
    name: 'Henry',
    status: 'Live a happy life',
    img: 'assets/imgs/profession/1.png'
  },
  {
    name: 'Chirstopher',
    status: 'If you do what you always did, you will get what you always got',
    img: 'assets/imgs/profession/2.jpeg'
  },
  {
    name: 'Matt Losam',
    status: 'Hope you will be happy',
    img: 'assets/imgs/profession/6.jpeg'
  },
  {
    name: 'Zonis Hales',
    status: 'Get tasks all time',
    img: 'assets/imgs/profession/14.jpeg'
  },
  {
    name: 'Soma yaris',
    status: 'Nice to meet you',
    img: 'assets/imgs/profession/3.jpeg'
  },
  {
    name: 'Ross Taylor',
    status: 'If you are not willing to risk the usual you will have to settle for the ordinary',
    img: 'assets/imgs/profession/15.jpeg'
  },
  {
    name: 'Neelum',
    status: 'At the end we all die',
    img: 'assets/imgs/profession/16.jpeg'
  },
  {
    name: 'Shin Shan',
    status: 'If you are not willing to risk the usual you will have to settle for the ordinary',
    img: 'assets/imgs/profession/17.jpeg'
  },
  {
    name: 'Hopes',
    status: 'If you are not willing to risk the usual you will have to settle for the ordinary',
    img: 'assets/imgs/profession/4.jpeg'
  },
  {
    name: 'Hugo bog',
    status: 'If you are not willing to risk the usual you will have to settle for the ordinary',
    img: 'assets/imgs/profession/12.jpeg'
  },
];
participants = [
  {
    name: 'Jumana',
    img: 'assets/imgs/profession/1.png'
  },
  {
    name: 'Sahir',
    img: 'assets/imgs/profession/5.jpeg'
  },
  {
    name: 'Lodhi',
    img: 'assets/imgs/profession/3.jpeg'
  }
];

private subject = new Subject<any>();
private subjectSearch = new Subject<any>();

  constructor() { }
    //Set Observables
  //set store data for side menu
  setObservable(text){
    this.subject.next(text);
  }
  getObservable():Observable<any>{
    return this.subject.asObservable();
  }
  //set searchValue obervable
  setSearchObservable(text){
    this.subjectSearch.next(text);
  }
  getSearchObservable():Observable<any>{
    return this.subjectSearch.asObservable();
  }
}
