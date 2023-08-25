
<a name="readme-document-top "></a>
<div align="center">
  <a href="https://github.com/DivyaPai03/LiteSpringer-App/blob/main/src/img/LS-logo.png ">
    <img src="src/img/LS-logo.png " alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">LiteSpringer-App-README-Document</h3>
  <p align="center">
    The README file describes how the page structure, style and different features of the app is planned and implemented using HTML, CSS, JavaScript and other third party API’s to build the complete LiteSpringer-App project!
    <br />
    <a href=" https://github.com/DivyaPai03/LiteSpringer-App"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/DivyaPai03/LiteSpringer-App">View Demo</a>
    ·
    <a href="https://github.com/DivyaPai03/LiteSpringer-App/issues">Report Bug</a>
    ·
    <a href="https://github.com/DivyaPai03/LiteSpringer-App/issues">Request Feature</a>
  </p>
</div>
<!-- Contents-->
<details>
  <summary>Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
       <li><a href="#basic-structure-of-liteSpringer-app">Basic Structure of LiteSpringer App</a></li>
<li><a href="#user-stories">User Stories </a></li>
<li><a href="#mvc-approach">MVC Approach</a></li>
<ul>
      <li><a href="#the-model">The Model </a></li>
<li><a href="#the-view">The View </a></li>
<li><a href="#the-controller">The Controller</a></li>
</ul>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> 
<!-- About the project -->

## About The Project
[![LiteSpringer-App Screen Shot][product-screenshot]]

During the learning phase of web development using JavaScript, I came to understand how crucial it is for a developer to create a well-organized and maintainable code. For achieving this purpose there are architectural/design patterns available such as Model-View-Controller (MVC), Model-View-Presenter (MVP), Presentation-Abstraction-Control (PAC), Model-View-ViewModel (MVVM) etc. Such approaches allows a clear distinction on concerns, thereby helps developers to develop more efficient web applications. 

In this project, I have developed a miniature version of a research article management software that can provide academic research papers published in a journal called Springer Nature, hence the name LiteSpringer. In other words, LiteSpringer is an application developed using Springer Nature API to search and get millions of scientific documents published in Springer Nature journal. Through this project, I have explored how to build a dynamic web application using  MVC approach and put my knowledge on fundamental languages (HTML, CSS and JavaScript) into practice in real world scenarios.
<p align="right">(<a href="# readme-document-top ">back to top</a>)</p>

### Built With

* [![HTML5][html5]][html5-url]
* [![CSS3][css3]][css3-url]
* [![JavaScript][javascript]][javascript-url]
    
### Basic Structure of LiteSpringer App

* The underlying structure and styling of the web application is made using HTML5 and CSS3 respectively. 

* In the application a sliding banner is provided at the top followed by a header section spanning the entire width of the page, below which the page area is divided into two column one for results section and the other for article section. Finally, a copy right statement is included at the bottom of the page.

* The header section contains application logo, a search field for user to search articles, a bookmark menu and add-notes menu. 

* The results section displays the total result count available for user’s search query and current page number out of total number of pages, at the top of the section. It is then followed by a list of search results one below the other and pagination buttons at the end. Each item in the list provides the user with the preview of the article that include its title, creator names, publisher, publication year, doi (unique id for article) and first sentence of the article’s abstract. 

* On user click over a particular article preview in the list, the corresponding article will get displayed in more detail in the article section of the application. In this article view user will get an option to download the article in PDF/buy the article from the Springer’s website, to bookmark the article using bookmark button, to add notes if any and to read full abstract of the article.  
 
All these features are achieved by carefully disintegrating them into smaller parts in the form of user stories. 

<p align="right">(<a href="# readme-document-top ">back to top</a>)</p>

### User stories

