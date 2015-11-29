$(document).ready(function() {

'use strict';

var cardSide = 'front';
var tempCardSide = cardSide;
var swapText = 'Show backs';
var questionOrAnswer = 'Answer';
var currentCard;

var randomCard = function(cardStack) {
    var randIndex = Math.floor(Math.random() * cardStack.length);
    return cardStack[randIndex];
};

var nextCard = function() {
    tempCardSide = cardSide;
    currentCard = randomCard(commands);
    $('.card-text').text(currentCard[cardSide]);
    questionOrAnswer = 'Answer';
    $('.flip-card').text(questionOrAnswer);
};

var flipCard = function() {
    tempCardSide = (tempCardSide === 'front') ? 'back' : 'front';
    $('.card-text').text(currentCard[tempCardSide]);
    questionOrAnswer = (questionOrAnswer === 'Answer') ? 'Question' : 'Answer';
    $('.flip-card').text(questionOrAnswer);
};

var swapSides = function() {
    cardSide = (cardSide === 'front') ? 'back' : 'front';
    tempCardSide = cardSide;
    swapText = (swapText === 'Show backs') ? 'Show fronts' : 'Show backs';
    $('.swap-sides').text(swapText);
    $('.card-text').text(currentCard[cardSide]);
    questionOrAnswer = (questionOrAnswer === 'Answer') ? 'Question' : 'Answer';
    $('.flip-card').text(questionOrAnswer);
};

$('.next-card').on('click', function() {
    nextCard();
});

$('.flip-card').on('click', function() {
    flipCard();
});

$('.swap-sides').on('click', function() {
    swapSides();
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

nextCard();

$('.swap-sides').text(swapText);

});