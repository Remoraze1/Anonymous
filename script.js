document.addEventListener('DOMContentLoaded', function() {
    loadThreads();

    document.getElementById('thread-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('thread-title').value;
        const body = document.getElementById('thread-body').value;

        addThread(title, body);
        saveThread(title, body);

        document.getElementById('thread-form').reset();
    });
});

// Add a thread to the DOM
function addThread(title, body) {
    const threadContainer = document.createElement('div');
    threadContainer.classList.add('thread');
    
    const threadTitle = document.createElement('h3');
    threadTitle.innerText = title;

    const threadBody = document.createElement('p');
    threadBody.innerText = body;

    threadContainer.appendChild(threadTitle);
    threadContainer.appendChild(threadBody);

    document.getElementById('threads-container').appendChild(threadContainer);
}

// Save the thread to localStorage
function saveThread(title, body) {
    let threads = JSON.parse(localStorage.getItem('threads')) || [];
    threads.push({ title: title, body: body });
    localStorage.setItem('threads', JSON.stringify(threads));
}

// Load threads from localStorage
function loadThreads() {
    const threads = JSON.parse(localStorage.getItem('threads')) || [];
    threads.forEach(thread => {
        addThread(thread.title, thread.body);
    });
}
