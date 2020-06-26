# FICTOAN — React boilerplate
### v0.7.3
#### A nice little starter project in React to hit the ground running.

---

#### What you need
1. **NodeJS**<br/>
    This is a Javascript “runtime”. React is a JS framework, so needs something like Node to run inside of. Download from [here](https://nodejs.org/en/download/).
    
2. **Yarn**<br/>
    A package manager. This helps manage dependencies required by this project. Download from [here](https://classic.yarnpkg.com/en/docs/install).
    
3. **A code editor**<br/>
    Someplace for you to type code. [VS Code](https://code.visualstudio.com/) is a high-quality free and open-source editor.
    
4. **A terminal**<br/>
    The opposite of UI. We recommend [Hyper](https://hyper.is/). This is to run and manage your project. MacOS come with a built-in terminal called, um, Terminal. Windows has Command Prompt.

---

#### Getting started

1. Clone or download this repo to your system.
2. In your terminal, navigate to the folder where you have this repo.
3. Type `yarn`. This will install all the dependencies required to run this project.
4. Once that’s done, now type `yarn start`. This should open up the website in your browser, at [http://localhost:3000].
5. Open up the repo with your code editor, and make changes. You should see the page updating with each save.
6. Go forth and create!


---

#### Docker Setup

We've got your back if you don't like installing versioned dependencies on your local development environment. 🐳 FTW.

1. Clone or download this repo to your system.
2. In your terminal, navigate to the folder where you have this repo.
3. Run `cd react-boilerplate` to get inside the project directory.
4. Now run this command to start the application `docker-compose up -d`.
5. Upon running the above command successfully, you'll be able to access your fictoan app in the browser at [http://localhost:3000]
6. If you want to make changes to the application while running the it in the browser, simply make all the changes you want and run `docker-compose up -d` again.
7. To shut-down the application, you can just run `docker-compose down`, and docker-compose takes care of the rest.

Note:

1. By default, the container runs on port `3000`. If you want to change the port on which your application runs, change it in the `docker-compose.yml` file at Line 5.
2. You can also extend the `docker-compose.yml` file to include more services, like backend and database.