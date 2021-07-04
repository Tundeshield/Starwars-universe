### [Demo](https://starwars-universe-ng.netlify.app/)&nbsp;&nbsp;&nbsp;&nbsp;[Starwars Project](https://starwars-universe-ng.netlify.app/)

Originally created for Voyance HQ test. The codebase is now feature complete; please submit bug fixes via pull requests & feedback via issues.

## Getting started

You can view a live demo over at https://starwars-universe-ng.netlify.app/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all requiredd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Be aware that Local web server will use the standard React's port 3000 . You can configure port in scripts section of `package.json` if you have backends like Node or Rails to avoid conflicts.

### Making requests to the backend API

Convinently, i used the open and keyless API swapi.dev/api/people for the application to make requests against. You can view [the API spec here](https://swapi.dev/documentation) which contains all routes & responses for the server.

## Functionality overview

The Starwars character project is simply an entertainment focused web app that lists out features of your favorite star wars characters. It uses a custom API for all requests. You can view a live demo over at https://starwars-universe-ng.netlify.app/

**General functionality:**

- Search functionality to display characters matching search term.
- Persisted display of Starwars characters on the landing page.
- Sidebar that holds a list of your favorite characters (Your choices are persisted also).
- Uniqe pages for each selected Starwars character.

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
  - List starwars characters displaying options to be added to favorites or deleted from your favorites list.
  - Sidebar consiting your saved characters.
  - Used redux to maintian the global state user's favorite character, list of characters, and search terms
  - Pagination for list of articles
  - Persist data (store favorite characters in localStorage).
- Search results page (URL: /#/search)
  - Displaying a list of characters matching your searched term. Search term here was concurrently fetched, stored in redux store, and fetched to properly filter to redurect user to the exact character.
- Character page (URL: /#/actor/id )
  - The page shows a table with details of the character selected.

## Contact

Tunde Adepegba - christopher.adepegba@gmail.com

Project Link: [https://github.com/Tundeshield/Starwars-universe](https://github.com/Tundeshield/Starwars-universe)

<br />
