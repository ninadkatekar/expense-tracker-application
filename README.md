# expense-tracker-application

Expense Tracker App

Overview

The Expense Tracker app is a powerful and intuitive tool designed to help users manage their finances by tracking their daily expenses. Built with React.js, the app provides a simple and interactive user experience that allows users to easily add, view, and delete their expenses. In addition, it visualizes the data through a pie chart, providing insights into spending patterns.

The app provides a clean and modern design with a focus on simplicity and usability, making it ideal for anyone looking to better understand their spending habits and maintain control over their finances.

Key Features
1. Add New Expenses:
Users can input their expenses through an easy-to-use form.
The form requires a title, amount, and date for each expense, allowing users to fully capture each transaction's details.
Manage Expense List:

2. After adding an expense, it is dynamically displayed in a list.
Each expense is shown with its title, amount, and date, making it easy to see the most recent expenses.
A Delete button next to each expense allows users to remove any unwanted or incorrect entries.
Expense Summary with Visualizations:

3. The app includes a pie chart that visually represents the distribution of expenses. This makes it easy for users to see where their money is going at a glance.
Along with the pie chart, the app shows an Expense Summary on the right side, providing additional details:
Total Expenses: The sum of all the entered expenses.
Highest Expense: The single largest expense in the list.
Lowest Expense: The smallest recorded expense.

4. Responsive Design:

The app is fully responsive, adapting seamlessly to different screen sizes.
On smaller devices (e.g., mobile phones and tablets), the layout switches to a column format, making it easy to use on-the-go.

5. User-friendly Interface:
The app features a simple, attractive interface designed for ease of use.
The input fields are clearly labeled, and buttons provide visual feedback when clicked (hover effects).
The pie chart updates dynamically as users add or remove expenses, making it easy to track expenses in real-time.

How It Works
1. Adding an Expense:

Users start by filling in a form with the title of the expense (e.g., "Groceries"), the amount (e.g., "$50"), and the date (e.g., "2025-01-04").
Once the user clicks "Add Expense", the expense is added to the list below the form.

2. Viewing Expenses:
As expenses are added, they appear in a list with the following details:
The title of the expense (e.g., "Lunch at Cafe").
The amount spent (e.g., "$20.00").
The date of the transaction (e.g., "2025-01-05").
The Delete button beside each expense allows users to remove items they no longer wish to track.

3. Analyzing Expense Summary:
The pie chart visualizes the proportion of each expense in relation to the total expenses.
A dynamic summary on the right side of the chart shows:
Total Expenses: The sum of all recorded expenses.
Highest Expense: The most expensive entry.
Lowest Expense: The least expensive entry.

4. Visualizing Spending:
The pie chart makes it easy for users to visualize their spending across categories.
As users add more expenses, the chart automatically updates, providing a clear and simple overview of where their money is going.

5. Deleting an Expense:
If a user wishes to remove an expense, they can simply click the Delete button next to the expense in the list.
The chart and summary are updated immediately to reflect the changes.
Design and User Interface
The design of the Expense Tracker app was created with user experience in mind. The interface is clean, modern, and intuitive, featuring a light color palette with soft gradients that create a pleasant atmosphere.

Key Design Elements:
Input Form:
The form to add expenses is simple yet effective, with clear input fields for the title, amount, and date.
The button is designed with a hover effect to provide immediate feedback, making the app feel responsive and engaging.

Expense List:
Each expense is displayed as a list item with the title, amount, and date of the transaction.
The list items have a slight shadow and rounded corners to create a card-like appearance.

Expense Summary:
The pie chart is placed on the left side of the screen, and the expense summary is shown on the right.
The summary section displays the total, highest, and lowest expenses, making it easy for users to quickly analyze their spending habits.
The summary is updated in real-time as new expenses are added or deleted.

Pie Chart:
The pie chart is rendered using Recharts, a powerful charting library.
Different colors are used to represent each expense category, making the chart visually distinct and easy to understand.

Responsiveness:
The app is fully responsive, adjusting its layout depending on the screen size. On smaller screens (e.g., mobile devices), the pie chart and expense summary will stack vertically to ensure a smooth user experience.

Why Use This App?
Track Your Spending: The app helps you keep an eye on where your money is going by categorizing your expenses and displaying them in a visually appealing way.
Real-time Insights: The pie chart and summary are updated instantly as you add or remove expenses, giving you real-time insights into your spending.
Simplicity and Ease of Use: With its simple form and clear design, the Expense Tracker is easy to use for anyone, regardless of their technical skills.
Responsive Design: Whether you’re on a computer, tablet, or mobile phone, the app adapts to your screen size, making it usable anytime, anywhere.

Possible Future Enhancements:

Expense Categories: Allow users to categorize expenses (e.g., "Food", "Transport", "Entertainment") and display the pie chart according to categories.

User Authentication: Implement a sign-in system so users can save their expenses across sessions.

Exporting Data: Allow users to export their expense data to a CSV or Excel file for offline analysis.

Budget Tracker: Add a feature to track a user’s monthly budget and alert them when they exceed it.

Screenshots
Here are some screenshots of the Expense Tracker App in action:

1. Home Screen - Add New Expense
This screenshot shows the home screen where users can add new expenses. The form includes fields for the expense title, amount, and date.
![image](https://github.com/user-attachments/assets/897ddc85-0a6d-463a-8cfb-c9fd948e8797)


2. Expense List
Here is a screenshot showing the list of expenses after they've been added. Each expense displays the title, amount, and date, with an option to delete the expense.
![image](https://github.com/user-attachments/assets/cf393117-c24e-4121-8c7c-a7780fab5271)


3. Expense Summary with Pie Chart
This screenshot shows the expense summary section along with the pie chart visualizing the distribution of expenses. The total, highest, and lowest expenses are shown in the summary.
![image](https://github.com/user-attachments/assets/4e8c12f2-8243-49e3-b177-156a437b4453)


4. Responsive Design
This screenshot demonstrates the responsive design of the app on a mobile device. As the screen size adjusts, the layout adapts to ensure a smooth and user-friendly experience.
![image](https://github.com/user-attachments/assets/73d0cfd5-dc25-4f11-8ac1-0699720f2ef0)


    ![image](https://github.com/user-attachments/assets/37916ac4-4fe1-49d7-925c-e73d04c60469)


Usage
Add an expense:

Enter the title, amount, and date in the form.
Click the "Add Expense" button to add it to the list.

View the expenses:
The expenses will be displayed in a list format with the amount and date.
You can click the "Delete" button to remove an expense.

View the summary:
A pie chart on the right shows the distribution of expenses.
The summary section displays the Total Expenses, Highest Expense, and Lowest Expense.

License :

This project is licensed under the MIT License.

Acknowledgments

React.js: For building the user interface.

Recharts: For creating interactive and visually appealing charts.

Poppins: Font used for styling the app's text.

