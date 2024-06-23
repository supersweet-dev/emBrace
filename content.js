document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case '(':
      wrapText('(', ')', event);
      break;
    case '[':
      wrapText('[', ']', event);
      break;
    case '{':
      wrapText('{', '}', event);
      break;
    case '<':
      wrapText('<', '>', event);
      break;
    case "'":
      wrapText("'", "'", event);
      break;
    case '"':
      wrapText('"', '"', event);
      break;
    case '`':
      wrapText('`', '`', event);
      break;
  }
});
function wrapText(opening, closing, event) {
  event.preventDefault(); // Prevent the default keypress behavior
  let textarea = document.activeElement;
  let text = textarea.value;
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  let selectedText = text.substring(start, end);

  // Check if there is any text selected
  if (selectedText.length > 0) {
    document.execCommand('insertText', false, opening + selectedText + closing);
    textarea.setSelectionRange(start + opening.length, end + opening.length);
  } else {
    // If start is text length OR next character is newline
    if (
      (start === text.length || text[start] === '\n') &&
      !(event.key === "'")
    ) {
      document.execCommand('insertText', false, opening + closing);
      textarea.setSelectionRange(
        start + opening.length,
        start + opening.length
      );
    } else document.execCommand('insertText', false, event.key);
  }
}
