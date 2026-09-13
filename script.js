function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  span.onclick = () => li.classList.toggle('done');

  const del = document.createElement('span');
  del.textContent = '刪除';
  del.className = 'del';
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
  input.focus();
}

document.getElementById('taskInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});