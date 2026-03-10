      var chatInput = document.getElementById("chat-input");
      var chatSend = document.getElementById("chat-send");
      var chatConversation = document.getElementById("chat-conversation");

      async function sendChatMessage() {
        var userMessages = chatInput.value;
        if (!userMessages.trim()) return;
        chatConversation.innerHTML += `<p>${userMessages}</p>`;
        chatInput.value = "";
        chatConversation.innerHTML += `<span class="loading-response"></span>`;
        const response = await fetch(`${ip_api}/openai/ia`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pergunta: userMessages }),
        });
        const data = await response.json();
        const loadingMsg = chatConversation.querySelector(
          "span.loading-response"
        );
        if (loadingMsg) loadingMsg.remove();
        chatConversation.innerHTML += `<span>${data.resposta}</span>`;
        // Scroll para o final
        chatConversation.scrollTop = chatConversation.scrollHeight;
      }

      chatSend.onclick = sendChatMessage;

      chatInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          sendChatMessage();
        }
      });

      chatClose = document.getElementById("chat-close");
      chatContainer = document.getElementById("chat-container");

      chatClose.onclick = function () {
        chatContainer.style.bottom = "-2000px";
      };

      chatOpen = document.getElementById("chat-toggle");

      chatOpen.onclick = function () {
        chatContainer.style.bottom = "20px";
      };