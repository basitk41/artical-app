# Article App

There are two main components, One is NewsFeed and second is Search. User can customize Newsfeed by selecting their preferred Category or Source. User can search for any query, user can filter results by different parameters.

Tech: React.js, Typescript, Bootstrap, Docker

# Docker Instructions:

## How build image:

Run the below command in the root folder of project.

`docker image build -t article-app-image:latest .`

## Create a container from image:

Run the below command to create a container from image we just create on above command.

`docker run -dp 8000:3000 --name article-app-container article-app-image:latest`

Now, open your browser and go to http://localhost:8000
