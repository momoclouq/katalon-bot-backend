# Katalon middle-service backend

## Deployment

Not available

## How to run the project locally

1. clone the repo
2. run `npm install` to install all dependencies
3. create a .env file with these configuration:
```
SEMANTIC_SEARCH_URL='https://katalonsemanticsearch.com'
RECOGNITION_URL='https://jzenkd2s01.execute-api.us-east-1.amazonaws.com/default/intentRecognitionInvocation'
```
3. run `npm start`, the application will run at localhost:5000, to rerun the application, turn the server down and run `npm start` again
4. (After the first run) To install new dependencies:
```
git fetch
git pull
npm install
```

## install packages with typescript
- Just use `npm install`
- If it does not work (project informs cannot find package), then install types manually: `npm install @types/...`

## Task selection

- In the Projects tab, there are 3 columns: Defined, On going, Done
- Defined tasks are tasks that can be selected and work on, each task represent 1 branch
- Select a defined task by adding your name in the task, drag it to the On going column
- After merged successfully, drag the task to the done column

## How to contribute as a team member

1. Create a branch from branch 'main' named with related features that will be implemented (example: personal_carousel)
2. After finished committing, create a pull request (PR) with meaningful name to merge into 'main' branch
3. resolve conversations, comments etc
4. Merge into 'main' branch after being approved by 1 other member