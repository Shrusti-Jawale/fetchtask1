function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        var htmlString4 = `
        <tr>
            <th> UserId </th>
            <th> Id </th>
            <th> Title </th>
            <th> Completed </th>
        </tr>
        `

        json.forEach(post4 => {
            htmlString4  += `
            <tr>
                <td> ${post4.userId} </td>
                <td> ${post4.id} </td>
                <td> ${post4.title} </td>
                <td> ${post4.completed} </td>
            </tr>
            `
        });
        document.getElementById("post-table4").innerHTML = htmlString4;
    });

}






