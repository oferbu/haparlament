# embeddable-react

This is the starting point to [this article](https://observiq.com/blog/embed-react-in-golang/)

# Starting a video chat using Agora
1. Create an account and log in here: https://sso2.agora.io/en/login
2. Create project 
3. Replace the app ID in the file `ui/src/video/Call.js` with the app ID of the project you created 
(or use an existing app ID) 
4. On Agora.io go to the project configuration
5. Under "Security" enable "Primary Certificate", and delete the "No Certificate".
6. Scroll down to "Features" and generate a temp RTC token. Use Channel "AParlament_1". 
7. Replace the token in the aforementioned file with that token
8. Navigate to https://webdemo.agora.io/basicVideoCall/index.html and fill in the correct details.
9. Run the project, and then join the call from the page you just visited on the web browser
