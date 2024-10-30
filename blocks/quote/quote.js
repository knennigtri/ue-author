export default function decorate(block) {
  const quoteDiv = block.querySelector('div:last-of-type');
  const quote = document.createElement('text');
  quote.innerHTML = `<strong>${quoteDiv.innerHTML}</strong>`;
  quoteDiv.replaceWith(quote);

  const authorDiv = block.querySelector('div:nth-child(2)');
  if (authorDiv) {
    const author = document.createElement('p');
    author.innerHTML = `<b><i>${authorDiv.innerHTML}</i></b>`;
    authorDiv.replaceWith(author);
  }
}
