# code-journal-instructions

A dynamic HTML, CSS, and JavaScript journaling app for coders. (Instructions)

## Applied Learning

The concepts involved in this project have all been covered. So if you find yourself needing to do research for a given piece of code, please refer to materials in the following order of preference.

1. Official documentation
1. Any other links or references provided by instructors
1. Past exercises
1. Google, but be detailed in your search terms
1. **Ask for help** from an instructor, especially if something is unclear.

## Features

A **feature** is a **capability** that an application gives to its **user**. A feature is typically stated as: **User can `<verb>` a `<noun>`**. **User** is a person _using_ the application.

Not all "features" are created equal.

### Legit Features 💰

Reasons users _use_ an application. Perhaps on their own, they are not terribly special, but when you combine all of the features of an application together, you have a **product**; something somebody wants to _use_.

- User can **like** a **photo**.
- User can **watch** a **video**.
- User can **view** a **list of products for sale**.

### Trash Features 💩

Things that users _do not care about_, but might be included in the application. Nobody downloads an app or signs up for a subscription to do these, they are just "implementation details".

- User can see the home page.
- User can view the navbar.
- User can click a button.

### Your Features

This project will be built using a beginner version of the Agile methodology known as [Feature-Driven Development](https://en.wikipedia.org/wiki/Feature-driven_development). This approach doesn't fit 100% of projects 100% of the time, but it is usually very efficient and is great for developers of varying skill level. **`code-journal`** will be built one feature at a time and is made up of four features:

- [User can create an entry](features/user-can-create-an-entry.md)
- [User can view their entries](features/user-can-view-their-entries.md)
- [User can edit an entry](features/user-can-edit-an-entry.md)
- [User can delete an entry](features/user-can-delete-an-entry.md)

## Workflow

You'll be following this workflow as you go. Read it before beginning, but it's still here for you to reference later, so don't feel like you have to memorize it right now.

### Start the Feature

1. Be on the `main` branch in your terminal.
1. Pull `origin main` so that your local `main` includes all of your merged work so far.
1. Check out a new branch from `main` named after the feature you are working on. Be descriptive, _e.g_ `issue-1-create-an-entry`.
1. Proceed to follow the task list in your Issue (see below).

### Complete Each Task

Each feature comes with a list of tasks that should be done in the order given. The tasks are not meant to tell you what code to write, but they do offer some guidance to help keep you on track. If you are not sure if you have completed a task, think about how you could test it yourself. **Be sure to ask an instructor** if you're not sure how to check your work.

🚨 **Do not wait until you've implemented the entire feature to make a commit. This is a _terrible_ habit to get into while you are learning.** 🚨

Follow the **task list in your GitHub Issue** very carefully. Each task should be treated as its own tiny project and, when applicable, should get it's own commit. If a task requires some code, **make a commit** once you have **proven** to yourself that the new bit of **code works as intended**. You can **copy the task text** and use it as your commit message. **Include the Issue number** in the commit message too. For example:

```shell
git commit -m 'Listen for the submit event on the entry form. #1'
```

Then push to the branch on GitHub before proceeding to the next task.

If you need to revise your last commit message before pushing, this **amends (rewrites)** the message of the most recent commit on your current branch:

```shell
git commit --amend -m 'Listen for the submit event on the entry form. #1'
```

If your commit message has a mistake in it but you already pushed it to GitHub, [let it go](https://youtu.be/L0MK7qz13bU?t=125) and try to be more cautious in the future.

### Check Your Work Again

Does the application behave badly or did any previously-working functionality break? Time for a bug fix **now**. Does the application not match the provided wireframe? Time to adjust your styling **now**. **Make small commits as you go**.

- Fix all bugs and errors.
- Delete all `console.log()`s.
- Delete all commented out code.
- Delete CSS that isn't actually doing anything.

When you open a Pull Request, you are saying to other developers **"This is the best I can do"**, so be sure your feature **behaves as required**, the user interface **looks polished**, and the **code is clean**.

### Open a Pull Request

Once **all tasks for the feature are complete** and the application is working as described by the wireframe, go to your repository on GitHub and **open a Pull Request to merge the feature into `main`** (there is a tab for Pull Requests).

Add a short video clip of your working feature to the first comment box of the Pull Request.

- How to record a screen capture [on macOS](https://getkap.co/).
- How to record a screen capture [on Windows](https://www.screentogif.com/).

**Wait for approval before merging** the Pull Request and continuing to the next feature. **Grab the URL** of the opened Pull Request and **direct-message it to the instructor(s)** for approval via Slack.

### Merge After Approval

After your Pull Request is approved, merge it.

### Close the Issue

Once you've merged your Pull Request, **close the issue** you were working on and repeat this workflow for the next feature.

## Getting Started

[Enough jibber-jabber](https://youtu.be/Eisa5AZ20W0). Let's go!

### Create Your Repository

Create your repository using [the template provided by LearningFuze](https://github.com/Learning-Fuze/code-journal-template/generate).

1. Set the owner to **your own GitHub account**.
1. The name is **`code-journal`**.
1. The description is **`A dynamic HTML, CSS, and JavaScript journal application for coders who want to capture their notes.`**
1. Make the repository **Public**.
1. **Do not** include all branches.
1. Click **Create repository from template**.

### File an Issue for Each Feature

There is an **Issues** tab on your repository. Go to [each feature documented in this repository](./features) and for each of them do the **Issue Template** step:

1. Open a new Issue on **your personal `code-journal` repository** for the feature.
1. Give your issue the appropriate Title (it's in the feature writeup).
1. Paste the provided Markdown snippet into the Comment.

Open the Issues in this order. This is also the order in which you will build the app.

- [User can create an entry](features/user-can-create-an-entry.md)
- [User can view their entries](features/user-can-view-their-entries.md)
- [User can edit an entry](features/user-can-edit-an-entry.md)
- [User can delete an entry](features/user-can-delete-an-entry.md)

### Get the Green Light

Send a direct message to the instructor(s) that contains a link to your `code-journal` GitHub repository. And **wait** for approval to continue.

### Clone Your Repo

1. Be signed into your personal GitHub account at [https://github.com](https://github.com).
1. Go to your **Repositories** page.
1. Find your `code-journal` repository and click on it.
1. Open the `lfz-code` app.
1. Click the blue icon in the bottom-left of the Visual Studio Code window and choose **Clone Repository in Container Volume...**
1. Back on your repository page, click the **Code** button and copy the **SSH URL** from your repository. **Only the SSH URL will work**.
1. Paste the URL back into the box in Visual Studio Code and press <kbd>Return</kbd>.
1. Wait. The initial download might take a minute or two.
1. When you see the message saying "Done. Press any key to close the terminal.", press any key :)

### Read the Starter Code

You've been given some boilerplate HTML, CSS, and JavaScript files. Be sure to read through them carefully. Ignore the starter files at your own peril.

### Code!

Once you have approval and your repo is cloned, follow [the workflow](#workflow), beginning with the [first feature](features/user-can-create-an-entry.md). When you're done with all four of the given features, start adding some stretch features of your choosing. Just be sure to follow the same workflow of branching, small commits, and Pull Requests.

## Stretch Feature Ideas

Feel free to add extra features to your application once you have completed the four that have been assigned. Here are some ideas.

- User can search their entries. Provide a search box that causes the entries list to only show matches.
- User can sort their entries by date created.
- User can add tags to an entry.
- User can filter entries by tag.
- ...?
