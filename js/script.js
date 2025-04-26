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
          container.insertAdjacentHTML('afterbegin', postContent.innerHTML);
        } else {
          console.error('Post content not found in', postURL);
        }
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }

  // Example: load multiple posts by calling the function for each post
  loadPost('posts/130425.html');
  loadPost('posts/250425.html');
  
  // ... add more calls as needed.

  // Function that loads a links from the homepage into each post
  function loadLinks(indexURL) {
    fetch(indexURL)
      .then(response => response.text())
      .then(htmlString => {
        // Parse the loaded HTML string into a new DOM object
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        // Select the element that contains the links
        const linksContent = doc.getElementById('post-links');
        if (linksContent) {
          // Insert the content into your post
          const linkContainer = document.getElementById('links-container');
          // This creates a copy of the post content and adds it to the container.
          linkContainer.insertAdjacentHTML('beforeend', linksContent.innerHTML);
        } else {
          console.error('Post content not found in', postURL);
        }
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }


  // call the function to act on all new posts (hopefully)
  loadLinks('/silk_road_blog/index.html');
 
