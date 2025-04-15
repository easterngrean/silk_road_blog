  // Function that loads a post HTML file and embeds the content from #post-content into the home page
  function loadPost(postURL) {
    fetch(postURL)
      .then(response => response.text())
      .then(htmlString => {
        // Parse the loaded HTML string into a new DOM object
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        // Select the element that contains the post content
        const postContent = doc.getElementById('post-content');
        if (postContent) {
          // Insert the content into your homepage container
          const container = document.getElementById('posts-container');
          // This creates a copy of the post content and adds it to the container.
          container.insertAdjacentHTML('beforeend', postContent.innerHTML);
        } else {
          console.error('Post content not found in', postURL);
        }
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }


  // Example: load multiple posts by calling the function for each post
  loadPost('posts/post1.html');
  loadPost('post2.html');
  // ... add more calls as needed.
