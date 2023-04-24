// const posts = [
//     {
//         title: 'This is post title 1',
//         body: 'Description about the post 1'
//     },
//     {
//         title: 'This is post title 2',
//         body: 'Description about the post 2'
//     },
//     {
//         title: 'This is post title 3',
//         body: 'Description about the post 3'
//     },
//     {
//         title: 'This is post title 4',
//         body: 'Description about the post 4'
//     },
//     {
//         title: 'This is post title 5',
//         body: 'Description about the post 5'
//     },
//     {
//         title: 'This is post title 6',
//         body: 'Description about the post 6'
//     },
//     {
//         title: 'This is post title 7',
//         body: 'Description about the post 7'
//     },
//     {
//         title: 'This is post title 8',
//         body: 'Description about the post 8'
//     }
        
// ];


// fetch Data

const fetchData = async (config) => {
    try {
        const res = await axios(config);
        return res.data;
    }catch(error) {
        throw Error('Data is not fetched!');
    }
}

const showData = document.getElementById('showMe');
showData.addEventListener('click', () => {
    const postsElement = document.querySelector('.posts');

    const loadAllData = async () => {
        const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
        posts.map((post) => {
            const postElement = document.createElement('div');
            postElement.classList.add("post");
            postElement.innerHTML = `
            <h4 class="post-title"><b>Title :</b> ${post.title}</h4>
            <p class="post-body"><b>Id :</b> ${post.id}</p>
            <p class="post-body"><b>UserId :</b> ${post.userId}</p>
            <p class="post-body"><b>Description :</b> ${post.body}</p>
            `; 
            postsElement.appendChild(postElement);
        })
    }
    loadAllData();
})



/* <div class="post">
    <h4 class="post-title">Post title1</h4>
    <p class="post-body">Description1</p>
</div> */