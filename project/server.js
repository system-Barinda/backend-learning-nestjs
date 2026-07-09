async function createItem(item) {
    const items = await readItems();
    items.push(item);
    await writeItems(items);
}

async function updateItem(id, updatedItem) {
    const items = await readItems();

    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        throw new Error("Item not found");
    }

    items[index] = updatedItem;

    await writeItems(items);
}

async function deleteItem(id) {
    const items = await readItems();
    const filtered = items.filter(item => item.id !== id);
    await writeItems(filtered);
}