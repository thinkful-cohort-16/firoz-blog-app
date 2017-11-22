'use strict';


const { DATABASE } = require('../config');
const knex = require('knex')(DATABASE);

// knex('stories')
//   .insert(
//     {
//       title: "What the government doesn't want you to know about cats",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elite", 
//     })
//   .then(console.log);

knex('stories')
.whereNotNull('title')
.del();
/*
knex('stories)
.insert(
 [
  {
    "title": "What the government doesn''t want you to know about cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "The most boring article about cats you''ll ever read",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "7 things lady gaga has in common with cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "The most incredible article about cats you''ll ever read",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "10 ways cats can help you live to 100",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "9 reasons you can blame the recession on cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "10 ways marketers are making you addicted to cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "11 ways investing in cats can make you a millionaire",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "title": "Why you should forget everything you learned about cats",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
 ]
)
*/