# emBrace

emBrace is a browser extension that enables single press quote and brace surround functionality in the browser, similar to an IDE.

## Description

This extension allows you to wrap selected text in various types of brackets, parentheses, or quotes by pressing the corresponding key. If no text is selected, the character will be inserted at the cursor position. If the cursor is at the end of the text or the next character is a newline, the character will be inserted along with its closing counterpart, with the cursor placed between them. For single quotes (`'`), if no text is selected, only a single quote will be inserted to allow for normal apostrophe use.

## Usage

1. Install the extension following the instructions above.
2. Navigate to any webpage with input fields or textareas.
3. Select some text and press any of the following keys to wrap the text:
   - `(` : Wraps the text in parentheses `()`.
   - `[` : Wraps the text in square brackets `[]`.
   - `{` : Wraps the text in curly braces `{}`.
   - `<` : Wraps the text in angle brackets `<>`.
   - `'` : Wraps the text in single quotes `''`.
   - `"` : Wraps the text in double quotes `""`.
   - `` ` `` : Wraps the text in backticks ``````.

## Issues

Currently, the extension does not work on text editors like Google Docs or other sites that protect against text injection. Compatibility with other sites offering similar functionality has not been tested.

## Planned Features

- Pause Button
- Auto disable on password boxes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
