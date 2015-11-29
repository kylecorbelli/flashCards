$(document).ready(function() {

'use strict';

var cardSide = 'front';
var currentCard;

var randomCard = function(cardStack) {
    var randIndex = Math.floor(Math.random() * cardStack.length);
    return cardStack[randIndex];
};

var nextCard = function() {
    currentCard = randomCard(commands);
    $('.card-text').text(currentCard[cardSide]);
};

var flipCard = function() {
    cardSide = (cardSide === 'front') ? 'back' : 'front';
    $('.card-text').text(currentCard[cardSide]);
};

$('.next-card').on('click', function() {
    nextCard();
});

$('.flip-card').on('click', function() {
    flipCard();
});

var commands = [
    {front: 'pwd', back: 'print working directory'},
    {front: 'hostname', back: 'my computer\'s network name'},
    {front: 'mkdir', back: 'make directory'},
    {front: 'cd', back: 'change directory'},
    {front: 'ls', back: 'list directory'},
    {front: 'rmdir', back: 'remove directory'},
    {front: 'pushd', back: 'push directory'},
    {front: 'popd', back: 'pop directory'},
    {front: 'cd', back: 'copy a file or directory'},
    {front: 'mv', back: 'move a file or directory'},
    {front: 'less', back: 'page through a file'},
    {front: 'cat', back: 'print the whole file'},
    {front: 'xargs', back: 'execute arguments'},
    {front: 'find', back: 'find files'},
    {front: 'grep', back: 'find things inside files'},
    {front: 'man', back: 'read a manual page'},
    {front: 'apropos', back: 'find what man page is appropriate'},
    {front: 'evn', back: 'look at your environment'},
    {front: 'echo', back: 'print some arguments'},
    {front: 'export', back: 'export/set a new environment variable'},
    {front: 'exit', back: 'exit the shell'},
    {front: 'sudo', back: 'become super user root'},
    {front: 'chmod', back: 'change permission modifiers'},
    {front: 'chown', back: 'change ownership'}
];

});