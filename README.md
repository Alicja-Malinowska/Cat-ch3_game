# [CAT-CH3](https://alicja-malinowska.github.io/Cat-ch3_game/) - A match-3 game full of kitties!


This is a match-3 style game written using HTML Canvas and JavaScript. The goal of the game is to match enough tiles to clear the pink background. The background under each tile is cleared when a tile is matched with at least 2 other tiles of the same kind. The tiles then disappear, background behind them gets cleared, tiles above them fall down and new tiles are added from the top to fill all rows and columns. The match attempt is made by clicking one tile and then another(adjacent) for them to swap places, if in result of that there is at least one match (a row of at least 3 tiles with the same symbol), the matching tiles are destroyed. Each destroyed tile is worth 10 points. There is a limited number of moves in which a player has to clear the board. The game is over when the board is clear (win), when a player runs out of moves or if there are no valid moves to make (it is impossible to make a match by swapping any tiles on the board) (lose).


#### External user’s goal:

The users are people who want to play a simple and fun game, either on their mobile, tablet or desktop. The game is especially aimed for people who like cats, but other players should find it enjoyable as well. 

#### Site owner's goal:

The site owner's goal is to play an enjoyable game, share it with others and spread the love for cats!

 
## UX

The target audience for this application are mobile phone users. The game is simple so it is expected to be played on a mobile device when a user wants quick entertainment to which does not have to commit a lot of time. For example, to play on a bus, during lunch break etc. For this reason, the size of the game is designed to fit in a mobile device screen and take up the majority of it. However, the game can be played on any device. 

The cat theme is there to make the game more funny and it is mostly targeted at the people who like cats and/or are frequent users of websites with memes etc, which are full of funny cats. 

The name of the game was designed to be a word play, as the type of the game is match-3, but the theme is cats, which you should 'catch' on the board to win. 

This is a single page application with a simple design, so that the game window is the most important part of the website. The user can immediately start playing the game or they may choose to read the intructions first. The instructions are available at any stage of the game. It is also easy and straight-forward to restart the game or start a new one after finishing. 

### User stories

* As a player I want to have instructions always available so I can refer to them at any stage of the game
* As a player I want to see a 'Play' button so I can start the game whenever I am ready
* As a mobile user I want to have the game area fill most of my screen so the game is big enough for me to play comfortably
* As a player I want to to be able to click the tiles so I can move them
* As a player I want to see a move couter so I know how many moves I have left
* As a player I want to see a point counter so I know how many points I have earned
* As a player I want to have a 'new game' button so I can restart the game
* As a player I want to see a 'game over' screen so that I know that I lost
* As a player I want to see a 'winning' screen so that I know that I won
* As a player I want to see a 'Play again' button when I finish the game so that I can start a new game


### Wireframes/mockups

These are the mockups for the started game:

