# flipr-e-cabin

Problem Statement -> Build a web application where employers can keep a check on their employees' work done every particular day.

## Made by -> Chevva Ashish Reddy, Gajji Prem Kumar, Bedre Dhanush

## The webite is responive. Responsive images at the end of readme. You can also check it out on a mobile.

# Test Admin credentials
email - ashKetchum@gmail.com
password - 99221

# Test Employee credentials
email - ashishoct2002.ketchum@gmail.com
password - 89197

# As the website is live, you will have to add tasks to see the charts, as we have added tasks only for dates 10th October or less.
## The default password is first five digits of the mobile number. 

## Login

The design of the login page was was recreated by us taking inspiration from the sign-in page of Amazon. Both employees and admins can login thourgh 
this page. We added an isAdmin boolean variable in the database for each employee to differentiate between employee and admin.
After entering the email, click on Continue button, then enter the password and click on sign-in. If the user is admin you will redirected to the
admin dashboard, else employee dashboard.

The password is hashed using bcrypt, when the user tries to login, the entered password and stored password are compared.

If you want to change the email that you entered, click on Change link.
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 36" src="https://user-images.githubusercontent.com/75008644/194806837-4677579a-9129-4095-86f5-9115c33582f6.png">

If no tasks of the employee are found.....
<img width="1440" alt="Screenshot 2022-10-10 at 12 09 17" src="https://user-images.githubusercontent.com/75008644/194810135-8083770d-a980-40c7-9c83-7c33a5cedf5d.png">

## Admin Dashboard
<img width="1440" alt="Screenshot 2022-10-10 at 11 33 49" src="https://user-images.githubusercontent.com/75008644/194807768-78ab4bc8-a5b9-4449-be05-106867a9ba97.png">
<img width="1440" alt="Screenshot 2022-10-10 at 11 33 52" src="https://user-images.githubusercontent.com/75008644/194807781-610ceb80-67be-413c-87cb-c86714c99577.png">

### Admin Navbar

There are four links in the navbar. Added a small animation to the nav links
- Dashboard redirects to admin's dashboard. 
- Account profile takes the admin to his profile page, where he can edit his details.
- Add Employee -> When the admin clicks on this link, a popup showing a form to add a new employee is shown. You have to be in the dashboard page.
- Logout lets the admin end his session and redirect to the login page.
<img width="1440" alt="Screenshot 2022-10-10 at 11 34 08" src="https://user-images.githubusercontent.com/75008644/194807812-b7808a31-56de-4d3d-aeea-3e462667dd79.png">

### Admin Sidebar

All the employees' names who are working in the organization are shown here. There is a search bar that can be used to filter the employee list based
on their names.
## How to use the searchbar? 
Enter a string in the search bar and then click on the search icon. The employees' list will be filtered. If the admin want the entire list back, then he 
has to clear the search bar and click on the search icon

# The below images show the working of the search bar

<img width="1440" alt="Screenshot 2022-10-10 at 11 34 42" src="https://user-images.githubusercontent.com/75008644/194807836-4167ab35-977c-49fe-be9d-4bfcb17a6b58.png">
<img width="1440" alt="Screenshot 2022-10-10 at 11 34 48" src="https://user-images.githubusercontent.com/75008644/194807843-df865569-eaab-49d0-86bc-fecb5887a2c9.png">

### Admin DashboardMain

When the admin clicks on an employee name, his personal info, pie charts and stacked bar chart will be updated on the main screen. By default, the first 
employees' details will be shown.

## Employee Dashboard

### Employee Navbar

There are four links in the navbar. 
- Dashboard redirects to employee's dashboard. 
- Account profile takes the employee to his profile page, where he can edit his details.
- Tasks -> When the employee clicks on this link, he will be redirected to the tasks page.
- Logout lets the employee end his session and redirect to the login page.

### Employee Tasks
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 13" src="https://user-images.githubusercontent.com/75008644/194807919-ab100b96-1219-40ad-ae31-a9c2ceaa7e8e.png">
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 20" src="https://user-images.githubusercontent.com/75008644/194807928-13c0d1f4-6d17-479f-9481-28cab2158e77.png">
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 27" src="https://user-images.githubusercontent.com/75008644/194807943-36b9a92f-4e28-4213-a937-543a6fe47330.png">

The tasks page begins with a calendar (which is an additional feature to get tasks of a particular date, which we haven't implemented yet).
There is an add task button, which on click generates a popup form to add a new task. Added a small animation to the close button. If you try to add a new task for a future date, an alert will be
thrown and the task will not be saved in the database.
A real time digital clock is dispplayed to alert the employee of the time so that he can productive and it is also helpful to add start time to the task.

Then comes the task container. It has two sub-containers. The first lists all the tasks that the employee has added for the current day. 
The second lists all the tasks that the employee has added for the previous day.

The tasks are displayed in ascending order sorted on start time. All the fields of each task are displayed.

### Employee Sidebar

The employee's ID card will be shown here.

### Employee DashboardMain

The employee's personal info, pie charts and stacked bar chart will be updated on the main screen.
<img width="1440" alt="Screenshot 2022-10-10 at 11 30 59" src="https://user-images.githubusercontent.com/75008644/194808078-17bac5ac-8680-458b-96ef-00b82133237e.png">

### Employee Profile

The red icons indicate that the employee cannot edit those fields
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 06" src="https://user-images.githubusercontent.com/75008644/194808049-06bb3525-264d-4f08-8992-81823785328e.png">

## Responsive Images

<img width="1440" alt="Screenshot 2022-10-10 at 12 02 50" src="https://user-images.githubusercontent.com/75008644/194809507-8d7709f6-36ec-44f7-b47e-55b7c176ba49.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 08" src="https://user-images.githubusercontent.com/75008644/194809513-53067112-2055-44f6-b973-7c8d745bcb21.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 28" src="https://user-images.githubusercontent.com/75008644/194809528-3861fee4-6a40-4d72-8db4-37ae4c5d24e8.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 04 05" src="https://user-images.githubusercontent.com/75008644/194809591-5288262a-2104-45b6-b6d8-17796faadb3f.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 30" src="https://user-images.githubusercontent.com/75008644/194809540-764d3fb4-cce6-4556-83dc-d1dced27f418.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 38" src="https://user-images.githubusercontent.com/75008644/194809552-af21b344-0ac0-4c20-9d3e-4f0fb4ad907f.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 57" src="https://user-images.githubusercontent.com/75008644/194809564-25498311-f7dd-43fc-893f-942ee2cccba1.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 03 59" src="https://user-images.githubusercontent.com/75008644/194809574-3bbecd53-fddf-40fc-889e-caaa0ab1d891.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 06 12" src="https://user-images.githubusercontent.com/75008644/194809793-3a34b6fd-c190-4965-8789-3496bead365a.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 06 19" src="https://user-images.githubusercontent.com/75008644/194809807-0467c87c-d219-4605-98e1-c7236d8c9ec0.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 06 31" src="https://user-images.githubusercontent.com/75008644/194809814-db2a0a69-aa6f-4693-becf-c85b199470dd.png">

<img width="1440" alt="Screenshot 2022-10-10 at 12 06 37" src="https://user-images.githubusercontent.com/75008644/194809818-34c4eb2c-3e26-472e-baa3-4315dc369d48.png">


