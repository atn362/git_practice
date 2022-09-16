const outputElement = document.getElementById('output');

async function getData() {
    const response = await fetch('https://www.reddit.com/r/programminghumor/.json');
    if (response === false) {
    console.error('unable to get data');
    return
    }

    return await response.json();

}


function getPostList(data) {
    return data.data.children.map(obj => {
        return {title: obj.data.title, url: obj.data.url, author: obj.data.author }
    });
}

async function renderPostList() {
    const data = await getData();
    if (data === null) {
        outputElement.innerText = "unable to get post data";
        return
    }
    const postList = getPostList(data);
    for (const post of postList) {
        //template literal below
       outputElement.innerHTML += `<div class="title">
    <a href="${post.url}">${post.title} : ${post.author}</a>
    </div>`;
       console.log(getPostList(data))
    }
}

renderPostList();