document.querySelectorAll('.aboutmetoggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const label = button.innerHTML.substring(2);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.innerHTML = button.innerHTML === `- ${label}` ? `+ ${label}` : `- ${label}`;
  });
});
