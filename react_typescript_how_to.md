1. Update NPM
`npm i npm@latest -g`

2. Install React

```bash
[igavelyuk@localhost red_tiger_proj_organizer]$ npx create-react-app . --typescript

```
(if you create folder before /Git/red_tiger_proj_organizer)

or
```bash
[igavelyuk@localhost Git]$ npx create-react-app red_tiger_proj_organizer --typescript
```
(create project with same folder name as project here folder /Git)

Note: Folder must be clean othervise will give an error.
```js
npx: installed 91 in 9.84s
The directory . contains files that could conflict:

  readme_create_react_typescript.md

Either try using a new directory name, or remove the files listed above.

```

Output:
```js
[igavelyuk@localhost red_tiger_proj_organizer]$ npx create-react-app . --typescript
npx: installed 91 in 4.409s

Creating a new React app in /home/igavelyuk/Documents/Git/red_tiger_proj_organizer.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> core-js@2.6.9 postinstall /home/igavelyuk/Documents/Git/red_tiger_proj_organizer/node_modules/babel-runtime/node_modules/core-js
> node scripts/postinstall || echo "ignore"


> core-js-pure@3.1.4 postinstall /home/igavelyuk/Documents/Git/red_tiger_proj_organizer/node_modules/core-js-pure
> node scripts/postinstall || echo "ignore"

+ @types/jest@24.0.15
+ @types/react@16.8.23
+ @types/react-dom@16.8.4
+ react@16.8.6
+ react-scripts@3.0.1
+ react-dom@16.8.6
+ @types/node@12.6.2
+ typescript@3.5.3
added 1392 packages from 749 contributors and audited 902061 packages in 48.76s
found 0 vulnerabilities

We detected TypeScript in your project (src/App.test.tsx) and created a tsconfig.json file for you.

Your tsconfig.json has been populated with default values.


Initialized a git repository.

Success! Created red_tiger_proj_organizer at /home/igavelyuk/Documents/Git/red_tiger_proj_organizer
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd /home/igavelyuk/Documents/Git/red_tiger_proj_organizer
  npm start

Happy hacking!
```
3. Testing

```bash
[igavelyuk@localhost red_tiger_proj_organizer]$ npm start
Compiled successfully!
You can now view red_tiger_proj_organizer in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.104:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.

```
