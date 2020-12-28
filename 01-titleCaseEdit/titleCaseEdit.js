function titleCaseEdit(title) {
    var separate = title.split(' ');

    for (var i in separate) {
        separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].substring(1);
    }
    title = separate.join(' ');
    return title;
}



// Do not edit this line;
module.exports = titleCaseEdit;