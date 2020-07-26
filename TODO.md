# General

-   [ ] Move API calls from container to the individual components
    -   Because we don't need them in the whole application.
    -   API now doesn't need time to load.
-   [ ] Load images faster
    -   images for projects and skills will only be requested when the page renders, and this adds a little delay to them to load and this is really annoying.
    -   Either wait the images to load and then display the whole page, or make it somehow faster to load.
-   [ ] Adjust light theme whites
    -   I just don't like them right now.
-   [ ] Make CSS individual for component abstraction and reusability
    -   At so many places components only looks normal, because of outer components' flexbox or some crap.
-   [ ] Opened navigation colors should match the theme pattern
-   [ ] CSS varibale names are kinda shit, rename them
-   [ ] Make modules and put the components inside the modules with their CSS
-   [ ] Make sure that there isn't any more CSS conflict
    -   Like overrides and important keyword.
-   [ ] Make a fantastic frontpage :|
-   [ ] Some call to action buttons somewhere?

# Admin

-   [ ] Create login page with the route of /login
-   [ ] Create dashboard page where the admin (me) can manage the content of the site by API calls
    -   Dashboard and actions inside it should only be accesible with a valid authorization token from the API
-   [ ] Create private route for /dashboard
    -   If the user (me) is not logged in, redirect to login page
    -   Use the API to login and get authorization token
    -   store the token in a http cookie (or in localstorage with extra security steps to prevent cross site scripting and other amazing things)
    -   Private routes should be animated routes as well
