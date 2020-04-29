# Getting Redwood to compile with TypeScript

An exploration of possible techniques.

* This project contains a simple "web" side of a Redwood project.
* All .js files were replaced with .ts files
* Because Redwood has several non-standard bits, this naive translation (js->ts) results in an invalid typescript project
* We fixed this through a combination of settings in tsconfig.json and code generation (in src-gen). More info [here](https://github.com/redwoodjs/redwood/issues/234#issuecomment-620906084). (Note: the code generation logic is not here. We "faked" this by manually creating the files, but it lets us validate the approach)

This project is now compiling:

```
yarn tsc-w-noemit
```

