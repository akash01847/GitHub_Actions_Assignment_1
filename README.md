Github Actions | Assignment 1:

Tasks to be performed in this assignment:
1. Create a repository on GitHub with whatever name you may prefer.
2. Add a dummy postman collection to it.
3. The main objective would be to create a CI/CD pipeline that will run your postman collection using Newman, via GitHub Actions. If you want, you may use postman CLI if needed, it is up to you.
4. Once created we need to generate the report as well.
5. The generated report should be stored as an artifact.
6. The artifact should get expired after 30 days.
7. You will need to create a YAML file to configure the pipeline


Github Actions | Assignment 2:

Tasks to be performed in this assignment:

1. You may use the same repository that you have used in Github Actions Assignment 1.
2. Create a new branch named “feature/gitHubActionsAssignmentTwo”. Once created, along with the postman collection, you need to push the selenium project that you may have created in the earlier assignments.
3. Along with the postman collection execution on the pipeline, you are required to create another job in the same stage for the execution of selenium tests.
4. Configure your selenium project in such a way that the test should get executed in headless mode only.
5. For selenium execution, you should only be using the maven command only. Generate the report for the selenium execution and store it as an artifact as you did in the earlier assignment
