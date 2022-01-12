'use strict';
document.loadList = async () => {
    const response = await fetch("/api/allItems");
    return await response.json();
}