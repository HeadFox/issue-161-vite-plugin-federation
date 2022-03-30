# vite-plugin-federation issue reproduction

## Issue
```
Uncaught TypeError: application 'myApp' died in status LOADING_SOURCE_CODE: Cannot read properties of undefined (reading 'ReactCurrentOwner')
```

## Steps to start
1) Init all projects with `make init`
2) Start the remote project with `make run-remote`
3) Run the host vite project with `make run-host-vite`
4) Open your browser and go to vite preview url (should be http://localhost:4173/)
5) Go to the console to see the error

Bonus:
If you want to check a working webpack config as host just:
1) Run `make run-host-webpack`
2) Open your browser and go to http://localhost:3000/
