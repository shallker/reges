/*
  A list of regular expression collection.
  Starts with dummy.
*/

// exports.url = /[a-zA-z]+:\/\/[^\s]*/;

exports.url = /^(http|https|ftp|)+:\/\/\S+/;

exports.http = /^http:\/\/\S+/;

exports.https = /^http:\/\/\S+/;

exports.email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

// exports.username = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;

exports.username = /^[a-z0-9_-]{3,18}$/;

exports.password = /^[a-z0-9_-]{3,18}$/;

exports.chinese = /[\u4e00-\u9fa5]/;
