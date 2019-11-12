# Psychological testing centre for drivers - [PSYCHOTEST](https://alicja-malinowska.github.io/Milestone1/)


This is a website for a testing centre, based in Poland, that provides psychological assessments for drivers (mainly), as well as other professions. The purpose of the webiste is to inform potential clients about the services that are provided and to convince them to choose PSYCHOTEST over the competition. 

The website is available in two languages: Polish and English, so foreigners living and working in Poland are also able to learn about the services and the possibility to have the tests done in English. The website is dedicated mostly for individual clients, but it also contains information for GP surgeries and companies who would like to use the services for occupational medicine purposes. 


#### External user’s goal:

The site users are people who need (or want) psychological assessment, and wish to learn more about it and possibly book an appointment. 

#### Site owner's goal:

The business owner wants to inform potential clients about the services/types of psychological tests they provide, as well as encourage them to choose PSYCHOTEST over the competition.  

### Context

The psychological testing is mandatory for some drivers in Poland (unlike in Ireland, UK and most of other European countries). Generally, the obligation for psychological assessment comes from two sources: Occupational Medicine Act and Road Transport Act. Simplifying, everyone who drives for professional purposes needs to have regular psychological assessments. Additionally, everyone who wants to obtain a driving license for categories other than A and B, is required to submit a psychological opinion (which is a result of psychological testing). Similarly, those with revoked driving license have to be psychologically assessed before they can get their license back. 

Additionally, psychological assessment is mandadory for people working with other mechanical vehicles, like forklifts and road rollers. Another group that is required to undergo psychological testing is those who apply for or want to renew their firearm license. 

