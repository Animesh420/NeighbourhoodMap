# Neighbourhood Map Web Application

This project is about a neighbour hood map, based on bangalore.The prupose of this project
is to show different areas and information related to them on a google map. 
The basic model of the home page is taken from [here](https://getbootstrap.com/docs/3.3/examples/dashboard/).

## Application overview
Neighbourhood Web Application has been implmented using Google Map APIs and knockout JS framework.
It also used some CSS, mainly taken from the bootstrap framework coupled with contextual usage of media queries to add responsiveness to the website.

### Feature List
* **Location Search**: A location search is available on the maps, this can be used to quickly locate
a place, a restaurant, airport or bank on the map, the map zooms in to the  place.
* **Travel Wishlist**: A to-do travel list implemented in Knockout JS which can be used to enlist the places that the user wants to visit, these places are shown along with nearby interest places 
based on the **Foursquare API** . Also there is feature to mark visited places both on and off the map.
* **Keyboard shortcuts**: Following shortcuts are avialble, to see information about traffic, bike routes and transit routes.
  ```
     Ctrl + Alt + F : Traffic display toggle
     Ctrl + Alt + T : Transit display toggle
     Ctrl + Alt + B : Biker display toggle
  ```
* **Displaying regions of public interest**:  Restaurants, ATMS, Banks, Hospitals and transport regions are displayed for the city with the google APIs.

* **Customization**: Though the map, is implemented only for bangalore, yet it can be used to see other locations of cities, by maintaining correct data in the **config.js** file.

* **Map displays**: The map can be seen in dark mode, night mode and aqua display, to adjust better to people's preference.

* Test data: If you have never been to Bangalore, you can try googling information, or here is a list of some of the places.
  * Lalbagh : Botanical Garden
  * IISC : University
  * Chinaswamy stadium : Cricket stadium

## Prerequisites
* Editor preferably VSCode
* Credentials for Google Map APIs
* Credentials for Foursquare APIs
 
        
## Getting Started
* Clone the starter code from [here.](https://github.com/Animesh420/itemCatalog)


## Running the webpage
* Navigate to the root directory.
* Run the following command to start the web page.
  ```
  browser-sync start -s '.' -f '.'
  ```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Helpful Resources
* [ Adding an existing project to github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
* [CSS resources](https://www.w3schools.com/css/css3_2dtransforms.asp)
* [Bootstrap guides](http://getbootstrap.com/)
* [Flask Documentation](http://flask.pocoo.org/docs/0.12/)
* [Jquery Documentation](https://api.jquery.com/)