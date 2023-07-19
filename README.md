# Task-Manager-React.JS

![as](https://github.com/gani1000/task-manager/assets/107857762/51da6f31-2ccd-4e2b-88a5-a82cb1ae4961)


# Code walkthrough

- Task manager app produces a dynamic flow of information among the back-end and front-end systems.
  Implementing CRUD operations seamlessly by fetching data through the back-end's controllers. The logic
  for the front end is handled via multiple components for fetching information accordingly.

      const router = express.Router();
      
      router.route('/').get(getAllTasks).post(createTask);
      router.route('/:id').get(getTask).patch(updataTask).delete(deleteTask);

# Stack technology

-Back-End:
  Node.Js, Express.Js, MongoDB, mongoose
  
-Front-End:
  React.Js, CSS, JavaScript.

# Installation

  - start by cloning the repository into your local environment.
  
        https://github.com/gani1000/auth-login.git
  
  - Install all the necessary dependencies.
  
         npm install
