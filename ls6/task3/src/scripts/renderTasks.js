const list = document.querySelector('.list');

export const renderTasks = tasksList => {
  if (!tasksList) return;
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');

      const listItemCheckbox = document.createElement('input');
      listItemCheckbox.setAttribute('type', 'checkbox');
      listItemCheckbox.checked = done;
      listItemCheckbox.classList.add('list-item__checkbox');
      if (done) {
        listItem.classList.add('list-item_done');
      }

      const listItemText = document.createElement('span');
      listItemText.classList.add('list-item__text');
      listItemText.textContent = text;

      const listItemClose = document.createElement('span');
      listItemClose.classList.add('list-item__close');
      listItemClose.textContent = '+';

      listItem.append(listItemCheckbox, listItemText, listItemClose);
      listItem.setAttribute('data-id', id);

      return listItem;
    });

  list.innerHTML = '';
  list.append(...tasksElems);
};
