# Contribution Guidelines

In this file you can find all the rules about contributing to the project.

It is assumed that you are using *git* through the command-line although there are some GUI alternatives which you are free to use instead.

---
## Writing code

You can use whichever text editor you prefer as long as it has support for a **.editorconfig** file. You can see a full list of the supported editors at the [EditorConfig project](https://editorconfig.org)'s page.

***Note**: Please do not forget to install the appropriate plugin if your editor of choice requires one.*

### HTML Conventions

Below are some rules you should follow when editing HTML code.

- All child elements should be indented.
- Empty lines should be placed between elements of the same level which have different meanings.
- Special characters should be inserted using their hexadecimal code (``&#x20AC;`` to display the &#x20AC; symbol)

Example:
```html
<!DOCTYPE html>

<html>
	<head>
		<title>Title</title>
	</head>

	<body>
		<h1>A heading</h1>
		<p>
			A paragraph.
		</p>
		<p>
			A second paragraph connected to the first one.
		</p>

		<h1>A second heading</h1>
		<p>
			A completely different paragraph.
		</p>
	</body>
</html>
```
instead of
```html
<!DOCTYPE html>
<html>
<head>
<title>Title</title>
</head>
<body>
<h1>A heading</h1>
<p>
A paragraph.
</p>
<p>
A second paragraph connected to the first one.
</p>
<h1>A second heading</h1>
<p>
A completely different paragraph.
</p>
</body>
</html>
```

### CSS Conventions

Below are some rules you should follow when editing CSS code. The CSS code **MUST** be separated into external files!

- There should be a space between any CSS selector and the opening bracket.
- The closing bracket shoould be on a new line.
- A `;` should be put after **every** line of code.
- There should be a space between the `:` after the property name and its value.
- Colours should be specified using their hex code `#rrggbb` (`#ff0000` instead of `rgb(255,0,0)`) or `#rrggbbaa`.

Example:
```css
p {
	margin: 0px;
	color: #ff0000;
}
```
instead of
```css
p{
margin:0px;
color:#ff0000}
```

### JavaScript Conventions

Below are some rules you should follow when editing JavaScript code. All JavaScript code **MUST** be separated into external files!

- Code should be logically separated with empty lines.
- Use spaces between operators and operands.
- Variables and functions should have meaningful names.
- The code should be properly indented.

## Working with *git*

***Important**: If you don't know how to work with *git* from the command line, it is recommended that you find and use a GUI client instead.*

***Important**: When you want to achieve something, do **not** use hack solutions such as* drag-n-drop *or* copy-paste.

To make changes to the project you will need to download and install [git](https://git-scm.com) if you haven't done so already. If you need help, there are many guides online which cover the process.

After you have *git* installed on your system, you need to clone the repository by navigating to the parent directory in which you want the repository to be stored on your system and running `git clone`.

Commit your changes often and in an orderly manner and write meaningful commit messages. Do not make big all-in-one commits. When you are ready to share your changes, run `git pull` and then `git push`.

***Important**: **Always** run `git pull` before `git push`!*

## Merge commits

When merging any branch into a branch that is not `master` (merging `master` -> `alpha` for example), write your commit message in the following format: `Merge: <from_branch> -> <to_branch>`. If additional clarification must be provided, do so on a new line.

## Working with *GitHub Issues*

*Issues* are used for tracking different tasks like bugs to fix or features to add.

Each issue has an *assignee* – a person assigned to work on it.

An issue can have an unlimited ammount of *labels* which can help when organising different types of issues.

Issues can be useful when talking about a specific commit or pice of code.
