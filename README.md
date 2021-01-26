301 Entrance Exam
Instructions:
Make sure before starting to:

Turn off any means of communication (phone, Slack and Email).

Start your screen recording.

You are not allowed to use previous projects, notes , or GitHub.

You can use Google search engine.

Use the console to debug.

Use the reset.css provided in the slack message
******************************************************
Exam:
Create a new repository on your Github and name it 'my-garage'.

Build a one-page website using HTML, CSS, and Vanilla Javascript. The wire-frame of the targeted page is attached to Slack.

You will be building a simple webpage "My Car Garage" which contains all of the Cars that you have.

- As a user, I would like to be able to add new cars so I can track the cars I have in my garage. 
    - Create a form in order to add the **cars name** and **model category** and **model year**. 
    - The category should have a predefined list that contains the following categories: 
        - BMW
        - Lexus
        - Toyota
        - Tesla
        - Chevrolet
        - Hyundai
        - KIA

- As a user, I would like to view all of my cars that I already added so that I can quickly view my cars in my garage. - Whenever you add a car using the form, you should use the local storage in order to get all the cars from it and render them  using DOM.

- As a user, I would like to see along side the car information, the cars model image. The model images can be found in the folder directory img.

**Stretch Goals**
- As a user, I would like to delete any chosen car so I can handle the cars in my garage. - When you press on the 'X' button, the car should be deleted from the rendered DOM and the local storage.

- As I user, I would like to have the option to clear the whole rendered DOM. There will be a button when clicked it will clear the local Storage and the rendered DOM.

******************************************************
Do this work on the 'main' branch.
Create an HTML file and convert the wireframe into HTML structure.

Create a CSS file to apply the style.

The used font is "Roboto" -> google font.
The used colors are: 
- main color "#4a4a4a" 
- Secondary color "#a3a3a3".

Create a js file to handle the functionality.

Handle adding the cars to the HTML using the DOM and local storage.
Handle getting the cars from the local storage and rendering them.
Handle removing the selected cars from the list.
******************************************************
Grades Rubric:
HTML (5 Marks) 
- Header (1)
- Form (4)

CSS (30 Marks): 
- Header (5) 
- Background image (5)
- form (10) 
- rendered DOM (10)

JavaScript (55 Marks): 
- Constructor, properties and prototypes (15)
- Event listener and retrieving form data: (10) 
- Store data to local storage (5)
- Check and load data from local storage (10)
- Render the DOM (15) 


**Stretch Goals** 
- Remove the chosen item from the list (10)
- Clearing the items from LS and rendered DOM (5)

General (10 Marks):
- Code style (naming conventions, indentation ..) (5)
- Deploying on GitHub Pages (5)

P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.
******************************************************
Submission Instructions:
Submit the link of your GitHub repo.
Submit your live URL after deploying your site with GitHub pages.
Submit the link of your recorded video (you can upload it to your Google drive or dropbox then share the link).
After completing the exam, do NOT commit or push anything to your repo.