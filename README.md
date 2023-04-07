# HA-Parlament 

The applications - in this project was build based on [this article](https://observiq.com/blog/embed-react-in-golang/)

### Guidelines
- Always use the latest Go version
- Work in single branch 
- Don't push code without ensuring it is working properly

### Deployment 
Use the Deployment folder for
1. Building the client side code by running `build.client.sh`
   The script generates static files into `ui/build` folder that later pushed into the Go app
<br  />


2. Building the server side code by running `build.server.sh`
   This script build the app for Linux environment. If you want to build it for different OS you need to look for `env GOOS=linux GOARCH=amd64` and replace per your need. Environment variables can be found [here](https://www.digitalocean.com/community/tutorials/how-to-build-go-executables-for-multiple-platforms-on-ubuntu-16-04)  

*Note that the folder you are executing the build should be the `deploy` folder* 




## deploy ##

for deploying the system you must have gcloud. docker and docker composed install, 
the deployment script should work on linux and mac 

run the following command
```bash
gcloud login
```
A page with the google login will be opened. 
than run 
```bash
sh deploy.sh
```