The major user stories I came across for this project are:
1.	As a user I want to have a search field to search for articles so that the app will fetch the data matching the query I have typed from the Springer API’s database.
2.	As a user I want to have the cursor already in the search field so that I can start typing the query as soon as the page loads.
3.	As a user I want the search field to get cleared as soon as I click submit button so that I can type next query in the field without having to delete the previously typed one.
4.	As a user I want to spin a loader in the results section until the results are fetched and displayed so that I can know that fetching processing is going on in the background. 
5.	As a user I want to know the count of total results available for the query I have searched and the number of the page I am currently viewing out of the total number of pages of results. 
6.	As a user I want to have pagination feature in the search results section so that I can access the next as well as previous pages if any.
7.	As a user I want to get a preview of the article (includes title, creators, publication year, publisher name, doi, first sentence of abstract) in the search results section so that I can decide if to read it further or not, even before clicking on it for  a more details.
8.	As a user when I clicking on the preview of the article in the results section, I want to get a detailed view of the article in the article section so that I can read more details about the article provided by the API. 
9.	As a user I want to know if the article is either a book or a journal in the top of the article view so that I can decide which approach of reading is suitable.
10.	As a user on looking at the detailed article view I should get to understand if the article is open access journal or a paid journal by just looking at “OPEN ACESS” term used at the top or the lock icon otherwise.
11.	As a user I want to get access to the link to buy the article on clicking the lock icon which denotes paid journal as well on a “buy article” button in the page so that I can easily navigate to the journal’s website for purchasing the article.
12.	As a user I want to download the article in pdf form by clicking on the download button available whenever the article is from an open access journal.
13.	As a user I want to get an error message in the results section when the query doesn’t match any keyword in the Springer API’s article database.
14.	As a user whenever I click on preview article in the search results section, if the fetch process encounters any error I should get a error message in the article section so that I know that the window.location.hash value denoting the unique id of article used to fetch the data from API is not working.
15.	As a user whenever I click on preview article in the search results section, I want to see a spinner running in the article section so that I know that the fetch process in running in the background.
16.	As a user I want to see that the preview article in the list in the results section corresponding to the article displayed in the article section should look selected so that on clicking over another preview article in the list, that one will look selected.
17.	As a user I want to add and remove bookmark options for article displayed in the article section, so that I can get the articles bookmarked in a separate list for later use.
18.	As a user I want to get a list of bookmarked articles (showing even fewer details about the article than displayed in the results section) in the bookmark menu provided in the header section so that I can click on any article item in that list and view that article in the article section.
19.	As a user If the article open for view in the article section is bookmarked, it should look selected in the bookmark list in the header section as well as preview list in the search results section.
20.	As a user I want to update the bookmark list as I add bookmark as well as remove bookmark so that I can track the bookmarked articles properly by checking the bookmark list.
21.	As a user I want to get an error message telling the user that there are no bookmarks yet in the bookmark menu when all the bookmarks are removed.
22.	As a user I want to have a DOM updating algorithm to use whenever bookmark is added and removed so that whenever only an element or its attribute are being altered the function will compare the current DOM with the new DOM and only take newly added elements or attributes without having to reload entire DOM.
23.	As a user I want to see the list of all my bookmarked articles when I leave the app and come back later so that I can keep using the app over time.
<p align="right">(<a href="# readme-document-top ">back to top</a>)</p>