![mobile game](https://github.com/Alicja-Malinowska/Cat-ch3_game/blob/master/mockups/mobile_game.png) ![tablet game](https://github.com/Alicja-Malinowska/Cat-ch3_game/blob/master/mockups/tablet_game.png)

![desktop game](https://github.com/Alicja-Malinowska/Cat-ch3_game/blob/master/mockups/desktop_game.png)

All the wireframes can be found in the [mockups folder](https://github.com/Alicja-Malinowska/Cat-ch3_game/tree/master/mockups).


## Features

All the features were added to make the navigation simple and intuitive, and the experience - engaging and enjoyable. 

 
### Existing Features

#### Layout

* Layout - the layout is designed in the way that the game screen is always the most important and eye-catching element. On mobiles it takes the vast majority of the screen space. A button that opens modal with instructions is either at the bottom of the screen (for taller mobiles) or on the top right (for shorter mobiles) - this assures that the button is visible straight away for the user and there is no need to scroll down (which could mean that the user misses it altogether). On tablets that are not wider than 767px the screen is vertically centered and the button is available to click and show the instructions. On tablets of 768px or wider the game screen is in the top half on the screen and the instructions - in the bottom. This alignment is set for all the taller devices with the height of at least 1025px. On desktops (more generally, devices that are wide and not as tall) the instructions are on the left half of the screen and the game screen is on the right. 
* Instructions - they are available to the user during the whole time they visit the webpage. In the mobile view they can be viewed by clicking "How to play" button and on desktop they are visible to the user to the left of the game screen, regardless the state of the game.
* "How to play" button - this is available on the small and medium screens. Once the button is clicked a modal with instructions appear. This allows a user to read instructions on every stage. The instructions are easily available and they are unlikely to be missed. 
* Modal with the instructions - this allows a user to access the instructions whenever they want to and it does not require the user to leave the game or have to look for the instructions by scrolling down etc. The modal can be closed using the 'x' on the right top corner or the 'OK' button at the bottom. This lets the user close the modal as soon as it is opens, and at the same time does not require the user to go back up after reading all the instructions.

#### Game

* "Play" button - this button appears together with the starting screen and when clicked, it triggers a start of the game. When the game is started, the button changes to "New game" which resets the game without going back to the start screen. This button can be clicked at any time to discard the previous game and start a new one. When the game is finished, the button changes to 'PLAY AGAIN' and when clicked, brings the player to the starting screen. 
* Animation - whenerver there is a match (either initially when the game is first created, or later as a result of user's action), the matched icons disappear (after a short delay, so the user can see the actual match) and the icons above fall down. This animation was implemented to gove the user most natural experience and so that the user can easily understand what happens on the board (as opposed to e.g. 'magically' disappearing and appearing icons). The animation is also implemented when the icons are swapped.
* Cell highlight - when an icon (or the area around it) is clicked, the cell containing it is highlighted (a sqaure a bit smaller than the cell is drawn). This allows the user to see which icon they selected by clicking on it. When the selected icon is clicked again, the higlight disappears to inform the user than this is no longer selected. If one cell is highlighted and the user clicks another one which is not adjacent, the higlight is removed from the first one and added to the second one. This informs the user that two icons that are not adjacent cannot be selected. When the user clicks two adjacent icons, the animation is triggered and the highlight is removed from both of the cells to indicate that the action has been completed and the new selection needs to be made.
* Resloving - when the matches are made, they are removed from the board and the empty spaces are filled with the new icons. For this short time, the user is not able to swap the icon, which is indicated by the lack of highlights when clicking.
* Swapping - when the user click two adjacent icons, they are swapped. If there is a match created by this action, the matched icons disappear and the resolving starts. Otherwise, the icons swap back to inform the user that this was not a valid swap to make.
* Pink background - when the game starts the backgrund of the game board is pink. When the match is made by the user, the background disappears under the icons that were included in the match. The background does not disappear under the matched that were not directly created by the user, which makes the game more challenging and a little less dependent on luck. When all the background is eliminated the game is won.
* Moves - user has 20 moves to win the game, otherwise they lose. Only valid moves count in this case, so the ones that create at least one match. If the user swaps icons and they swap back, this is not counted as move and it does not decrease the number of moves. The number of moves is visible to the user as soon as the game is started (this is located below the game board, to the left).
* Points - user gets 10 points for each icon in a match that was created as a direct result of the user action. If other matches follow, the points are not counted for these. If an icon makes more than one match, the points are counted for each time it makes a match, which is a bonus for creating a 'clever' match. The points are visible to the user as soon as the game is started (this is located below the game board, to the right).
* Potential valid moves - the game checks if there are any possible valid moves to make (moves that would result in a match). If this is not the case, the game is over. 
* Win - if the user managed to remove the whole pink background in 20 moves or less, it is a win and the game is over.
* Lose - if the user did not manage to remove the whole pink background and ran out of move, it is a lose, and the game is over.
* Game over - regardless the reason the game is over, when it is, initially the game board will fade and a short message will appear together with "Wait fo it..." message. After that, a gif or an image will be loaded with a message about the game result and "Wanna play again?" message. The interim screen is needed to tell the user that something is going to happen and they should wait, otherwise they might miss it. The delay is caused by fetching the resource from an API and drawing it using an external library, so not much can be done to accelerate the process. 
* Game over messages - the messages inform the user of the outcome of the game:
    - win - interim screen: "YAY!"; final screen: "You win!"
    - lose - interim screen: "OH NO!"; final screen: "You lost!"
    - no more valid moves - interim screen: "UPS..."; final screen: "No more possible valid moves"


### Features Left to Implement

* Levels - create more levels to keep the player engaged
* Options :
    - difficulty levels - implement different difficulty levels with less moves, more types of tiles, different grid etc.
    - different modes - e.g. instead of number of moves, there is time frame in which the game has to be finished, or a certain amount of points should be achieved
* Extras - implement extra bonuses as a reward for more than 3 icons matched, e.g. getting a move back or being able to detstroy a chosen icon
* Point ranking to be able to compare results either to the past results or to the results of friends


## Technologies Used

* Java Script
* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/) - used for the responsive design, collapsable navbar, modals and collapsed text
* [Visual Studio Code](https://code.visualstudio.com/) - an IDE used to write the code
* [Git](https://git-scm.com/) - used for version control
* [Gifler](http://themadcreator.github.io/gifler/) - a libary used to make gifs work on HTML5 Canvas



## Testing

### Automated testing



### Manual testing 

#### Features testing




#### Browser support



#### Responsive design



#### Accessibility



#### Peer code review



## Deployment

### How to run this project locally





## Credits

### Content


### Tools used
* [Balsamiq](https://balsamiq.com/) - used to create wireframes


### Media
* [Cat icons](https://www.iconfinder.com/) 
* [Images used to create the start screen](https://pixabay.com/)
* [Font](https://www.fontsc.com/)
* [The background cat wallpaper](https://www.publicdomainpictures.net/en/index.php)
* [Cats as a service](https://cataas.com/#/) - an API that is a source of cat images and gifs loaded in the game over screens
* [Crying cat photo](https://www.flickr.com/)

### Acknowledgements


