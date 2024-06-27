document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.querySelector('.blog-grid');
    const loadMoreButton = document.getElementById('load-more');

    const additionalPosts = [ // Array of additional blog posts to load dynamically
        {
            title: 'Handmade Craft Ideas for Beginners',
            excerpt: 'Get inspired with these easy handmade craft ideas for beginners. Perfect for those just starting out in the world of crafting...',
            link: '#'
        },
        {
            title: 'Understanding the Basics of Woodworking',
            excerpt: 'Learn the basics of woodworking with our comprehensive guide. From selecting the right wood to using essential tools...',
            link: '#'
        }
    ];

    // Event listener for the load more button
    loadMoreButton.addEventListener('click', function() {
        for (let i = 0; i < additionalPosts.length; i++) {
            const post = additionalPosts[i];

            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');

            const h3 = document.createElement('h3');
            h3.textContent = post.title;

            const p = document.createElement('p');
            p.classList.add('excerpt');
            p.textContent = post.excerpt;

            const a = document.createElement('a');
            a.href = post.link;
            a.classList.add('read-more');
            a.textContent = 'Read More';

            blogPost.appendChild(h3);
            blogPost.appendChild(p);
            blogPost.appendChild(a);

            // Append blog post div to blog grid
            blogGrid.appendChild(blogPost);
        }

        // hide the load more button after loading more posts
        loadMoreButton.style.display = 'none';
    });
});
