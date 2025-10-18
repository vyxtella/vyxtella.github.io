document.querySelectorAll('.aboutmetoggle').forEach(button => {
  button.addEventListener('click', () => {

    const next = button.nextElementSibling;
    const targetClass = [...next.classList].find(cls => cls !== 'aboutmebody');
    const label = button.innerHTML.slice(2);

    document.querySelectorAll(`.aboutmebody.${targetClass}`).forEach(content => {

      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
    });

    button.textContent = button.textContent.startsWith('-')
    ? `+ ${label}`
    : `- ${label}`;
  });
});
