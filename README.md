# Notes CLI Application

**Notes CLI** is a command-line application developed using Node.js. It provides users with a simple solution for managing notes by allowing them to add, delete, list, and edit notes directly from the command line.

## Get Started

To get started with the Notes CLI application, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine:

``` vim
git clone <repository-url>
cd notes-cli
```


### 2. Set Up Environment Variables

To make the `notes.cmd` file accessible from anywhere in the command prompt, you need to add its directory to your system's PATH environment variable:

- Open the Start menu and search for "Environment Variables".
- Select "Edit the system environment variables" from the results.
- Click on "Environment Variables" at the bottom of the window.
- In the "System variables" section, select "Path" and click "Edit".
- Click "New" and add the path to the directory containing the `notes.cmd` file.
- Click "OK" to close the windows.

### 3. Usage

Once you've set up the environment variables, you can use the Notes CLI application from anywhere in the command prompt. Here are some example commands:

- [x] To add a note:

    `notes add "This is a note"`

- [ ] To delete a note:

    `notes delete <id>`

- [ ] To edit a note:

    `notes edit <id> "edited note"`

- [ ] To display all:

    `notes display`


## Key Features

- **Note Management:** Users can add, delete, list, and edit notes using custom commands.
- **Custom Commands:** Users can interact with the application using intuitive commands like `notes add`, `notes delete`, `notes list`, and `notes edit`.
- **Flexibility:** The application can be easily customized and extended to suit specific needs.

## Future Enhancements

We are actively working on enhancing Notes CLI with the following features:

- [ ] **Colorful Output:** Implementing colorful output for a better user experience.
- [ ] **Search Functionality:** Adding a search functionality to find notes by keyword.
- [ ] **Encryption:** Planned feature to encrypt notes for enhanced security.

### Running Environment

Notes CLI has been tested and is currently running on Windows operating systems.

### Connect With Us

Stay informed about Notes CLI's development and engage with us on social media:

- [Twitter](https://twitter.com/mukulownsyou)
- [Instagram](https://instagram.com/mukulownsyou)

Thank you for choosing Notes CLI!
