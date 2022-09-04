*************************************
Welcome
*************************************

FILES
-----
Fuse-React-vx.x.x-demo     : Fuse React Template Demo Project
Fuse-React-x.x.x-skeleton  : Fuse React Template Skeleton Project
PSDs                       : Layered and well organized psds of the project design


HEROKU NOTES
----------------
You may encounter some issues if you want to deploy fuse-react to heroku, here is the solution:

// We need to disable production mode to install devDependencies:
heroku config:set NPM_CONFIG_PRODUCTION=false

// push skeleton branch to master of heroku
git push heroku skeleton:master




