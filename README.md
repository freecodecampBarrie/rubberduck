# The Rubberduck Project

We're going to make a web app that re-creates the [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) experience.

Here's the [wireframe](https://www.figma.com/file/V01n0TKenJSTtXLmQXE8dU/Rubber-Duck-Debugging?node-id=5%3A90) of what we're aiming for [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product).

~~Here's our [Trello Board](https://trello.com/b/b4Mqzw98/mern-rubber-duck-debug)~~. We're using [Github's Project tab](https://github.com/freecodecampBarrie/rubberduck/projects/2), which is a great [kanban](https://en.wikipedia.org/wiki/Kanban) tool available to us.

We also have a [Github Team](https://github.com/orgs/freecodecampBarrie/teams/rubber_duckies/members) for approving PRs and Merges, also ask during Zoom call to become a member.

We'll also be referencing this [tutorial](https://dev.to/andrewbaisden/creating-mern-stack-applications-2020-4a44) to setup the [MERN stack](https://en.wikipedia.org/wiki/MEAN_(solution_stack)). 

[@paulywill](https://github.com/paulywill) tested and showcased the tutorial's [demo](https://github.com/paulywill/anime-tracker).

Goals within [2](https://www.google.com/search?q=countdown+for+2+hours) _**OR**_ [3](https://www.google.com/search?q=countdown+for+3+hours) hour meetups:
- [x] Discuss workflow with group
- [x] Setup ideal environment / Trello / IDE / Sharing Etc.
- [ ] working MERN stack
    - [x] creating a database
    - [ ] getting all the CRUD parts working
    - [ ] React frontend that tackles close to [wireframe/prototype](https://www.figma.com/file/V01n0TKenJSTtXLmQXE8dU/Rubber-Duck-Debugging?node-id=5%3A90)
- [ ] Host working MVP on [Heroku](https://www.heroku.com
)/[Netify](https://www.netlify.com/
)/whereever
- [ ] Add some CI/CD for fun?
- [ ] Redirect with newly purchased Google domain [quackback.dev](quackback.dev)
- [ ] Find out how effective Zoom + hackathon can really be [VS Code](https://code.visualstudio.com) vs. [Repl.it](repl.it) vs. [Codesandbox](https://codesandbox.io)

----
## Requirements

You are going to need the following installed on your machine:

- [VS Code](https://code.visualstudio.com/download) (optional but recommended)
- [Git](https://git-scm.com/downloads) installed
- [Node.js](https://nodejs.org
) 

## Getting Started

1. fork project to your own Github account
2. Clone your fork to your computer (aka "local machine"): 

    `git clone https://github.com/[your_username]/rubberduck.git`
    
3. Set up remotes to work with team

    `git remote add upstream https://github.com/freecodecampbarrie/rubberduck.git`
    
   You should see some similar after entering: `git remote --v`
    
    ```
     origin  https://github.com/[userid]/rubberduck.git (fetch)
     origin  https://github.com/[userid]/rubberduck.git (push)
     upstream        https://github.com/freecodecampBarrie/rubberduck.git (fetch)
     upstream        https://github.com/freecodecampBarrie/rubberduck.git (push)
    ```
5. Install node packages:

    `cd backend`

    `npm install`

5. Create MongoDB, we're using an online service (free tier) [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). If you want the same one we're using just ask one of us for the secret credentials (just not [@paulywill's](https://github.com/paulywill) credit card  [@T357A](https://github.com/T357A)!!!)


6. Once the MongoDB is setup you need to make to a `.env` file in the `backend` directory. You can reference `env.sample` for the basic setup to connect to the MongoDB Atlas database we're using.

----
## Meetup V.5 - May 28, 2021

We covered a lot of ground as far as what we're trying to create and the Github workflow.

Even created a database cluster and able to connect. [@paulywill](https://github.com/paulywill) struggled with connecting a new cluster (as described in [#1](https://github.com/freecodecampBarrie/rubberduck/issues/1)), so we decided to use one that was already created previously and connect to that one.

Although did not get as far as ambitions hoped for, we did get get a good footing for next month's meeting.

In the mean, keep pushing for PRs and merging changes you think is appropriate. Do not worry about breaking anything, that's the point.

Will update the [minutes](https://github.com/freecodecampBarrie/meetings/tree/main/2021/v5_2021) in our [meetings](https://github.com/freecodecampBarrie/meetings) repo.

----
## Meetup V.6 - June 25, 2021

We'll continue on.

It's there's any work covered between then (hopefully working CRUD) we'll regroup and discuss what the next [Sprint](https://en.wikipedia.org/wiki/Scrum_Sprint) will be.

----
**HOT TIP**: To open links in a new tab users can just do a CTRL+click (on Windows and Linux) or CMD+click (on MacOS) on the link

**HOT TIP #2**: Have snacks and beverages near by.
