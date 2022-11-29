
      const text = document.querySelector('p');

      text.addEventListener('click', updateName);

      function updateName() {
        const name = prompt('Enter a new name');
        text.textContent = `User: ${name}`;
      }