The rationale for psychological assessments for drivers is derived from Traffic Pyschology, a discipline of psychology that focusses on the links between cogntitive/psychological abilities/qualities and road behaviours. More on the subject can be found on [this Wikipedia page](https://en.wikipedia.org/wiki/Traffic_psychology#Psychological_assessment,_counseling,_and_rehabilitation). 

 
## UX

The majority of the users will be individuals who are mandated to undergo a psychological assessment and submit psychological opinion of their fitness to drive a mechanical vehicle (or in some cases - fitness to carry a firearm). Therefore, the question they will be asking will not be 'IF' they should choose to use the services, but rather 'WHICH' place they should choose. 

People usually find psychological assessment stressful, as they are not sure what to expect. For this reason, the webiste is designed in the way to:

  1. Assure the potential client that eery effort will be made to reduce the stress
  2. Reduce the anxiety by giving as much information as possible about what they can expect during the assessment and how they should prepare

Other motivations of the individual clients are:

  1. Have the tests done as quickly as possible
  2. Have flexibility with booking (e.g evenings, weekends)

The smaller group of users will be GP surgeries and companies who want to offer the tests to their patients/employees as a part of occupational medicine practice. Their main goal will be to find out the details about potential cooperation between them and PSYCHOTEST. They will also be interested to get the best prices.

There will also be a very small group of users interested in having the psychological assessment for other reasons, without being obligated to do them. They will want to know what kind of tests they can have.

### User stories

* As an indivdual client I want to have a navigation item that will take me to the page that explains how the test is done
* As an indivdual client I want to just touch the number on my mobile so I am able to immediately call and book an appointment
* As an indivdual client I want to be able to click a link to the Google reviews so I can see what other people say about the service
* As an indivdual client I want to be able to fill out a form so I can ask a question or book an appointment 
* As an indivdual client I want to have a navigation item that will take me to the pages with services so I can see if the company provides the services I need/want to use
* As an indivdual client I want to see a Google map so I can check the location of the business
* As an indivdual client I want to have a button on each page that will take me to the contact page so when I decide to book an appointment after reading a relevant peace of information I can instantly get in touch
* As an indivdual client I want to have a navigation item that will take me to the price list so I can compare it with other places
* As a GP surgery/company I want to have a separate navigation item that takes me to the page with all the relevant information so I can quickly find out how I can use the services for groups
* As a GP surgery/company I want to be able to download a service agreement template so I can find out the proposed rules o cooperation and fill it out electronically 
* As a GP surgery/company I want to be able to download a referral template so I do not need to create my own documents when sending people for tests
* As a user I want to have a navigation item that takes me to all the contact details
* As a user I want to have a navigation item that will take me to the about section so I can learn more about the company
* As an English speaking individual client I want to have a button that switches the language to English so I can understand the information presented on the webiste

The page navigation is designed to be intuitive and enable a user to find the information they look for quickly. The design offers a user multiple places from where they can get in touch and ask questions/book appointments as this is the most important purpose of the website (next to its informative function). The chosen iconography, typography, images and colours are meant to create an impression of a professional but also a friendly place. The logo of the company is in a shade of blue and other colours were chosen to match it, using an online tool [Mycolor](https://mycolor.space/)


### Wireframes/mockups

These are the mockups for the homepage:

![mobile home](https://github.com/Alicja-Malinowska/Milestone1/blob/master/mockups/mobile-home-page.png)
![tablet home](https://github.com/Alicja-Malinowska/Milestone1/blob/master/mockups/tablet-home.png)
![desktop home](https://github.com/Alicja-Malinowska/Milestone1/blob/master/mockups/desktop-home.png)

All the wireframes can be found in the [mockups folder](https://github.com/Alicja-Malinowska/Milestone1/tree/master/mockups).

#### Differences between wireframes and the website

* Wireframes were designed as a multi-page website, however after the discussion with my mentor this was changed to a single scrollable website 
* The language buttons were moved from the content of the page to the navigation bar for better user experience on the scrollable website
* Review link added to the homepage, not only the footer, since with the scroll design this would be only visible to the user once they have reached to the bottom of the page
* Pricing section - expandable boxes also applied on the desktop, not only mobile/tablet, since the description text is quite long and it would make page overloaded with text, which could negatively influence UX
* Contact section - map situated below the address rather than next to it in mobile view - makes it more readible 
* Footer - removed the reviews link from the mobile view as it makes it overloaded with content and this is already available on the home page to click

## Features

All the features were added to enhance the UX and make using the website easy to use.
 
### Existing Features
*	Fixed navigation bar – allows a user to navigate through the website quickly without the necessity to go back to the top of the page
* Logo - when clicked on takes a user tot he top of the page (this is a common practice so a user will expect to be able to to this)
*	Flag buttons – allow a user to switch between Polish and English language
*	Link to the reviews on the first page – allows a user to immediately be able to go to Google page and see the reviews (this opens in a new tab)
*	Booking button on the first page – allows a user to immediately get in touch by filling out a contact form that comes up in the form of a modal, which keeps the user in the same location on the page rather than taking them right to the bottom of the page where the contact section is.
*	An arrow button at the bottom of the landing view (and in the What to Expect section) – informs a user that there is more content in the section and takes them to it when clicked
*	Book now/More buttons on each service card – give every user an easy way to get in touch/quickly get to the section that describes the test, while being focussed only on the content that is of interest
*	A phone number as a link/button – this allows users (mobile users in particular) to easily dial the number by just clicking/touching
*	Download icons – allow a user to download documents templates (depending on the language version the titles of the files are in English or Polish)
*	Pricing categories with expandable details – allows a user to easily find information about prices without being overloaded with the description text and find out more details about the section that is of interest by clicking and expanding it
*	An email address as a link/button – allows a user to immediately send an email by just clicking/touching it (this will open a new email window) – no need to copy and paste the address
*	An embedded Google map – shows the location of the centre and allows a user to look for directions directly from the website
*	A contact form – gives a user a third option (aside from calling or emailing) to get in touch. When submitted correctly it displays a success message.
*	A Facebook icon button – send a user to the company’s FB page where they can see news/announcements
* The landing page is English - this is because the page is created for educational purposes and most of the people using it (assessor, mentor, reviewing peers) are English speakers. In reality, the landing page would be in Polish as most of the users of the page would be Polish speakers.


### Features Left to Implement

* Add a blog page where updates or new articles can be published (this will enhance SEO)
* Add a feature that detects user's set language (EN or PL) and displays the page in this language (if not PL, shows in EN)

## Technologies Used

* HTML
* CSS
* jQuery
* [Bootstrap](https://getbootstrap.com/) - used for the responsive design, collapsable navbar, modals and collapsed text
* [Visual Studio Code](https://code.visualstudio.com/) - an IDE used to write the code
* [Git](https://git-scm.com/) - used for version control
* [Font Awesome](https://fontawesome.com/) - all the icons on the website 


## Testing

### Automated testing

* [W3 HTML validator](https://validator.w3.org/) was used on both html files. There was an error pointing to the same id's in the form in the contact section and the form in the modal. The id's' names in the modal have been changed. Another error was an illegal character ("|") in the link to Google Fonts (the link was generated from there). To fix this I removed the link from the head and added @import in the CSS file. Since there are four html files and one CSS file this is a better solution. 

* [W3 CSS validator](https://jigsaw.w3.org/css-validator/) was used to check the CSS file. No errors were found. 

### Manual testing 

#### Features testing

* All the navigation links take a user to the assigned section.
* When the logo is clicked the page scrolls to the top.
* When Polish flag is clicked, a Polish version is displayed. When British flag is clicked, an English version is displayed.
* Book now button opens a modal with a contact form. When the sumit button is pressed on an empty form an error message appears. Similarly if any of the fields is empty (all are rquired) or when email address doesn't have a proper format (no @). The form in the Contact section behaves simiarly. When it is sumitted correctly, the modal closes.  
* The reviews link opens in a new tab and takes a user to a Google page containing the reviews.
* When the arrow-down icon is clicked on the homepage it takes a user to the further part of the section (similarly in What to Expect section).
* More about button on the cards takes a user to What to Expect section where they can read more about the test
* The phone link/icon when touched on mobile or tablet dials the number. On desktop it is possible to open it using several applications (e.g. Skype -  dependant on the individual user settings).
* When download icons are clicked/touched a file is being downloaded.
* When arrows in the pricing sections are clicked they expand and reveal more details about the price category.
* When the email address/icon is clicked/touched a new email message opens (or suggested apps to open it with - dependant on the individual user settings)
* When the contact form in the 'Contact' section is completed and submitted correctly a success page appears. This was not implemented with the modal because it would defeat the whole purpose of the modal for UX.
* When Facebook icon clicked/touched a new tab opens with the company's Facebook page.


#### Browser support

* The website was tested and works properly on: Chrome v77, Chrome v77 on Android, Opera v63
* On Firefox there was an issue with the flipcards on desktop - the cover of the card would still be visible when flipped. This was solved using a solution from [Stack Overflow](https://stackoverflow.com/questions/9604982/backface-visibility-not-working-properly-in-firefox-works-in-safari). After this fix the flipcards work properly on Firefox v69
* On Edge there was an issue with the background-blend-mode which resulted in pictures on the flipcards not being 'dimmed' and text not being readable. To fix this I decided not to display the background pictures on the cards on Edge and I used the idea from the [fastcodefix](https://www.fastcodefix.com/fix-for-internet-explorer-and-edge-css-layout-problems/) website to do that. After this fix flipcard work properly on Microsoft Edge v44, but the images are not displayed. 
* On IE the flipcards didn't work properly at all so I decided to keep them static as they are on tablet and mobile. To do this I applied the solution I found on [Stack Overflow](https://stackoverflow.com/questions/48412244/apply-css-to-all-browsers-except-ie-using-media-query/48422293). After this fix the cards work properly on Internet Explorer v11, although they are not animated in the desktop view, they also do not have background images in any view. 
* The flipcards do not work properly on Safari and Chrome on Mac - the content doesn't show when the card is flipped. Although I tried to fix this bug I could not find a good solution. As I work in Windows environment I did not have proper resources to investigate this further.

#### Responsive design

* The website was tested using Google Chrome Developer Tools to check how it looks like in case of different width and height by choosing 'Responsive' option and resizing the window. Using Chrom Dev Tools, it was also tested how the website looks on: Galaxy S5, Pixel 2, Pixel 2XL, iPhone 5/6/7/8/X, iPad and iPad Pro. In all these views the website is responsive and shows content properly.
* The website was also tested on the following devices: Samsung Galaxy A3, Asus laptop 15", Dell laptop 13.3", a 24" monitor. On all of this devices the website is responsive and shows content properly. 
* On mobiles and tablets the navbar collapses into a 'hamburger menu' and can be expanded to reveal the items by clicking/touching it, on desktop it contains the visisble list of all the items
* The pictures in the 'About' section are situated below/above the text description on mobile, while on bigger screens they are next to it.
* The cards in the 'Services' section are situated one under another for mobile view, for most of the tablets (medium size screens) they are displayed in rows of two, on bigger screens (bigger tablets and desktops) they show it 2 rows of 3 items. On desktop (very large screens) the cards become flipcards that have the cover with the category name and when hover over they flip and show the content.
* The subsections in 'What to expect' section are aligned one under another on mobile and on bigger screens they are next to each other.
* The files for download and their descriptions in the 'For GP surgries/companies' section are one under another on mobile view and to the left there is one big document icon, on bigger screens thy are next o wach other and on the left of each there is a document icon.
* The map in the 'Contact' section is situated below the address on mobile view and on bigger screens it is on the right side of the address and is also bigger.
* An additional 'reviews' item on the footer is hidden on the mobile view and appears on bigger screens.

#### Accessibility

* I downloaded an NVDA screen reader to check the accessibility for peope with impaired vision. As an unexperienced user I was unable to use the exact controls as everyday users do, however I managed to test how the screen reader behaves on the website on the basic level. Based on this I added additional aria-labels (there were some already existing) for the scroll down arrow buttons, expand arrow buttons in the pricing section and number and phone links. This was checked with English speaking reader on the English version. The Polish version was adjusted accordingly based on the changes to the English version. 
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

* The contrast between the background colours and the text colours should be sufficient for people with impaired ability to see colours

#### Peer code review

* It was pointed out to me that in the 'Why Us' subsection of Home the last icon reaches outside its container. This was not the case on my devices but after investigating using Chrom Dev Tools I noticed it happens when the height of the device is smaller. The bug was caused by setting the height to 100vh. Changing it to min-height: 100vh solved the problem. 
* Some reviewers noticed that the navigation bar on mobile mode wouldn't collapse when an item was selected. This wasn't the best user experience as they would have to touch the hamburger menu button again to be able to fully see the site. This was fixed using JavaScript code.
* It was suggested that I should compress my images for better performance which I did using [this tool](https://tinyjpg.com/).

## Deployment
This project was developed using the [Visual Studio Code IDE](https://code.visualstudio.com/), committed to Git and pushed to GitHub. 

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into GitHub.
2. From the list of repositories on the screen, select Alicja-Malinowska/Milestone1.
3. From the menu items near the top of the page, select Settings.
4. Scroll down to the GitHub Pages section.
5. Under Source click the drop-down menu labelled None and select Master Branch
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub:

1. Follow this link to the Project GitHub repository.
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.

  ```
  git clone https://github.com/Alicja-Malinowska/Milestone1.git
  ```
7. Press Enter. Your local clone will be created.

More about cloning can be found on this [GitHub Help page](https://help.github.com/en/articles/cloning-a-repository).


## Credits

### Content
The text was entirely written by me, both in Polish and English.

Psychotest was a real company that I used to run and it had a website built in WordPress. The website does not exist anymore and I do not have access to it either. I used texts in Polish that I had saved in word files when I had been preparing the content for the website. I changed some content and added some new content. I translated everything to English. The layout of the webiste is different than the WordPress website, although the sections are similar. I no longer have the access to the WordPress page and I do not have any images of the old website, I only rely on my memory of it and I was not attempting to recreate it in terms of layout and design.

### Tools used

* [CSS Gradient](https://cssgradient.io/) - background gradient created using this website
* [ColorSpace](https://mycolor.space/) - this tool was used to match the colors used on the webiste to the logo
* [Autoprefixer](https://autoprefixer.github.io/) - used to add prefixes for the code to work on different browsers
* [Tiny JPG](https://tinyjpg.com/) - used to compress the images to improve performance

### Media
* The flag images, truck hero image and cards images come from [Pixabay](https://pixabay.com/)
* The images from the 'About' section are mine
* The fonts were imported from [Google Fonts](https://fonts.google.com/)

### Acknowledgements

Thanks to my Mentor [Simen Daehlin](https://github.com/Eventyret) for suggesting to make it a one-page scrollable website and for giving me idea to display my contact form as a modal. Thanks to [Anthony O'Brien](https://github.com/auxfuse) for giving me a piece of JavaScript Code to provide better UX with the collapsable navigation bar on mobile devices. 
