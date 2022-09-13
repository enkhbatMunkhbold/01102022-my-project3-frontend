# World of Movies

## Description

I always dreamt to build perfect, shiny movie-search app. After learning React, I wanted to try my new skills by building **World of Movies** app. The app helps user to search any movie he/she wants to learn about and creates a list of movies, that been searched. User can sort the list of movies by genre, or make favorite/unfavorite movie by clicking on a heart symbol or remove the movie from the list. Also, user can learn about a movie more, by clicking on 'Learn More.' User even can create and insert user's own movie info into the list, by going to 'Create Movie' page. Then user can share the movie list through social media such like Facebook or Twitter. That way it gives people a chance to learn about some movies that doesn't exist in the Internet. 

## Table Of Contents

- [Work Environment](#work-environment)
- [Search Movies](#search-movies)
- [Create A Movie](#create-a-movie)
- [Sort The Movies By Genre](#sort-the-movies-by-genre)
- [Delete A Movie](#delete-a-movie)
- [Demo](#demo)

## Work Environment

The app uses Open Movie Database API to fetch a movie that an user searches. 
It also works using local and internet url addresses:
- local - <http://localhost:3000>  
- internet - <https://idyllic-dolphin-bd7a83.netlify.app>. 

## Search Movies

When a user inputs a movie name into the search bar, it takes the movie title and sends a query to the database.  
There will appear the alert messages according to the responds from the database.
- "A movie you're searching is not fount!" 
- "This movie is already exists in the list."
- "A movie was successfully added to the list!"  

## Create A Movie

If the user wants to insert a new movie, that doesn't exist in the list or even in Open Movie Database, then he/she can create data about that movie, with posture, post, genre list and other information about the movie. When user clicks on the button 'Create Movie' it creates and adds the movie to the list.  

## Sort The Movies By Genre

If user wants to see the movies of certain genre, then should click on the menu button, which is on the top left corner of the screen. Then, drop down menu will appear and show the list of genres. A user can select the genre, to see the movies of that genre, then the app will display the movies of that genre.  

## Delete A Movie

If the user want to remove the movie from the list of searched movies, then he/she would click on trash can symbol of a particular movie, which is on the bottom right corner of every movie, and the movie will disappear from the list, will be removed from the backend as well. 

## Demo

![World of Movies](https://user-images.githubusercontent.com/33409864/189276886-c845b389-a5e1-4852-963b-ba47f044af1f.gif)
