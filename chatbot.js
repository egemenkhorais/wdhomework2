const qa = [
  { q: "java", a: "I used Java for MetroYonetim and Android apps." },
  { q: "erasmus", a: "I am currently in Timișoara at West University of Timișoara." },
  { q: "honey", a: "Uğurlu Bal is my family's natural honey brand." }
];

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const window = document.getElementById('chat-window');

  const userMsg = document.createElement('p');
  userMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
  window.appendChild(userMsg);

  const response = qa.find(item => input.value.toLowerCase().includes(item.q));
  const botMsg = document.createElement('p');
  botMsg.innerHTML = `<strong>Bot:</strong> ${response ? response.a : "Interesting! Tell me more."}`;
  window.appendChild(botMsg);

  input.value = "";
  window.scrollTop = window.scrollHeight;
});
