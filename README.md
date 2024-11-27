### FRONTEND ###

>npx create-react-app frontend
>npm start

The site uses materialUI so

>npm install @mui/material @emotion/react @emotion/styled
>npm install @mui/icons-material @mui/material @emotion/styled @emotion/react


### PROBLEM: ...npm.ps1 cannot be loaded because running scripts is disabled on this system. ###
Option 1:- Enable scripts execution, you can set the execution policy to “RemoteSigned” By using this simple command:
>Set-ExecutionPolicy RemoteSigned
Option 2: in case first way didn’t work for you Set Execution Policy to “Unrestricted” (not recommended for security reasons):
>Set-ExecutionPolicy Unrestricted
Option 3: Still your problem did not resolved? try this last command :
>Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


### BACKEND ###

Go to main class and run the programme
The programe runs in port:8080


The backend uses MySQL Workbench port:3306