### MVC Approach
In this project, the application’s components are divided into three main parts: the Model, the View and the Controller.
#### The Model: 
The Model is responsible for managing the application's data and logic. The view is responsible for rendering the user interface and presenting the data to the user and thereby remains independent of data and logic. 
Here in the model, data related to search, article, bookmark etc are stored in an object named “articleState”. An async function “loadSearchResults” accepts query from the search-field and uses it to fetch the required data from the Springer API using API URL, API key etc. The data returned is required for displaying a preview in the search results section. On the other hand, the data for displaying the detailed article in the article section is fetched by “loadArticle” async function by accepting article’s unique id namely “doi” as parameter. The same function also adds a value of either true or false to a property named “bookmarkValue” which is created for all the articles during its loading in the article section. The “createBookmark” adds “bookmarkValue” to true for the article passed into this function and also it pushes bookmarked article into bookmarks array in the “articleState” object. There is another function named “removeBookmark” which does the exact opposite of “createBookmark” function.
Helper.js files is created for writing helper functions such as getJSON, getCreatorList, getFirstSentanceAbstract, timeout etc. which helps higher order functions in the model to create abstraction over low level tasks which it should not be much bothered about.
#### The View:
There is a separate view.js files for each section in the app such as searchView.js for handling user interactions with search field while resultsView.js file for displaying preview of articles in the results section. Also, the other view files created are named totalResultsView.js, paginationView.js, articleView.js, bookmarkView.js etc. All these has a structure of ES6 class which are extended class of class “View” containing some public methods and properties (accessed by importing view.js file into all other view files)
The articleView handles hashchange/load events during query submission, button clicks events during bookmarking and adding notes and the displaying of detailed article in the article section of app.  The resultsView handles display of search results as a list in the result section. Both of them uses public method in the view.js namely “render”, “_renderLoader”, “_renderError”, “_clear” etc  to display fetched data, to show spinning loader, to render respective error messages in the respective parent elements and to clear the parent element, respectively. The previewMarkupView.js contains a class that is only meant to create a markup element that has much in common for bookmarkView and resultsView. So  previewMarkupView can be considered as a child view of both bookmarkView and resultsView.
#### The controller:
The controller handles all the user interactions in the View and updating of data/logic in the model accordingly by acting as an intermediary between the View and the model. The important functions the controller has are controlSeach function, controlArticles,  controlPagination, controlBookmark and an init function. All the control-functions have try-catch block, where try block would interact with the view and call the async functions in the model to return some data while the catch block would efficiently pick the error thrown when promises are rejected by those async functions. 
Init function passes the respective functions in the controller as handler functions/callback functions to event listener functions in the view. Eg. For addHandlerSearch function in the searchView which listens for “submit” event on the parent element (an input field) with class name “search”, the init function passes controlSearch function as a handler/callback function. 
<p align="right">(<a href="# readme-document-top ">back to top</a>)</p>

## Getting Started
### Prerequisites
Software used in the project and the way to install them are given below.
* ### npm [![Npm][npm]][npm-url]

  ```sh
  npm install npm@latest -g
  ```
* ### Parcel [![Parcel][parcel]][parcel-url]

  ```sh
  npm i parcel
  ```
* ### core-js[![Core.js][core.js]][core.js-url]

  ```sh
  npm i core-js 
  ```
* ### regenerator-runtime[![Regenerator-runtime][regenerator-runtime]][regenerator-runtime-url]
  ```sh
  npm i regenerator-runtime
  ```
### Installation

1. Apply for an API Key at [https://dev.springernature.com/docs]
2. Clone the repo
   ```sh
   git clone https://github.com/DivyaPai03/LiteSpringer-App.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage
Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
_For more examples, please refer to the [Documentation](https://example.com)_
     <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [Font Awesome] (https://fontawesome.com)
* [GitHub Pages] (https://pages.github.com)
* [Img Shields] (https://shields.io)
* [readme-template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
[html5]: https://img.shields.io/badge/html5-ffc299?style=for-the-badge&logo=html5&logoColor=ff6600
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS3]: https://img.shields.io/badge/css3-66c2ff?style=for-the-badge&logo=css3&logoColor=264de4
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[javascript]: https://img.shields.io/badge/javascript-1a1a1a?style=for-the-badge&logo=javascript&logoColor=e6b800
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/javascript
[npm]: https://img.shields.io/npm/v/npm.svg?logo=npm
[npm-url]: https://docs.npmjs.com/
[parcel]: https://img.shields.io/npm/v/parcel.svg?logo=parcel
[parcel-url]: https://www.npmjs.com/package/parcel
[core.js]: https://img.shields.io/npm/v/core-js.svg?logo=core-js
[core.js-url]: https://www.npmjs.com/package/core-js
[regenerator-runtime]:https://img.shields.io/npm/v/regenerator.svg?logo=regenerator
[regenerator-runtime-url]: https://www.npmjs.com/package/regenerator-runtime
[product-screenshot]: src/img/LiteSpringer-App-Screenshot.png
<p align="right">(<a href="# readme-document-top ">back to top</a>)</p>


