# flipr-e-cabin

Problem Statement -> Build a web application where employers can keep a check on their employees' work done every particular day.

## Login

The design of the login page was was recreated by us taking inspiration from the sign-in page of Amazon. Both employees and admins can login thourgh 
this page. We added an isAdmin boolean variable in the database for each employee to differentiate between employee and admin.
After entering the email, click on Continue button, then enter the password and click on sign-in. If the user is admin you will redirected to the
admin dashboard, else employee dashboard.

If you want to change the email that you entered, click on Change link.
<img width="1440" alt="Screenshot 2022-10-10 at 11 31 36" src="https://user-images.githubusercontent.com/75008644/194806837-4677579a-9129-4095-86f5-9115c33582f6.png">

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
#### How to use the searchbar? 
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
