//Task Three
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Legth of arrays must be the same");
    }

    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

module.exports = { createUserProfiles };
