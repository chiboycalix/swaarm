<!-- @format -->

#How I visualized the Launches

- I wanted a visitor of the website to be able to view a video of the mission together with the mission name on getting to the launch page. After the video section, I decided to add an overview section. I opted for a table view because I wanted the user to be able to see all the mission details at a glance.
- On chosing a layout, I decided I was going to use a 2 grid columns so that I can have the video displayed directly on the website as opposed to having a link to the video which would have made me use atleast a 4 grid column.
- If I had more time, I would have added beautiful animations to some elements and also make the website completely responsive.

#Challenge(s) I faced during Developement

- I keep getting this error {"errors":[{"message":"query exceeds complexity limit","locations":[{"line":1,"column":1}],"extensions":{"code":"GRAPHQL_VALIDATION_FAILED"}}]}
  each time I try to make an api call with all to query for a launch or list of launches. I was able to resolve this temporarily by removing some parameters from the Query.

#How to run the project

1. clone the repository using the command `git clone [repo link]`
2. run `npm install` to install all dependencies needed for the project to run
3. create a .env file in your project's root directory and add this variable `REACT_APP_API` and set it to your backend api link
4. run `npm start` to start up the project in development mode
5. This would open the project automatically in your browser on `http://localhost:3000` or open this address directly in your browser to view the application homepage.
6. run `npm run cypress:open` to run your end to end test
