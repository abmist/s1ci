# Project 1 for Code Institute - Fintopics 

## Introduction
This project is an example of working prototype of a **fully responsive SPA -Single Page Application- for a business summit**. The goal of the site is to present all information necessary to promote the event (a meeting point for entrepreneurs and funders). 

It contains the following sections:
* Home
* Intro 
* Programme
* Venue
* Speakers
* Partners
* Contact
* Legal

## Description
This is an **Angular.js** project. Based on a **MVC (Model-View-Controller) architectural pattern** (also could be interpreted as MVVM, Model-View-ViewModel) this project follows the **separation of concerns principle**. Business logic, UI –User Interface-, and data are kept separate.
 
### Data

There are two json files:

* *information.json* which contains data about speakers and partners.
* *partners.json* which contains partners’ logos –which jpg files are kept in css/images.

### Services

There are three services (*ProgrammeService*, *SpeakersService* and *PartnersService*) that allow model data to be retrieved and passed on to controllers via dependency injection.

There have been used *Factory* methods and *$http* services to generate HTTP requests and return promise objects of data stored in *information.json* and *partners.json* –which will be employed in controllers.

### Controllers

There are eight controllers. 

* Three of them (*ProgrammeController*, *SpeakersController* and *PartnersController*) are used to handle data retrieved from services injected and pass them on to their respective views to populate the templates. These services contain *then()* functions (promise resolved) and *catch()* functions (promise rejected).
* *ContactController* manages contact information.
* *NavigationController* is used to highlight the current page in the animated side navbar.
* The rest of controllers (*HomeController*, *VenueController* and *TermsController*) are used just for showing the title of the template (in order to use two-way data binding as much as possible).

### Directives

There are four custom directives restricted as *‘E’* (elements). They make the code lighter and reusable.

* Two of them, *speakersInfo* and *partnersInfo*, show the model data using templateURL (these templates are located in templates/directives).

* The other two custom directives, *mapSummit* and *mapOffice*, are used for Google maps.

### Routing

Thanks to the *ngRoute* module it's possible to to navigate to different pages without reloading the entire application. There are eight routes in this project.

**Other functionalities employed**: built-in directives (*ng-click*, *ng-repeat*, etc.) or filters (*orderBy*)  


### Other features (apart from Angular.js)

In this project you can find: 

* Parallax effect.
* Animated side navbar created from scratch. 
	* It includes a vertical scroll bar (*overflow-y:scroll*) for devices with max-width screen: 700px and orientation: landscape. 
* Google maps with markers. 
	* Some functionalities have been deactivated (such as *scrollwheel* and *draggable*) to make easy to use maps in touchscreen devices (such as smartphones or tablets). 
* Videos (video background kept media files and from Youtube). 
* Images (as `<img>` and as div background).
* Bootstrap grid.
* Form with validation.
* jQuery event handlers:
	* Animated side navbar
	* When on “click” event > *slideToggle* 
	* Animations when scroll down
	* CSS changes when scroll

## Style
Apart from the intro page that intends to be appealing, the aim for the rest of the site is to keep a **minimal and functional design** focused on information, avoiding any additional element that could distract users’ attention. For that purpose it has been used a business-like, sober and subtle style, keeping simplicity at all times.  

**Screenshots**

Home

![Home](https://github.com/abmist/Project_1/blob/master/media/images_for_README/project_1_home.jpg)

Intro

![Intro](https://github.com/abmist/Project_1/blob/master/media/images_for_README/project_1_intro.jpg)

Programme

![Programme](https://github.com/abmist/Project_1/blob/master/media/images_for_README/project_1_programme.jpg)

Contact

![Contact](https://github.com/abmist/Project_1/blob/master/media/images_for_README/project_1_contact.jpg)


## Technology stack
* [Angular.js] (https://angularjs.org/)
* [Bootstrap] (https://www.http://getbootstrap.com//)
* JavaScript
* jQuery
* HTML
* CSS

## For a future stage
In future stages, the following imporvements could be added:
* A page for buying tickets.  
* Links to speakers' and partners’ detailed information.
* This project doesn’t use Angular Material, Material Design Lite, Angular UI, etc. because its purpose was creating an Angular.js SPA from scratch. But they would be truly useful tools for a next stage.

## Instructions to clone this project and run it locally

Open your terminal and use the git clone command:

`git clone https://github.com/abmist/Project_1.git`

Once that command has been completed, you will need *node.js* and *npm* to run it. If you have them installed, you will have to run the following commands:

1. `cd project_1`
2. `npm install -g http-server` 
	* *NOTE: If you are running on Windows, you will need to make sure that you're running the command tool as administrator. If you're using Mac OS X or Linux, make sure to run it as root using `sudo npm install -g http-server`*

Once the above steps have been completed, you should be able to run the following command:

`npm start`

This should serve up the content, so you can now open up your browser and in the URL bar enter `http://127.0.0.1:8000`

## Visit the site

Deployed thanks to Firebase.

[Fintopics](https://fintopics-project.firebaseapp.com/#/)


